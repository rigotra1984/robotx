package cu.rigoberto.robotx.event.listener

import com.google.common.eventbus.Subscribe
import cu.rigoberto.robotx.event.AccessEvent
import cu.rigoberto.robotx.util.TelegramNotifier

class AccessEventListener(): BaseEventListener() {
    @Subscribe
    fun userRegisteredHandler(event: AccessEvent) {
        var bot = TelegramNotifier(event.token, event.chatId)
        bot.sendToTelegram(event.text)
    }
}