package cu.rigoberto.robotx.model

import com.fasterxml.jackson.annotation.JsonFormat
import cu.rigoberto.robotx.entity.LoadEntity
import cu.rigoberto.robotx.util.DateUtil
import java.util.*

data class LoadModel (
    val id: Int? = null,

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    val created: Date? = null,

    val originValues: String? = null,

    val originRadius: Int? = null,

    val destinationValues: String? = null,

    val destinationRadius: Int? = null,

//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MMMM d, yyyy")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    val pickupStart: Date? = null,

//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MMMM d, yyyy")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    val pickupEnd: Date? = null,

    val equipmentType: Array<String> = emptyArray(),

    val loadNumber: Int? = null,

    //advanced
    val advancedDisplayPreference: String? = null,

//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MMMM d, yyyy")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    val advancedPickupStart: Date? = null,

//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MMMM d, yyyy")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    val advancedPickupEnd: Date? = null,

    val advancedPickupStartTime: String? = null,

    val advancedPickupEndTime: String? = null,

//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MMMM d, yyyy")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    val advancedDeliveryStart: Date? = null,

//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MMMM d, yyyy")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    val advancedDeliveryEnd: Date? = null,

    val advancedDeliveryStartTime: String? = null,

    val advancedDeliveryEndTime: String? = null,

    val advancedEquipmentMaxLength: Float? = null,

    val advancedEquipmentMaxWeigth: Float? = null,

    val advancedAttributes: String? = null,

    val status: String? = null,

    val minMiPrice: Float? = null,

    ) {

    fun isAdvanced(): Boolean {
        if (!advancedDisplayPreference.isNullOrBlank()) {
            return true
        }
        if (advancedPickupStart != null) {
            return true
        }
        if (advancedPickupEnd != null) {
            return true
        }
        if (!advancedPickupStartTime.isNullOrBlank()) {
            return true
        }
        if (!advancedPickupEndTime.isNullOrBlank()) {
            return true
        }
        if (advancedDeliveryStart != null) {
            return true
        }
        if (advancedDeliveryEnd != null) {
            return true
        }
        if (!advancedDeliveryStartTime.isNullOrBlank()) {
            return true
        }
        if (!advancedDeliveryEndTime.isNullOrBlank()) {
            return true
        }
        if (advancedEquipmentMaxLength != null) {
            return true
        }
        if (advancedEquipmentMaxWeigth != null) {
            return true
        }
        if (!advancedAttributes.isNullOrBlank()) {
            return true
        }

        return false
    }
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as LoadModel

        if (id != other.id) return false
        if (created != other.created) return false
        if (originValues != other.originValues) return false
        if (originRadius != other.originRadius) return false
        if (destinationValues != other.destinationValues) return false
        if (destinationRadius != other.destinationRadius) return false
        if (pickupStart != other.pickupStart) return false
        if (pickupEnd != other.pickupEnd) return false
        if (!equipmentType.contentEquals(other.equipmentType)) return false
        if (loadNumber != other.loadNumber) return false
        if (advancedDisplayPreference != other.advancedDisplayPreference) return false
        if (advancedPickupStart != other.advancedPickupStart) return false
        if (advancedPickupEnd != other.advancedPickupEnd) return false
        if (advancedPickupStartTime != other.advancedPickupStartTime) return false
        if (advancedPickupEndTime != other.advancedPickupEndTime) return false
        if (advancedDeliveryStart != other.advancedDeliveryStart) return false
        if (advancedDeliveryEnd != other.advancedDeliveryEnd) return false
        if (advancedDeliveryStartTime != other.advancedDeliveryStartTime) return false
        if (advancedDeliveryEndTime != other.advancedDeliveryEndTime) return false
        if (advancedEquipmentMaxLength != other.advancedEquipmentMaxLength) return false
        if (advancedEquipmentMaxWeigth != other.advancedEquipmentMaxWeigth) return false
        if (advancedAttributes != other.advancedAttributes) return false
        if (status != other.status) return false
        if (minMiPrice != other.minMiPrice) return false

        return true
    }

    override fun hashCode(): Int {
        var result = id ?: 0
        result = 31 * result + (originValues?.hashCode() ?: 0)
        result = 31 * result + (created?.hashCode() ?: 0)
        result = 31 * result + (originRadius ?: 0)
        result = 31 * result + (destinationValues?.hashCode() ?: 0)
        result = 31 * result + (destinationRadius ?: 0)
        result = 31 * result + (pickupStart?.hashCode() ?: 0)
        result = 31 * result + (pickupEnd?.hashCode() ?: 0)
        result = 31 * result + equipmentType.contentHashCode()
        result = 31 * result + (loadNumber ?: 0)
        result = 31 * result + (advancedDisplayPreference?.hashCode() ?: 0)
        result = 31 * result + (advancedPickupStart?.hashCode() ?: 0)
        result = 31 * result + (advancedPickupEnd?.hashCode() ?: 0)
        result = 31 * result + (advancedPickupStartTime?.hashCode() ?: 0)
        result = 31 * result + (advancedPickupEndTime?.hashCode() ?: 0)
        result = 31 * result + (advancedDeliveryStart?.hashCode() ?: 0)
        result = 31 * result + (advancedDeliveryEnd?.hashCode() ?: 0)
        result = 31 * result + (advancedDeliveryStartTime?.hashCode() ?: 0)
        result = 31 * result + (advancedDeliveryEndTime?.hashCode() ?: 0)
        result = 31 * result + (advancedEquipmentMaxLength?.hashCode() ?: 0)
        result = 31 * result + (advancedEquipmentMaxWeigth?.hashCode() ?: 0)
        result = 31 * result + (advancedAttributes?.hashCode() ?: 0)
        result = 31 * result + (status?.hashCode() ?: 0)
        result = 31 * result + (minMiPrice?.hashCode() ?: 0)
        return result
    }
}

fun LoadModel.toEntity(): LoadEntity {
    return LoadEntity(
        id = this.id,
        created = this.created,
        originValues = this.originValues,
        originRadius = this.originRadius,
        destinationValues = this.destinationValues,
        destinationRadius = this.destinationRadius,
        pickupStart = DateUtil.setTimeClear(this.pickupStart),
        pickupEnd = DateUtil.setTimeClear(this.pickupEnd),
        equipmentType = this.equipmentType.joinToString(),//multiple
        loadNumber = this.loadNumber,
        advancedDisplayPreference = this.advancedDisplayPreference,
        advancedPickupStart = DateUtil.setTimeClear(this.advancedPickupStart),
        advancedPickupEnd = DateUtil.setTimeClear(this.advancedPickupEnd),
        advancedPickupStartTime = this.advancedPickupStartTime,
        advancedPickupEndTime = this.advancedPickupEndTime,
        advancedDeliveryStart = DateUtil.setTimeClear(this.advancedDeliveryStart),
        advancedDeliveryEnd = DateUtil.setTimeClear(this.advancedDeliveryEnd),
        advancedDeliveryStartTime = this.advancedDeliveryStartTime,
        advancedDeliveryEndTime = this.advancedDeliveryEndTime,
        advancedEquipmentMaxLength = this.advancedEquipmentMaxLength,
        advancedEquipmentMaxWeigth = this.advancedEquipmentMaxWeigth,
        advancedAttributes = this.advancedAttributes,
        minMiPrice = this.minMiPrice,
    )
}