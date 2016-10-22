var expect = require('chai').expect;
var timearoundBuilder = require('../src/timearound/timearoundbuilder');

describe('TimearoundBuilder tests', function() { 
    describe('method type tests', function() {
        it('should have hours method', function() {
            var type = typeof timearoundBuilder.hours;
            expect(type).to.equal('function');
        });

        it('should have days method', function() {
            var type = typeof timearoundBuilder.days;
            expect(type).to.equal('function');
        });

        it('should have weeks method', function() {
            var type = typeof timearoundBuilder.weeks;
            expect(type).to.equal('function');
        })

        it('should have build method', function() {
            var type = typeof timearoundBuilder.build;
            expect(type).to.equal('function');
        });
    });

    describe('hours method tests', function() {
        it('should set hours the and returns the new instance with give hours', function() {
            var timearound = timearoundBuilder.hours(10);
            expect(timearound.build()).to.equal(10); 
        });

        it('should not set hours when the given number is NaN', function() {
            var timearound = timearoundBuilder.hours('sa10');
            expect(timearound.build()).to.equal(0); 
        });

        it('should not set hours when the given number is not number type', function() {
            var timearound = timearoundBuilder.hours('10');
            expect(timearound.build()).to.equal(0); 
        });
    });

    describe('days method tests', function() {
        it('should set workhours by given days', function() {
            var timearound = timearoundBuilder.days(2);
            expect(timearound.build()).to.equal(16);
        });

        it('should not set days when the given number is NaN', function() {
            var timearound = timearoundBuilder.days('sa10');
            expect(timearound.build()).to.equal(0); 
        });

        it('should not set days when the given number is not number type', function() {
            var timearound = timearoundBuilder.days('10');
            expect(timearound.build()).to.equal(0); 
        });
    });

    describe('weeks method tests', function() {
        it('should set workhours by given weeks', function() {
            var timearound = timearoundBuilder.weeks(1);
            expect(timearound.build()).to.equal(40);
        });

        it('should not set weeks when the given number is NaN', function() {
            var timearound = timearoundBuilder.weeks('sa10');
            expect(timearound.build()).to.equal(0); 
        });

        it('should not set weeks when the given number is not number type', function() {
            var timearound = timearoundBuilder.weeks('10');
            expect(timearound.build()).to.equal(0); 
        });
    });

    describe('build method tests', function() {
        it('should build the expected time by given method calls', function() {
            expect(timearoundBuilder.weeks(1).days(2).hours(3).build()).to.equal(59);
        });
    });
});