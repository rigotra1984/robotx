package cu.rigoberto.robotx.access

import cu.rigoberto.robotx.access.BaseAccess

class LocalAccess: BaseAccess() {

    override fun task() {
        driver.get("http://localhost:8888/update/")

        println("Titulo ${driver.title}")
    }

}