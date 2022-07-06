package cu.rigoberto.robotx.access

import cu.rigoberto.robotx.entity.LoadEntity
import cu.rigoberto.robotx.entity.toModel
import cu.rigoberto.robotx.util.DateUtil
import cu.rigoberto.robotx.util.DriverUtil
import org.openqa.selenium.By
import org.openqa.selenium.Keys
import org.openqa.selenium.support.ui.ExpectedConditions


class CoyoteAccess(private val loads: List<LoadEntity>, private val userName: String, private val password: String, private val accessEvent: CoyoteAccessEvent) {
    private var entity: LoadEntity? = null

    fun excecuteTask() {
        try {
            DriverUtil.openWebSite()

            //autenticarse
            login(userName, password)

            //loading
            waitLoading()

            //cerrar ventanas y modal emergentes
            closeModals()

            //filtrar
            filter()

            DriverUtil.quit()
        } catch (e: Exception) {
            DriverUtil.quit()
        }
    }

    @Throws(java.lang.Exception::class)
    private fun login(userName: String, password: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.name("Username")))
            DriverUtil.driver?.findElement(By.name("Username"))?.sendKeys(userName)
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.name("Password")))
            DriverUtil.driver?.findElement(By.name("Password"))?.sendKeys(password)
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.id("login-form-submit")))
            DriverUtil.driver?.findElement(By.id("login-form-submit"))?.click()

            accessEvent.onStepCompleted("login")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("login", e)
            throw java.lang.Exception("Fallo el procesamiento del login: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun waitLoading() {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.id("global-notification")))
            val loading = DriverUtil.driver?.findElement(By.id("global-notification"))!!
            while (!loading.getAttribute("class").contains("hidden")) {
                Thread.sleep(3000)
            }

            accessEvent.onStepCompleted("waitLoading")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("waitLoading", e)
            throw java.lang.Exception("Fallo el procesamiento de waitLoading: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun closeModals() {
        try {
            //cokie
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div#onetrust-close-btn-container>button")))
            DriverUtil.driver?.findElement(By.cssSelector("div#onetrust-close-btn-container>button"))?.click()

            //modal getstarted
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@data-di-id='di-id-32ce2b06-dd2819e3']")))
            DriverUtil.driver?.findElement(By.xpath("//button[@data-di-id='di-id-32ce2b06-dd2819e3']"))?.click()

            accessEvent.onStepCompleted("closeModals")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("closeModals", e)
            throw java.lang.Exception("Fallo el procesamiento de los modals: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filter() {
        //fila donde se encuentran los formularios de la busqueda
        DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.id("filter-bar-controls-container")))
        if (loads.isNullOrEmpty()) {
            return
        }

        for (entity in loads) {
            var model = entity.toModel()
//			filterAdvancedButton();
//			filterResetButton();
            if (!model.originValues.isNullOrBlank()) {
                filterOrigin(model.originValues!!)
            }
            if (model.originRadius != null) {
                filterOriginRadius(model.originRadius.toString())
            }
            if (!model.destinationValues.isNullOrBlank()) {
                filterDestination(model.destinationValues!!)
            }
            if (model.destinationRadius != null) {
                filterDestinationRadius(model.destinationRadius.toString())
            }
            if (model.pickupStart != null && model.pickupEnd != null) {
                filterPickUpDate(DateUtil.dateToString(model.pickupStart!!)!!, DateUtil.dateToString(model.pickupEnd!!)!!)
            }
            if (!model.equipmentType.isNullOrEmpty()) {
                filterEquipmentType(model.equipmentType)
            }
            if (model.loadNumber != null) {
                filterLoadNumber(model.loadNumber.toString())
            }
            if (model.isAdvanced()) {
                filterAdvancedButton()
                if (!model.advancedDisplayPreference.isNullOrBlank()) {
                    filterAdvancedDisplayPreference(model.advancedDisplayPreference!!)
                }
                if (model.advancedPickupStart != null && model.advancedPickupEnd != null) {
                    filterAdvancedPickUpDateRange(DateUtil.dateToString(model.advancedPickupStart!!)!!, DateUtil.dateToString(model.advancedPickupEnd!!)!!)
                }
                if (!model.advancedPickupStartTime.isNullOrBlank() && !model.advancedPickupEndTime.isNullOrBlank()) {
                    filterAdvancedPickUpTime(model.advancedPickupStartTime!!, model.advancedPickupEndTime!!)
                }
                if (model.advancedDeliveryStart != null && model.advancedDeliveryEnd != null) {
                    filterAdvancedDeliveryDateRange(DateUtil.dateToString(model.advancedDeliveryStart!!)!!, DateUtil.dateToString(model.advancedDeliveryEnd!!)!!)
                }
                if (!model.advancedDeliveryStartTime.isNullOrBlank() && !model.advancedDeliveryEndTime.isNullOrBlank()) {
                    filterAdvancedDeliveryTime(model.advancedDeliveryStartTime!!, model.advancedDeliveryEndTime!!)
                }
                if (model.advancedEquipmentMaxLength != null) {
                    filterAdvancedEquipmentMaxLength(model.advancedEquipmentMaxLength.toString())
                }
                if (model.advancedEquipmentMaxWeigth != null) {
                    filterAdvancedEquipmentMaxWeight(model.advancedEquipmentMaxWeigth.toString())
                }
                if (!model.advancedAttributes.isNullOrBlank()) {
                    filterAdvancedAttributes(model.advancedAttributes!!)
                }
                filterSearchButtonAdvanced()
            } else {
                filterSearchButton()
            }

            //analizar resultados
            waitLoading()
            checkResult()
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterOrigin(origin: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='filter-bar-controls-container']/div[1]//label[text() = 'Origin']//following::input[1]")))
            DriverUtil.driver?.findElement(By.xpath("//div[@id='filter-bar-controls-container']/div[1]//label[text() = 'Origin']//following::input[1]"))?.sendKeys(origin, Keys.RETURN)
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[.//div[text()='$origin']]")))
            DriverUtil.driver?.findElement(By.xpath("//li[.//div[text()='$origin']]"))?.click()

            accessEvent.onStepCompleted("filterOrigin")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterOrigin", e)
            throw java.lang.Exception("Fallo el procesamiento de Origin: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterOriginRadius(radius: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='filter-bar-controls-container']/div[1]/div/div[2]//input")))
            DriverUtil.driver?.findElement(By.xpath("//div[@id='filter-bar-controls-container']/div[1]/div/div[2]//input"))?.sendKeys(Keys.BACK_SPACE, Keys.BACK_SPACE, Keys.BACK_SPACE, radius)

            accessEvent.onStepCompleted("filterOriginRadius")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterOriginRadius", e)
            throw java.lang.Exception("Fallo el procesamiento de Origin Radius: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterDestination(destination: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='filter-bar-controls-container']/div[2]//label[text() = 'Destination']//following::input[1]")))
            DriverUtil.driver?.findElement(By.xpath("//div[@id='filter-bar-controls-container']/div[2]//label[text() = 'Destination']//following::input[1]"))?.sendKeys(destination, Keys.RETURN)
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[.//div[text()='$destination']]")))
            DriverUtil.driver?.findElement(By.xpath("//li[.//div[text()='$destination']]"))?.click()

            accessEvent.onStepCompleted("filterDestination")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterDestination", e)
            throw java.lang.Exception("Fallo el procesamiento de Destination: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterDestinationRadius(radius: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='filter-bar-controls-container']/div[2]/div/div[2]//input")))
            DriverUtil.driver?.findElement(By.xpath("//div[@id='filter-bar-controls-container']/div[2]/div/div[2]//input"))?.sendKeys(Keys.BACK_SPACE, Keys.BACK_SPACE, Keys.BACK_SPACE, radius)

            accessEvent.onStepCompleted("filterDestinationRadius")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterDestinationRadius", e)
            throw java.lang.Exception("Fallo el procesamiento de Destination: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterPickUpDate(startDate: String, endDate: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='filter-bar-controls-container']/div[3]")))
            DriverUtil.driver?.findElement(By.xpath("//div[@id='filter-bar-controls-container']/div[3]"))?.click()
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//li[text() = 'Custom Range']")))
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//li[text() = 'Custom Range']"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_start']"))?.clear()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_start']"))?.sendKeys(startDate, Keys.RETURN)
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_end']"))?.clear()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_end']"))?.sendKeys(endDate, Keys.RETURN)
            val dataTitleStartDate = DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[contains(@class,'start-date')]"))?.getAttribute("data-title")!!
            val dataTitleEndDate = DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[contains(@class,'end-date')]"))?.getAttribute("data-title")!!
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[@data-title='$dataTitleStartDate']"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[@data-title='$dataTitleStartDate']"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[@data-title='$dataTitleStartDate']//following::td[@data-title='$dataTitleEndDate']"))?.click()

            accessEvent.onStepCompleted("filterPickUpDate")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterPickUpDate", e)
            throw java.lang.Exception("Fallo el procesamiento de PickUpDate: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterEquipmentType(equipmentType: Array<String>) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='filter-bar-controls-container']/div[4]")))
            DriverUtil.driver?.findElement(By.xpath("//div[@id='filter-bar-controls-container']/div[4]"))?.click()
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[.//div[text()='Van']]")))
            DriverUtil.driver?.findElement(By.xpath("//li[.//div[text()='Van']]"))?.click() //desmarcar
            if (equipmentType.any { it == "Van" }) {
                DriverUtil.driver?.findElement(By.xpath("//li[.//div[text()='Van']]"))?.click()
            }
            if (equipmentType.any { it == "Reefer" }) {
                DriverUtil.driver?.findElement(By.xpath("//li[.//div[text()='Reefer']]"))?.click()
            }
            if (equipmentType.any { it == "Open Deck" }) {
                DriverUtil.driver?.findElement(By.xpath("//li[.//div[text()='Open Deck']]"))?.click()
            }
            if (equipmentType.any { it == "Container" }) {
                DriverUtil.driver?.findElement(By.xpath("//li[.//div[text()='Container']]"))?.click()
            }
            if (equipmentType.any { it == "Power Only" }) {
                DriverUtil.driver?.findElement(By.xpath("//li[.//div[text()='Power Only']]"))?.click()
            }
            DriverUtil.driver?.findElement(By.xpath("//div[@id='filter-bar-controls-container']/div[4]//button[@title='Open' or @title='Close']"))?.click()

            accessEvent.onStepCompleted("filterEquipmentType")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterEquipmentType", e)
            throw java.lang.Exception("Fallo el procesamiento de EquipmentType: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterLoadNumber(loadNumber: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='filter-bar-controls-container']/div[5]")))
            DriverUtil.driver?.findElement(By.xpath("//div[@id='filter-bar-controls-container']/div[5]"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[@id='filter-bar-controls-container']/div[5]//input"))?.sendKeys(loadNumber, Keys.RETURN)

            accessEvent.onStepCompleted("filterLoadNumber")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterLoadNumber", e)
            throw java.lang.Exception("Fallo el procesamiento de LoadNumber: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterSearchButton() {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='available-loads-filter']/div[2]/div[2]//button[@id='find-loads']")))
            DriverUtil.driver?.findElement(By.xpath("//div[@id='available-loads-filter']/div[2]/div[2]//button[@id='find-loads']"))?.click()

            accessEvent.onStepCompleted("filterSearchButton")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterSearchButton", e)
            throw java.lang.Exception("Fallo el procesamiento de SearchButton: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterSearchButtonAdvanced() {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='available-loads-filter']/div[2]/div[1]//button[@id='find-loads']")))
            DriverUtil.driver?.findElement(By.xpath("//div[@id='available-loads-filter']/div[2]/div[1]//button[@id='find-loads']"))?.click()

            accessEvent.onStepCompleted("filterSearchButtonAdvanced")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterSearchButtonAdvanced", e)
            throw java.lang.Exception("Fallo el procesamiento de SearchButtonAdvanced: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterResetButton() {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@id='reset-advanced-search']")))
            DriverUtil.driver?.findElement(By.xpath("//button[@id='reset-advanced-search']"))?.click()

            accessEvent.onStepCompleted("filterResetButton")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterResetButton", e)
            throw java.lang.Exception("Fallo el procesamiento de SearchButton: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterAdvancedButton() {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@id='advanced-search']")))
            DriverUtil.driver?.findElement(By.xpath("//button[@id='advanced-search']"))?.click()

            accessEvent.onStepCompleted("filterAdvancedButton")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterAdvancedButton", e)
            throw java.lang.Exception("Fallo el procesamiento de AdvancedButton: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterAdvancedDisplayPreference(displayPreference: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][1]")))
            when (displayPreference) {
                "Show All Loads" -> {
                    DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][1]//label[.//span[text() = 'Show All Loads']]"))?.click()
                }
                "Exclude Hidden Loads" -> {
                    DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][1]//label[.//span[text() = 'Exclude Hidden Loads']]"))?.click()
                }
                "Favorite Loads Only" -> {
                    DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][1]//label[.//span[text() = 'Favorite Loads Only']]"))?.click()
                }
            }

            accessEvent.onStepCompleted("filterAdvancedDisplayPreference")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterAdvancedDisplayPreference", e)
            throw java.lang.Exception("Fallo el procesamiento de AdvancedDisplayPreference: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterAdvancedPickUpDateRange(startDate: String, endDate: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][1]")))
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][1]//div[contains(@class,'grid__cell')][1]"))?.click()
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//li[text() = 'Custom Range']")))
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//li[text() = 'Custom Range']"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_start']"))?.clear()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_start']"))?.sendKeys(startDate, Keys.RETURN)
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_end']"))?.clear()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_end']"))?.sendKeys(endDate, Keys.RETURN)
            val dataTitleStartDate = DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[contains(@class,'start-date')]"))?.getAttribute("data-title")!!
            val dataTitleEndDate = DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[contains(@class,'end-date')]"))?.getAttribute("data-title")!!
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[@data-title='$dataTitleStartDate']"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[@data-title='$dataTitleStartDate']"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[@data-title='$dataTitleStartDate']//following::td[@data-title='$dataTitleEndDate']"))?.click()

            accessEvent.onStepCompleted("filterAdvancedPickUpDateRange")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterAdvancedPickUpDateRange", e)
            throw java.lang.Exception("Fallo el procesamiento de AdvancedPickUpDateRange: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterAdvancedPickUpTime(startTime: String, endTime: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][1]")))
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][1]//div[contains(@class,'grid__cell')][2]//input"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][1]//div[contains(@class,'grid__cell')][2]//input"))?.sendKeys(startTime, Keys.RETURN)
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][1]//div[contains(@class,'grid__cell')][3]//input"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][1]//div[contains(@class,'grid__cell')][3]//input"))?.sendKeys(endTime, Keys.RETURN)

            accessEvent.onStepCompleted("filterAdvancedPickUpTime")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterAdvancedPickUpTime", e)
            throw java.lang.Exception("Fallo el procesamiento de AdvancedPickUpTime: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterAdvancedDeliveryDateRange(startDate: String, endDate: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][2]//div[contains(@class,'grid__cell')][1]")))
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][2]//div[contains(@class,'grid__cell')][1]"))?.click()
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//li[text() = 'Custom Range']")))
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//li[text() = 'Custom Range']"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_start']"))?.clear()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_start']"))?.sendKeys(startDate, Keys.RETURN)
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_end']"))?.clear()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//input[@name='daterangepicker_end']"))?.sendKeys(endDate, Keys.RETURN)
            val dataTitleStartDate = DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[contains(@class,'start-date')]"))?.getAttribute("data-title")!!
            val dataTitleEndDate = DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[contains(@class,'end-date')]"))?.getAttribute("data-title")!!
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[@data-title='$dataTitleStartDate']"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[@data-title='$dataTitleStartDate']"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'daterangepicker') and contains(@style, 'display: block;')]//td[@data-title='$dataTitleStartDate']//following::td[@data-title='$dataTitleEndDate']"))?.click()

            accessEvent.onStepCompleted("filterAdvancedDeliveryDateRange")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterAdvancedDeliveryDateRange", e)
            throw java.lang.Exception("Fallo el procesamiento de AdvancedDeliveryDateRange: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterAdvancedDeliveryTime(startTime: String, endTime: String){
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][2]")))
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][2]//div[contains(@class,'grid__cell')][2]//input"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][2]//div[contains(@class,'grid__cell')][2]//input"))?.sendKeys(startTime, Keys.RETURN)
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][2]//div[contains(@class,'grid__cell')][3]//input"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell') and contains(@class,'palm-one-whole')][2]//div[contains(@class,'grid__cell')][3]//input"))?.sendKeys(endTime, Keys.RETURN)

            accessEvent.onStepCompleted("filterAdvancedDeliveryTime")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterAdvancedDeliveryTime", e)
            throw java.lang.Exception("Fallo el procesamiento de AdvancedDeliveryDateRange: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterAdvancedEquipmentMaxLength(maxLength: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][4]//label[text()='Max Length']//following::input")))
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][4]//label[text()='Max Length']//following::input"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][4]//label[text()='Max Length']//following::input"))?.sendKeys(maxLength, Keys.RETURN)

            accessEvent.onStepCompleted("filterAdvancedEquipmentMaxLength")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterAdvancedEquipmentMaxLength", e)
            throw java.lang.Exception("Fallo el procesamiento de AdvancedDeliveryDateRange: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterAdvancedEquipmentMaxWeight(maxWeight: String) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][4]//label[text()='Max Weight']//following::input")))
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][4]//label[text()='Max Weight']//following::input"))?.click()
            DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][4]//label[text()='Max Weight']//following::input"))?.sendKeys(maxWeight, Keys.RETURN)

            accessEvent.onStepCompleted("filterAdvancedEquipmentMaxWeight")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterAdvancedEquipmentMaxWeight", e)
            throw java.lang.Exception("Fallo el procesamiento de AdvancedDeliveryDateRange: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun filterAdvancedAttributes(attributes: String) {
        try {
            if (attributes == "Drop Trailer") {
                DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][5]//li[.//span[text()='Drop Trailer']]")))
                DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][5]//li[.//span[text()='Drop Trailer']]"))?.click()
            }
            if (attributes == "Hazmat") {
                DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][5]//li[.//span[text()='Hazmat']]")))
                DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][5]//li[.//span[text()='Hazmat']]"))?.click()
            }
            if (attributes == "Team") {
                DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][5]//li[.//span[text()='Team']]")))
                DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][5]//li[.//span[text()='Team']]"))?.click()
            }
            if (attributes == "Load Out'") {
                DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][5]//li[.//span[text()='Load Out']]")))
                DriverUtil.driver?.findElement(By.xpath("//div[contains(@class,'advanced-search-container')]//div[contains(@class,'grid__cell')][5]//li[.//span[text()='Load Out']]"))?.click()
            }

            accessEvent.onStepCompleted("filterAdvancedAttributes")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("filterAdvancedAttributes", e)
            throw java.lang.Exception("Fallo el procesamiento de AdvancedDeliveryDateRange: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun checkResult() {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='search-result-container-region']//span[contains(text(), 'Results')]")))
            val result = DriverUtil.driver?.findElement(By.xpath("//div[@id='search-result-container-region']//span[contains(text(), 'Results')]"))!!
            val countString = result.text.replace("Results (", "").replace(")", "").trim { it <= ' ' }
            val count = if (countString == result.text) 0 else countString.toInt()
            if (count > 0) {
                var i = 1
                while (i <= count) {
                    proccessResultRow(i++)
                }
            }

            accessEvent.onStepCompleted("checkResult")
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("checkResult", e)
            throw java.lang.Exception("Fallo el procesamiento de checkResult: " + e.message)
        }
    }

    @Throws(java.lang.Exception::class)
    private fun proccessResultRow(row: Int) {
        try {
            DriverUtil.wait?.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='search-result-container-region']//div[starts-with(@id,'av-load-row-')]")))
            val id = DriverUtil.driver?.findElement(By.xpath("//div[@id='search-result-container-region']//div[starts-with(@id,'av-load-row-')][$row]/div[2]/div[1]/div[1]/div/div[1]/strong"))!!.text
            val origin = DriverUtil.driver?.findElement(By.xpath("//div[@id='search-result-container-region']//div[starts-with(@id,'av-load-row-')][$row]/div[2]/div[1]/div[1]/div/div[4]/strong"))!!.text
            val totalPrices = DriverUtil.driver?.findElements(By.xpath("//div[@id='search-result-container-region']//div[starts-with(@id,'av-load-row-')][$row]/div[2]/div[1]/div[2]/div/div[1]/div/div/strong"))!!
            val miPrices = DriverUtil.driver?.findElements(By.xpath("//div[@id='search-result-container-region']//div[starts-with(@id,'av-load-row-')][$row]/div[2]/div[1]/div[2]/div/div[1]/div/div/div"))!!
            val totalPrice = if (totalPrices.isNotEmpty()) totalPrices[0]?.text else null
            val miPrice = if (miPrices.isNotEmpty()) miPrices[0]?.text else null

            accessEvent.onFindedRow(id, origin, totalPrice, miPrice, entity!!)
        } catch (e: java.lang.Exception) {
            accessEvent.onStepError("checkResult", e)
            throw java.lang.Exception("Fallo el procesamiento de checkResult: " + e.message)
        }
    }
}