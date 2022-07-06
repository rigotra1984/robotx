package cu.rigoberto.robotx.util

import java.text.ParseException
import java.text.SimpleDateFormat
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

        fun dateFromString(dateRangeStart: String): Date? {
            val formatter = SimpleDateFormat("MM/dd/yyyy")
            return try {
                formatter.parse(dateRangeStart)
            } catch (e: ParseException) {
                null
            }
        }

        fun dateToString(date: Date): String? {
            val formatter = SimpleDateFormat("MM/dd/yyyy")
            return formatter.format(date)
        }
    }
}