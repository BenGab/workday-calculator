var expect = require('chai').expect;
var dueDateCalculator = require('../src/duedatecalculator/duedatecalculator');
var timeroundBuilder = require('../src/timearound/timearoundbuilder');

describe('DueDateCalculator tests', function() {
    describe('method type tests', function() {
        it('should have calculateDueDate method', function() {
            var type = typeof dueDateCalculator.calculateDueDate;
            expect(type).to.equal('function');
        });
    });

    describe('calculateDueDateTests', function() {
        it('should calculate exptected dueDate on the same day when happens on beginning', function() {
            var fromDate = new Date(2016, 9, 21, 9);
            var timearound = timeroundBuilder.days(1).build();
            var expectedDueDate = new Date(2016, 9, 21, 17);
            console.log(timearound);
            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound, 9, 17);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });

        it('should calculate expected dueDate, when the timearound one and half day', function() {
            var fromDate = new Date(2016, 9, 20, 9);
            var timearound = timeroundBuilder.days(1).hours(3).build();
            var expectedDueDate = new Date(2016, 9, 21, 11, 0 , 0, 0);
            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound, 9, 17);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });

        it('should calculate expectedDueDate when it forwards next week', function() {
            var fromDate = new Date(2016, 9, 21, 9);
            var timearound = timeroundBuilder.days(1).hours(3).build();
            var expectedDueDate = new Date(2016, 9, 24, 11, 0 , 0, 0);

            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound, 9, 17);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });

        it('should complete on next day same time when task comes in the middle of day', function() {
            var fromDate = new Date(2016, 9, 20, 12);
            var timearound = timeroundBuilder.days(1).build();
            var expectedDueDate = new Date(2016, 9, 21, 11, 0 , 0, 0);

            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound, 9, 17);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });

        it('should  complete on next day 3 hours later when the timearound is 1d3h', function() {
            var fromDate = new Date(2016, 9, 20, 12);
            var timearound = timeroundBuilder.days(1).hours(3).build();
            var expectedDueDate = new Date(2016, 9, 21, 14, 0 , 0, 0);

            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound, 9, 17);

            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });

        it('should return errormessage when timearound is not number', function() {
            var fromDate = new Date(2016, 9, 20, 12);
            var expectedErrorMessage = 'The given date parameter must be Date type and timearound must be number';
            var dueDate = dueDateCalculator.calculateDueDate(fromDate, 'timearound', 9, 17);

            expect(dueDate).to.equal(expectedErrorMessage);
        });

        it('should return errormessage when timearound is string', function() {
            var fromDate = new Date(2016, 9, 20, 12);
            var expectedErrorMessage = 'The given date parameter must be Date type and timearound must be number';
            var dueDate = dueDateCalculator.calculateDueDate(fromDate, '10', 9, 17);

            expect(dueDate).to.equal(expectedErrorMessage);
        });

        it('should return errormessage when date is not date', function() {
            var fromDate = 'new Date(2016, 9, 20, 12)';
            var expectedErrorMessage = 'The given date parameter must be Date type and timearound must be number';
            var dueDate = dueDateCalculator.calculateDueDate(fromDate, 10, 9, 17);

            expect(dueDate).to.equal(expectedErrorMessage);
        });

        it('should return errormessage when both parameters invalid', function() {
            var fromDate = 'new Date(2016, 9, 20, 12)';
            var expectedErrorMessage = 'The given date parameter must be Date type and timearound must be number';
            var dueDate = dueDateCalculator.calculateDueDate(fromDate, '10', 9, 17);

            expect(dueDate).to.equal(expectedErrorMessage);
        });
    });
});