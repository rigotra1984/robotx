package cu.rigoberto.robotx.repository

import cu.rigoberto.robotx.model.entity.LoadEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface LoadRepository : JpaRepository<LoadEntity, Int>