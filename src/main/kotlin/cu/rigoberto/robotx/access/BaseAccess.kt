package cu.rigoberto.robotx.access

import org.openqa.selenium.htmlunit.HtmlUnitDriver
import java.util.logging.Logger

abstract class BaseAccess {

    val logger: Logger = Logger.getLogger("[BaseAccess]")

    var driver = HtmlUnitDriver()

    fun execute() {
        try {
            task()
        } catch (e: Exception) {
            print("Error ${e.message}")
        } finally {
            driver.quit()
        }
    }

    abstract fun task()

}