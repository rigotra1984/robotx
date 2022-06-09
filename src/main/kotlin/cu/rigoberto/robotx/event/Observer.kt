package cu.rigoberto.robotx.event

import com.google.common.eventbus.EventBus
import cu.rigoberto.robotx.event.listener.BaseEventListener

class Observer {
    companion object {
        var eventBus = EventBus()

        fun addListener(listener: BaseEventListener) {
            eventBus.register(listener)
        }

        fun fireEvent(event: BaseEvent) {
            eventBus.post(event)
        }
    }
}