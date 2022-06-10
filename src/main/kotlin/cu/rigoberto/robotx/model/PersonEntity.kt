package cu.rigoberto.robotx.model

import javax.persistence.*
import javax.validation.constraints.NotEmpty
import javax.validation.constraints.NotNull

@Entity
@Table(name="person")
data class PersonEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null,

    @Column(name="first_name", nullable = false)
    @NotEmpty(message = "FirstName is required")
    @NotNull
    val firstName: String? = null,

    @Column(name="last_name", nullable = false)
    @NotEmpty(message = "LastName is required")
    @NotNull
    val lastName: String? = null
)