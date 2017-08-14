const chalk = require("chalk")
const moment = require("moment")

var fullDate = moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a')
var nth = moment().format('DDDo')
var seconds = (moment().format('HH') * 3600) + (moment().format('mm') * 60) + (moment().format('ss') * 1)
function dST(){
if (moment().isDST() === true){
  return ("is not")
} else {
  return ("is")
}
};


console.log("it is " + fullDate);
console.log("it is the " + nth + " day of the year");
console.log("it is " + seconds + " seconds into the day");
console.log("it " + dST() + " during Daylight Savings Time");





/*it is weekday, month date year, hour:min:sec am/pm
it is the xth day of the year
it is x seconds into the day
it "is" during DST (true/false)
it "is not" not a leap year (true/false)*/
