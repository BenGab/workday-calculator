var timeAroundBuilder = function() {
    var hour = 0;
    return {
        hours: function(hourNumber) {
            if(isNaN(hourNumber) || typeof hourNumber !== 'number') {
                return this;
            }
            hour += hourNumber;
            return this;
        },

        days: function(dayNumber) {
            if(isNaN(dayNumber) || typeof dayNumber !== 'number') {
                return this;
            }
            return this.hours(dayNumber * 8);
        },

        weeks: function(weekNumber) {
            if(isNaN(weekNumber) || typeof weekNumber !== 'number') {
                return this;
            }
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