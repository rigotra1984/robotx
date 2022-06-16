package cu.rigoberto.robotx.util

import java.util.*

class DateUtil {
    companion object {
        fun setTime(date: Date, hour: Int, minute: Int): Date {
            var calendar = Calendar.getInstance()
            calendar.time = date
            calendar.set(Calendar.HOUR_OF_DAY, hour)
            calendar.set(Calendar.MINUTE, minute)
            calendar.set(Calendar.SECOND, 0)
            calendar.set(Calendar.MILLISECOND, 0)

            return calendar.time
        }

        fun setTimeClear(date: Date?): Date? {
            if(date == null) {
                return null;
            }

            var calendar = Calendar.getInstance()
            calendar.time = date
            calendar.set(Calendar.HOUR_OF_DAY, 0)
            calendar.set(Calendar.MINUTE, 0)
            calendar.set(Calendar.SECOND, 0)
            calendar.set(Calendar.MILLISECOND, 0)

            return calendar.time
        }
    }
}