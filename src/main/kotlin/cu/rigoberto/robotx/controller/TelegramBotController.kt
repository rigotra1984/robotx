package cu.rigoberto.robotx.controller

import cu.rigoberto.robotx.event.AccessEvent
import cu.rigoberto.robotx.event.Observer
import cu.rigoberto.robotx.model.Update
import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.*
import java.util.logging.Level
import java.util.logging.Logger

@RestController
@RequestMapping("/webhook")
class TelegramBotController {

    private val START_COMMAND = "/start"
    private val ECHO_COMMAND = "/echo"

    private val logger: Logger = Logger.getLogger("[TelegramBotController]")

    @Value("\${telegram.api.token}")
    lateinit var token: String

    @GetMapping
    fun index(): String = "Hola yo soy RobotX."

    @PostMapping
    fun onUpdate(@RequestBody update: Update) {
        logger.log(Level.INFO, "Got update: $update")
        if (update.message != null) {
            val chatId = update.message.chat.id
            val text = update.message.text
            when {
                text?.startsWith(START_COMMAND) == true -> onStartCommand(chatId)
                text?.startsWith(ECHO_COMMAND) == true -> onEchoCommand(chatId, text)
                else -> onEchoCommand(chatId, "No entiendo lo que me dices pero te digo Hola")
            }
        }
    }

    private fun onStartCommand(chatId: Long) = try {
        sendMessage(chatId, "Hola yo soy RobotX.")
    } catch (e: Exception) {
        logger.log(Level.SEVERE, "Can not send START response!", e)
    }
    private fun onEchoCommand(chatId: Long, text: String) = try {
        val response = text.subSequence(ECHO_COMMAND.length, text.length).trim().toString()
        sendMessage(chatId, response)
    } catch (e: Exception) {
        logger.log(Level.SEVERE, "Can not send ECHO response!", e)
    }

    @Throws(Exception::class)
    private fun sendMessage(chatId: Long, text: String) {
        Observer.fireEvent(AccessEvent(token, chatId.toString(), text))
    }
}