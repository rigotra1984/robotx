package cu.rigoberto.robotx.event

class AccessEvent(val token: String, var chatId: String, val text: String): BaseEvent()