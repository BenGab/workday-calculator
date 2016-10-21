var timeAroundBuilder = function() {
    var hour = 0;
    return {
        hours: function(hourNumber) {
            hour += hourNumber;
            return this;
        },

        days: function(dayNumber) {
            return this.hours(dayNumber * 8);
        },

        weeks: function(weekNumber) {
            return this.days(5 * weekNumber);
        },

        build: function() {
            let result = hour;
            hour = 0;
            return result;
        },
    };
}

module.exports = timeAroundBuilder();