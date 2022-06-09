package cu.rigoberto.robotx.access

import org.openqa.selenium.By
import org.openqa.selenium.Keys
import java.util.logging.Level

class GoogleAccess: BaseAccess() {

    override fun task() {
        driver.get("https://www.google.com/")
        driver.findElement(By.name("q")).sendKeys("HtmlUnitDriver", Keys.RETURN)

        logger.log(Level.INFO, "Titulo ${driver.title}")
    }

}