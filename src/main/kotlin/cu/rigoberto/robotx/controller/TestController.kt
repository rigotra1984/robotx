package cu.rigoberto.robotx.controller

import cu.rigoberto.robotx.util.DriverUtil
import org.openqa.selenium.By
import org.openqa.selenium.Keys
import org.openqa.selenium.support.ui.ExpectedConditions
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/test")
class TestController {
    @GetMapping
    fun getAll(): ResponseEntity<String> {
        DriverUtil.openWebSite();
        DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@name='q']")));
        DriverUtil.driver?.findElement(By.xpath("//input[@name='q']"))?.sendKeys("selenium tutorial", Keys.RETURN);

        DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.id("result-stats")))
        val result = DriverUtil.driver?.findElement(By.id("result-stats"))?.text
        return ResponseEntity.ok().body(result)
    }
}