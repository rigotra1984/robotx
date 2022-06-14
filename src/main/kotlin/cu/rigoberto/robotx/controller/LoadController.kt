package cu.rigoberto.robotx.controller

import cu.rigoberto.robotx.model.entity.LoadEntity
import cu.rigoberto.robotx.repository.LoadRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/load")
class LoadController(private val loadRepository: LoadRepository) {
    @GetMapping
    fun getAll(): List<LoadEntity> = loadRepository.findAll()

    @GetMapping("/{id}")
    fun getById(@PathVariable(value = "id") loadId: Int): ResponseEntity<LoadEntity> {
        return loadRepository.findById(loadId).map { load ->
            ResponseEntity.ok(load)
        }.orElse(ResponseEntity.notFound().build())
    }

    @PostMapping
    fun create(@Valid @RequestBody newLoad: LoadEntity): LoadEntity = loadRepository.save(newLoad)

    @PutMapping("/{id}")
    fun update(@PathVariable(value = "id") loadId: Int, @Valid @RequestBody newLoad: LoadEntity): ResponseEntity<LoadEntity> {
        return loadRepository.findById(loadId).map { existingLoad ->
            val updatedLoad: LoadEntity = existingLoad.copy(
                originValues = newLoad.originValues,
                originRadius = newLoad.originRadius,
                destinationValues = newLoad.destinationValues,
                destinationRadius = newLoad.destinationRadius,
                pickupStart = newLoad.pickupStart,
                pickupEnd = newLoad.pickupEnd,
                equipmentType = newLoad.equipmentType,
                loadNumber = newLoad.loadNumber,
                advancedDisplayPreference = newLoad.advancedDisplayPreference,
                advancedPickupStart = newLoad.advancedPickupStart,
                advancedPickupEnd = newLoad.advancedPickupEnd,
                advancedPickupStartTime = newLoad.advancedPickupStartTime,
                advancedPickupEndTime = newLoad.advancedPickupEndTime,
                advanced_DeliveryStart = newLoad.advanced_DeliveryStart,
                advancedDeliveryEnd = newLoad.advancedDeliveryEnd,
                advancedDeliveryStartTime = newLoad.advancedDeliveryStartTime,
                advancedDeliveryEndTime = newLoad.advancedDeliveryEndTime,
                advancedEquipmentMaxLength = newLoad.advancedEquipmentMaxLength,
                advancedEquipmentMaxWeigth = newLoad.advancedEquipmentMaxWeigth,
                advancedAttributes = newLoad.advancedAttributes,
            )
            ResponseEntity.ok().body(loadRepository.save(updatedLoad))
        }.orElse(ResponseEntity.notFound().build())
    }

    @DeleteMapping("/{id}")
    fun deletePostById(@PathVariable(value = "id") loadId: Int): ResponseEntity<Void> {
        return loadRepository.findById(loadId).map { existingLoad  ->
            loadRepository.delete(existingLoad)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())
    }
}