package cu.rigoberto.robotx.controller

import cu.rigoberto.robotx.entity.LoadEntity
import cu.rigoberto.robotx.entity.toModel
import cu.rigoberto.robotx.model.LoadModel
import cu.rigoberto.robotx.model.toEntity
import cu.rigoberto.robotx.repository.LoadRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.validation.Valid

@RestController
@RequestMapping("/api/load")
class LoadController(private val loadRepository: LoadRepository) {
    @GetMapping
    fun getAll(): List<LoadModel> = loadRepository.findAll().map { l -> l.toModel() }

    @GetMapping("/{id}")
    fun getById(@PathVariable(value = "id") loadId: Int): ResponseEntity<LoadModel> {
        return loadRepository.findById(loadId).map { load ->
            ResponseEntity.ok(load.toModel())
        }.orElse(ResponseEntity.notFound().build())
    }

    @PostMapping
    fun create(@Valid @RequestBody newLoad: LoadModel): ResponseEntity<LoadModel> {
        val createLoad: LoadEntity = newLoad.copy(
            created = Date(System.currentTimeMillis())
        ).toEntity()
        return ResponseEntity.ok().body(loadRepository.save(createLoad).toModel())
    }

    @PutMapping("/{id}")
    fun update(@PathVariable(value = "id") loadId: Int, @Valid @RequestBody newLoad: LoadModel): ResponseEntity<LoadModel> {
        return loadRepository.findById(loadId).map {
            val updatedLoad: LoadEntity = newLoad.copy(
                id = loadId,
                created = it.created
            ).toEntity()
            ResponseEntity.ok().body(loadRepository.save(updatedLoad).toModel())
        }.orElse(ResponseEntity.notFound().build())
    }

    @DeleteMapping("/{id}")
    fun deletePostById(@PathVariable(value = "id") loadId: Int): ResponseEntity<LoadModel> {
        return loadRepository.findById(loadId).map { existingLoad  ->
            loadRepository.delete(existingLoad)
            ResponseEntity.ok().body(existingLoad.toModel())
        }.orElse(ResponseEntity.notFound().build())
    }
}