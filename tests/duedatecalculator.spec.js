var expect = require('chai').expect;
var dueDateCalculator = require('../src/duedatecalculator/duedatecalculator');
var timeroundBuilder = require('../src/timearound/timearoundbuilder');

describe('DueDateCalculator tests', function() {
    describe('method type tests', function() {
        it('should have init method', function() {
            var type = typeof dueDateCalculator.init;
            expect(type).to.equal('function');
        });

        it('should have calculateDueDate method', function() {
            var type = typeof dueDateCalculator.calculateDueDate;
            expect(type).to.equal('function');
        });

        it('should have setAllowWorkOnSaturday method', function() {
            var type = typeof dueDateCalculator.setAllowWorkOnSaturday;
            expect(type).to.equal('function');
        });
    });

    describe('calculateDueDateTests', function() {
        it('should calculate exptected dueDate on the same day when happens on beginning', function() {
            var fromDate = new Date(2016, 9, 21, 9);
            var timearound = timeroundBuilder.days(1).build();
            var expectedDueDate = new Date(2016, 9, 21, 17, 0 , 0, 0);

            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });

        it('should calculate expected dueDate, when the timearound one and half day', function() {
            var fromDate = new Date(2016, 9, 20, 9);
            var timearound = timeroundBuilder.days(1).hours(3).build();
            var expectedDueDate = new Date(2016, 9, 21, 12, 0 , 0, 0);

            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });

        it('should calculate expectedDueDate when it forwards next week', function() {
            var fromDate = new Date(2016, 9, 21, 9);
            var timearound = timeroundBuilder.days(1).hours(3).build();
            var expectedDueDate = new Date(2016, 9, 24, 12, 0 , 0, 0);

            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });

        it('should complete on the work on saturday when is allowed', function() {
            var fromDate = new Date(2016, 9, 21, 9);
            var timearound = timeroundBuilder.days(1).hours(3).build();
            var expectedDueDate = new Date(2016, 9, 22, 12, 0 , 0, 0);

            dueDateCalculator.setAllowWorkOnSaturday(true);
            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
            dueDateCalculator.setAllowWorkOnSaturday(false);
        });

        it('should complete on next day same time when task comes in the middle of day', function() {
            var fromDate = new Date(2016, 9, 20, 12);
            var timearound = timeroundBuilder.days(1).build();
            var expectedDueDate = new Date(2016, 9, 21, 12, 0 , 0, 0);

            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });

        it('should  complete on next day 3 hours later when the timearound is 1d3h', function() {
            var fromDate = new Date(2016, 9, 20, 12);
            var timearound = timeroundBuilder.days(1).hours(3).build();
            var expectedDueDate = new Date(2016, 9, 21, 15, 0 , 0, 0);

            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });
    });
});