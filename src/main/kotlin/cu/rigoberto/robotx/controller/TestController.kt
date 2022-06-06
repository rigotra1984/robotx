package cu.rigoberto.robotx.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")
class TestController{
    @GetMapping
    fun test(): String = "Hello Wordl!"
}
