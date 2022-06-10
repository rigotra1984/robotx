package cu.rigoberto.robotx.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class FrontendController {
    @GetMapping("/frontend")
    fun getFrontend():String {
        return "forward:/frontend/index.html"
    }
}