package cu.rigoberto.robotx.entity

import cu.rigoberto.robotx.model.LoadModel
import cu.rigoberto.robotx.util.DateUtil
import java.util.*
import javax.persistence.*

@Entity
@Table(name="load")
data class LoadEntity (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null,

    @Column(name="created")
    @Temporal(TemporalType.TIMESTAMP)
    val created: Date? = null,

    @Column(name="origin_values")
    val originValues: String? = null,

    @Column(name="origin_radius")
    val originRadius: Int? = null,

    @Column(name="destination_values")
    val destinationValues: String? = null,

    @Column(name="destination_radius")
    val destinationRadius: Int? = null,

    @Column(name="pickup_start")
    @Temporal(TemporalType.TIMESTAMP)
    val pickupStart: Date? = null,

    @Column(name="pickup_end")
    @Temporal(TemporalType.TIMESTAMP)
    val pickupEnd: Date? = null,

    @Column(name="equipment_type")
    val equipmentType: String? = null,

    @Column(name="load_number")
    val loadNumber: Int? = null,

    //advanced
    @Column(name="advanced_display_preference")
    val advancedDisplayPreference: String? = null,

    @Column(name="advanced_pickup_start")
    @Temporal(TemporalType.TIMESTAMP)
    val advancedPickupStart: Date? = null,

    @Column(name="advanced_pickup_end")
    @Temporal(TemporalType.TIMESTAMP)
    val advancedPickupEnd: Date? = null,

    @Column(name="advanced_pickup_start_time")
    val advancedPickupStartTime: String? = null,

    @Column(name="advanced_pickup_end_time")
    val advancedPickupEndTime: String? = null,

    @Column(name="advanced_delivery_start")
    @Temporal(TemporalType.TIMESTAMP)
    val advancedDeliveryStart: Date? = null,

    @Column(name="advanced_delivery_end")
    @Temporal(TemporalType.TIMESTAMP)
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

fun LoadEntity.status(): String {
    this.pickupStart//
    this.pickupEnd//
    this.advancedPickupStart//
    this.advancedPickupEnd//
    this.advancedPickupStartTime//
    this.advancedPickupEndTime//
    this.advancedDeliveryStart//
    this.advancedDeliveryEnd//
    this.advancedDeliveryStartTime//
    this.advancedDeliveryEndTime//

    var now = Date(System.currentTimeMillis())
    //levar las horas a UTC para compararlas

    if(this.pickupStart != null || this.advancedPickupStart != null) {
        var timeAdvancedPickupStartTimeHour = 0
        var timeAdvancedPickupStartTimeMinute = 0
        if(this.advancedPickupStartTime != null) {
            var match = Regex("(\\d{1,2}):(\\d{1,2}) (AM|PM)").find(this.advancedPickupStartTime)
            if(match != null) {
                var (hour, minute) = match.destructured
                timeAdvancedPickupStartTimeHour = Integer.parseInt(hour)
                timeAdvancedPickupStartTimeMinute = Integer.parseInt(minute)
            }
        }

        if(this.advancedPickupStart != null) {
            var date = DateUtil.setTime(this.advancedPickupStart, timeAdvancedPickupStartTimeHour, timeAdvancedPickupStartTimeMinute)
            if(date > now) {
                return "inactive"
            }
        }


        if(this.pickupStart != null && this.pickupStart > now) {
            return "inactive"
        }
    }

    return "active"
}

fun LoadEntity.toModel(): LoadModel {
    var equipmentTypeArray: Array<String> = emptyArray()
    if(!this.equipmentType.isNullOrBlank())
    {
        equipmentTypeArray = this.equipmentType.split(",").toTypedArray().map{ it.trim() }.toTypedArray()
    }

    var advancedAttributesArray: Array<String> = emptyArray()
    if(!this.advancedAttributes.isNullOrBlank())
    {
        advancedAttributesArray = this.advancedAttributes.split(",").toTypedArray().map{ it.trim() }.toTypedArray()
    }

    return LoadModel(
        id = this.id,
        created = this.created,
        originValues = this.originValues,
        originRadius = this.originRadius,
        destinationValues = this.destinationValues,
        destinationRadius = this.destinationRadius,
        pickupStart = this.pickupStart,
        pickupEnd = this.pickupEnd,
        equipmentType = equipmentTypeArray,//multiple
        loadNumber = this.loadNumber,
        advancedDisplayPreference = this.advancedDisplayPreference,
        advancedPickupStart = this.advancedPickupStart,
        advancedPickupEnd = this.advancedPickupEnd,
        advancedPickupStartTime = this.advancedPickupStartTime,
        advancedPickupEndTime = this.advancedPickupEndTime,
        advancedDeliveryStart = this.advancedDeliveryStart,
        advancedDeliveryEnd = this.advancedDeliveryEnd,
        advancedDeliveryStartTime = this.advancedDeliveryStartTime,
        advancedDeliveryEndTime = this.advancedDeliveryEndTime,
        advancedEquipmentMaxLength = this.advancedEquipmentMaxLength,
        advancedEquipmentMaxWeigth = this.advancedEquipmentMaxWeigth,
        advancedAttributes = advancedAttributesArray,//multiple
        status = this.status()
    )
}