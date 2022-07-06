package cu.rigoberto.robotx.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name="finded")
data class FindedEntity (
    @Id
    val id: String? = null,

    @Column(name="created")
    @Temporal(TemporalType.TIMESTAMP)
    val created: Date? = null,

    @Column(name="origin")
    val origin: String? = null,

    @Column(name="total_price")
    val totalPrice: Float? = null,

    @Column(name="mi_price")
    val miPrice: Float? = null,

    @ManyToOne
    @JoinColumn(name = "load_id", nullable = false)
    val load: LoadEntity,
)