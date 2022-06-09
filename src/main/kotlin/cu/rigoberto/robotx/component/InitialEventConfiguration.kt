package cu.rigoberto.robotx.component

import cu.rigoberto.robotx.event.Observer
import cu.rigoberto.robotx.event.listener.AccessEventListener
import org.springframework.context.annotation.Configuration
import javax.annotation.PostConstruct

@Configuration
class InitialEventConfiguration {
    @PostConstruct
    fun postConstruct() {
        Observer.addListener(AccessEventListener())
    }
}