package cu.rigoberto.robotx.repository

import cu.rigoberto.robotx.entity.FindedEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface FindedRepository : JpaRepository<FindedEntity, String>