module.exports = function() {
    var _startingHour = 9;
    var _finishingHour = 17;

    function _calculateDueDate(dateFrom, timearoundHours) {
        if(timearoundHours <= 0)  {
            //return dateFrom.getHours();
            return typeof dateFrom;
        }

        let currentHourDateFrom = dateFrom.getHours() + 1;
        let remainingHourFromDay = _finishingHour - currentHourDateFrom;
        let nextTimeAround = timearoundHours - remainingHourFromDay;
        let nextHours = dateFrom.getHours() + remainingHourFromDay;
        let nextDay = dateFrom.getDate();
        let nextMonth = dateFrom.getMonth() + 1;
        let nextYear = dateFrom.getFullYear();

        return _calculateDueDate(new Date(nextYear, nextMonth, nextDay, nextHours), nextTimeAround);
    }

    function _init(startingHour, finishingHour) {
        _startingHour = startingHour;
        _finishingHour = finishingHour;
    }

    return {
        init: _init,
        calculateDueDate: _calculateDueDate
    }
}();