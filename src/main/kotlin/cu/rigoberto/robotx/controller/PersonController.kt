package cu.rigoberto.robotx.controller

import cu.rigoberto.robotx.model.entity.PersonEntity
import cu.rigoberto.robotx.repository.PersonRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/person")
class PersonController(private val personRepository: PersonRepository) {
    @GetMapping
    fun getAll(): List<PersonEntity> = personRepository.findAll()

    @GetMapping("/{id}")
    fun getById(@PathVariable(value = "id") personId: Int): ResponseEntity<PersonEntity> {
        return personRepository.findById(personId).map { post ->
            ResponseEntity.ok(post)
        }.orElse(ResponseEntity.notFound().build())
    }

    @PostMapping
    fun create(@Valid @RequestBody newPerson: PersonEntity): PersonEntity = personRepository.save(newPerson)

    @PutMapping("/{id}")
    fun update(@PathVariable(value = "id") personId: Int, @Valid @RequestBody newPerson: PersonEntity): ResponseEntity<PersonEntity> {
        return personRepository.findById(personId).map { existingPerson ->
            val updatedPost: PersonEntity = existingPerson.copy(firstName = newPerson.firstName, lastName = newPerson.lastName)
            ResponseEntity.ok().body(personRepository.save(updatedPost))
        }.orElse(ResponseEntity.notFound().build())
    }

    @DeleteMapping("/{id}")
    fun deletePostById(@PathVariable(value = "id") personId: Int): ResponseEntity<Void> {
        return personRepository.findById(personId).map { existingPerson  ->
            personRepository.delete(existingPerson)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())
    }
}