package cu.rigoberto.robotx.util

import java.io.*
import java.net.URL
import java.net.URLEncoder
import java.nio.charset.StandardCharsets
import java.util.logging.Level
import java.util.logging.Logger


class TelegramNotifier(var apiToken: String, var chatId: String) {
    private val logger: Logger = Logger.getLogger("[TelegramNotifier]")

    @Throws(Exception::class)
    fun sendToTelegram(message: String) {
        var urlString = "https://api.telegram.org/bot%s/sendMessage?chat_id=%s&text=%s"
        urlString = java.lang.String.format(urlString, apiToken, chatId, encodeValue(message))

        try {
            val inputStream = URL(urlString).openConnection().getInputStream()

            val response = inputStream.bufferedReader().use(BufferedReader::readText)

            logger.log(Level.INFO, " Send message and response: $response")
        } catch (e: IOException) {
            logger.log(Level.SEVERE, "Can not send message response!", e)
        }
    }

    private fun encodeValue(value: String): String? {
        return try {
            return URLEncoder.encode(value, StandardCharsets.UTF_8.toString())
        } catch (ex: UnsupportedEncodingException) {
            logger.log(Level.SEVERE, "Can not encodeValue response!", ex)
            return null
        }
    }
}