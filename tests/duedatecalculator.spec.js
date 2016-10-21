var expect = require('chai').expect;
var dueDateCalculator = require('../src/duedatecalculator/duedatecalculator');
var timeroundBuilder = require('../src/timearound/timearoundbuilder');

describe('DueDateCalculator tests', function() {
    describe('method tpye tests', function() {
        it('should have init method', function() {
            var type = typeof dueDateCalculator.init;
            expect(type).to.equal('function');
        });

        it('should have calculateDueDate method', function() {
            var type = typeof dueDateCalculator.calculateDueDate;
            expect(type).to.equal('function');
        });
    });

    describe('calculateDueDateTests', function() {
        it('should calculate exptected dueDate on the same day when happens on beginning', function() {
            var fromDate = new Date(2016, 9, 21, 9);
            var timearound = timeroundBuilder.days(1).build();
            var expectedDueDate = new Date(2016, 9, 21, 17, 0 , 0, 0);

            var dueDate = dueDateCalculator.calculateDueDate(fromDate, timearound);

            expect(dueDate).to.equal(expectedDueDate.getHours());
            expect(dueDate.getHours()).to.equal(expectedDueDate.getHours());
            expect(dueDate.getDate()).to.equal(expectedDueDate.getDate());
            expect(dueDate.getMonth()).to.equal(expectedDueDate.getMonth());
            expect(dueDate.getFullYear()).to.equal(expectedDueDate.getFullYear());
        });
    });
});