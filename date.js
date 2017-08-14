const moment = require('moment');
const chalk = require('chalk');

//Expected output:
//It is Tuesday, July 18th 2017, 3:07:48 PM.
//It is the xxxth day of the year.
//It is xxxx seconds into the day.
//It is/is not during Daylight Savings Time.
//It is/is not a leap year.

//getting the date
console.log("It is " + chalk.blue(moment().format("dddd, MMMM, Do, YYYY, h:mm:ss a") + "."));
console.log("It is the " + chalk.magenta(moment().dayOfYear() + "th") + " day of the year.");
console.log("It is " + chalk.cyan(countSeconds()) + " seconds into the day.");
isDST();
isLeapYear();

//getting seconds count
function countSeconds() {
  let a = moment().startOf('day');
  let b = moment().startOf('second');
  return b.diff(a, 'second');
}

//determining daylight savings
function isDST () {
  let dst = moment().isDST();
  if (dst === true) {
    console.log("It " + chalk.green("is") + " during Daylight Savings Time.")
  }
  else {
    console.log("It " + chalk.red("is not") + " during Daylight Savings Time.")
  }
}

//determining leap year
function isLeapYear () {
  let leapYear = moment().isLeapYear();
  if (leapYear === true) {
    console.log("It " + chalk.green("is") + " a leap year.")
  }
  else {
    console.log("It " + chalk.red("is not") + "s a leap year.")
  }
}
