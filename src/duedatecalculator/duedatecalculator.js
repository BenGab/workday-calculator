module.exports = function() {
    var _sundayId = 0;
    var _saturdayId = 6;

    function _calculateDueDate(dateFrom, timearoundHours, startHours, finishingHours) {
        if(isNaN(timearoundHours) 
        || typeof timearoundHours !== 'number'
        || !(dateFrom instanceof Date)) {
            return 'The given date parameter must be Date type and timearound must be number';
        }

        if(timearoundHours <= 0)  {
            return  dateFrom;
        }

        while(timearoundHours > 0) {
            let currentHourDateFrom = dateFrom.getHours();
            let dayOfTheWeekId = dateFrom.getDay();

            if(currentHourDateFrom >= startHours 
            && currentHourDateFrom <= finishingHours
            && dayOfTheWeekId !== _saturdayId
            && dayOfTheWeekId !== _sundayId) {
                --timearoundHours;
            }
            dateFrom.setHours(dateFrom.getHours() + 1);
            //console.log('h: ' + dateFrom.getHours() + ' r: ' + timearoundHours);
        }

        return dateFrom;
    }

    return {
        calculateDueDate: _calculateDueDate
    }
}();