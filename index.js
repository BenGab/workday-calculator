var dueDateCalculator = require('./src/duedatecalculator/duedatecalculator');
var timeroundBuilder = require('./src/timearound/timearoundbuilder');

var issueDate = new Date(2016, 9, 19, 14);
var timearound = timeroundBuilder.days(2).build();

var dueDate = dueDateCalculator.calculateDueDate(issueDate, timearound);

 console.log(dueDate);