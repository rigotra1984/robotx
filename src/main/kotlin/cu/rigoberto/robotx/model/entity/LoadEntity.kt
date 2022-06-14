package cu.rigoberto.robotx.model.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name="load")
data class LoadEntity (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null,

    @Column(name="origin_values")
    val originValues: String? = null,

    @Column(name="origin_radius")
    val originRadius: Int? = null,

    @Column(name="destination_values")
    val destinationValues: String? = null,

    @Column(name="destination_radius")
    val destinationRadius: Int? = null,

    @Column(name="pickup_start")
    val pickupStart: Date? = null,

    @Column(name="pickup_end")
    val pickupEnd: Date? = null,

    @Column(name="equipment_type")
    val equipmentType: String? = null,

    @Column(name="load_number")
    val loadNumber: Int? = null,

    //advanced
    @Column(name="advanced_display_preference")
    val advancedDisplayPreference: String? = null,

    @Column(name="advanced_pickup_start")
    val advancedPickupStart: Date? = null,

    @Column(name="advanced_pickup_end")
    val advancedPickupEnd: Date? = null,

    @Column(name="advanced_pickup_start_time")
    val advancedPickupStartTime: String? = null,

    @Column(name="advanced_pickup_end_time")
    val advancedPickupEndTime: String? = null,

    @Column(name="advanced_delivery_start")
    val advanced_DeliveryStart: Date? = null,

    @Column(name="advanced_delivery_end")
    val advancedDeliveryEnd: Date? = null,

    @Column(name="advanced_delivery_start_time")
    val advancedDeliveryStartTime: String? = null,

    @Column(name="advanced_delivery_end_time")
    val advancedDeliveryEndTime: String? = null,

    @Column(name="advanced_equipment_max_length")
    val advancedEquipmentMaxLength: Float? = null,

    @Column(name="advanced_equipment_max_weigth")
    val advancedEquipmentMaxWeigth: Float? = null,

    @Column(name="advanced_attributes")
    val advancedAttributes: String? = null,

)