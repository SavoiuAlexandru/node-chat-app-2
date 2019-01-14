// Jan 1st 1970 00:00:00 am

const moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb'];
//
// console.log(date.getMonth());

var date = moment();

console.log(date.format('MMM Do, YYYY'));