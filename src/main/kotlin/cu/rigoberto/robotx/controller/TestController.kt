package cu.rigoberto.robotx.controller

import cu.rigoberto.robotx.access.CoyoteAccessEvent
import cu.rigoberto.robotx.access.CoyoteAccess
import cu.rigoberto.robotx.entity.FindedEntity
import cu.rigoberto.robotx.entity.LoadEntity
import cu.rigoberto.robotx.event.AccessEvent
import cu.rigoberto.robotx.event.Observer
import cu.rigoberto.robotx.repository.FindedRepository
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*
import kotlin.collections.ArrayList

@RestController
@RequestMapping("/api/test")
class TestController(private val findedRepository: FindedRepository) {

    @Value("\${coyote.username}")
    lateinit var coyoteUserName: String

    @Value("\${coyote.password}")
    lateinit var coyotePassword: String

    @Value("\${telegram.api.token}")
    lateinit var token: String

    @Value("\${telegram.api.chat_id}")
    lateinit var chatId: String

    @GetMapping
    fun testRequest(): ResponseEntity<ArrayList<String>> {

//        System.setProperty("webdriver.chrome.driver","/Users/rigo/ProjectSoft/selenium-driver/chromedriver")

        var loads = ArrayList<LoadEntity>()
        var load1 = LoadEntity(
            id = 1,
            created = Date(System.currentTimeMillis()),
            originValues = "West Monroe, LA",
            //equipmentType = "Reefer",
            //destinationValues = "Elk River, MN",
            minMiPrice = 2.68f
        )
        loads.add(load1)
        var events = ArrayList<String>()
        var access = CoyoteAccess(loads, coyoteUserName, coyotePassword, object : CoyoteAccessEvent{
            override fun onStepCompleted(step: String) {
                events.add(step)
            }
            override fun onFindedRow(id: String, origin: String, totalPrice: String?, miPrice: String?) {
                events.add("Elemento encontrado con id $id, origin $origin, totalPrice $totalPrice, miPrice $miPrice")
//                var totalPriceValue: Float? = null
//                if(!totalPrice.isNullOrBlank()) {
//                    totalPrice?.replace("$", "").replace(",", "").also { totalPriceValue = it.toFloat() }//$2,786.96
//                }
//                var miPriceValue: Float? = null
//                if(!miPrice.isNullOrBlank()) {
//                    miPrice?.replace("$", "").replace(",", "").replace("/mi", "").also { miPriceValue = it.toFloat() }//$2.53/mi
//                }
//                var finded = FindedEntity(id, Date(System.currentTimeMillis()), origin, totalPriceValue, miPriceValue, entity)
//                if(miPriceValue!! > entity.minMiPrice!!) {
//                    var exist = findedRepository.existsById(id)
//                    if(!exist) {
//                        findedRepository.save(finded)
//                        sendMessage("Se encontró una carga con origen $origin, pago por millas de $miPrice y un pago total de $totalPrice")
//                    }
//                }
            }
            override fun onStepError(step: String, e: Exception) {
                events.add("Fallo el procesamiento del $step: ${e.message}")
                sendMessage("Fallo el procesamiento del $step: ${e.message}")
            }
        })
        access.excecuteTask()

        return ResponseEntity.ok().body(events)
    }

    @Throws(Exception::class)
    private fun sendMessage(text: String) {
        Observer.fireEvent(AccessEvent(token, chatId, text))
    }

}