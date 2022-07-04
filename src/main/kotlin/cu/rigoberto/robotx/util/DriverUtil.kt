package cu.rigoberto.robotx.util

import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.chrome.ChromeOptions
import org.openqa.selenium.support.ui.WebDriverWait
import java.net.MalformedURLException
import java.time.Duration
import java.util.concurrent.TimeUnit


class DriverUtil {
    companion object {

        var driver: WebDriver? = ChromeDriver(getChromeOptions())
        var wait: WebDriverWait? = WebDriverWait(driver, Duration.ofSeconds(20))

        fun getChromeOptions(): ChromeOptions {
            var options = ChromeOptions()
            options.setBinary(System.getenv("GOOGLE_CHROME_BIN"))
            options.addArguments("--headless", "--disable-dev-shm-usage", "--no-sandbox")

            return options
        }

        fun quit() {
            driver?.quit()
            driver = null
            wait = null
        }

        @Throws(
            MalformedURLException::class,
            ClassNotFoundException::class,
            InstantiationException::class,
            IllegalAccessException::class
        )
        fun openWebSite() {
            val site = "https://www.google.com.cu"
            System.setProperty("webdriver.chrome.driver", System.getenv("CHROMEDRIVER_PATH"))

            driver?.manage()?.timeouts()?.implicitlyWait(0, TimeUnit.SECONDS);
            driver?.manage()?.window()?.maximize();
            driver?.get(site);
        }
    }
}