package cu.rigoberto.robotx.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HomeController {
    @GetMapping("/")
    fun index():String {
        return "forward:/frontend/index.html"
    }
}