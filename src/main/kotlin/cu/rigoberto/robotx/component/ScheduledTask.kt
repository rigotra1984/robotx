package cu.rigoberto.robotx.component

import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component

@Component
class ScheduledTask {
    @Scheduled(fixedDelayString = "\${fixedDelay.in.miliseconds}")
    fun checkPage() {
        //System.out.println("Estoy entrando")
    }
}