package cu.rigoberto.robotx.access

import cu.rigoberto.robotx.entity.LoadEntity

interface CoyoteAccessEvent {
    fun onStepCompleted(step: String)
    fun onFindedRow(id: String, origin: String, totalPrice: String?, miPrice: String?)
    fun onStepError(step: String, e: Exception)
}