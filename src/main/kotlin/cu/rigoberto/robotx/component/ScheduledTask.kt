package cu.rigoberto.robotx.component

import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component

@Component
class ScheduledTask() {
    @Scheduled(fixedDelayString = "\${fixedDelay.in.miliseconds}")
    fun checkPage() {
        runBlocking {
            launch {
                println("Ejecucion en segundo plano")
            }
        }
    }
}