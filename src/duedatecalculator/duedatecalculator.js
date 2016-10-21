module.exports = function() {
    var _startingHour = 9;
    var _finishingHour = 17;
    var _hoursUntilNextWorkDay = 16;
    var _sundayId = 0;
    var _saturdayId = 6;

    function _calculateDueDate(dateFrom, timearoundHours) {
        if(timearoundHours <= 0)  {
            return typeof dateFrom;
        }

        while(timearoundHours > 0) {
            let currentHourDateFrom = dateFrom.getHours();
            let remainingHourFromDay = _finishingHour - currentHourDateFrom;

            if(dateFrom.getHours() === _finishingHour) {
                dateFrom.setHours(dateFrom.getHours() + _hoursUntilNextWorkDay);
            }

            let dayOfTheWeekId = dateFrom.getDay();

            if(dayOfTheWeekId === _sundayId || dayOfTheWeekId === _saturdayId) {
                let dayDiff = dayOfTheWeekId === _saturdayId ? 2 : 1;
                dateFrom.setDate(dateFrom.getDate() + dayDiff);
            }

            if(timearoundHours < remainingHourFromDay) {
                dateFrom.setHours(dateFrom.getHours() + timearoundHours);
                return dateFrom;
            }

            timearoundHours = timearoundHours - remainingHourFromDay;
            dateFrom.setHours(dateFrom.getHours() + remainingHourFromDay);
        }

        return dateFrom;
    }

    function _init(startingHour, finishingHour) {
        _startingHour = startingHour;
        _finishingHour = finishingHour;
    }

    function _setAllowWorkOnSaturday(isAllowed) {
        _saturdayId = isAllowed ? -1 : 6;
    }

    return {
        init: _init,
        calculateDueDate: _calculateDueDate,
        setAllowWorkOnSaturday: _setAllowWorkOnSaturday,
    }
}();