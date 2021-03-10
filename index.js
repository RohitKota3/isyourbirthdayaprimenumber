var readlineSync = require('readline-sync');
const chalk = require('chalk')
var moment = require('moment')
var userName = readlineSync.question(chalk.bold.rgb(253,15,2).bgWhite('May I have your name?'));
console.log("Welcome "+userName)
var userDOB = readlineSync.question(chalk.bold.rgb(253,15,2).bgWhite('May I have your Date of Birth in the format of DD/MM ?'));

var validate = moment(userDOB, 'DD/MM',true).isValid()

if (validate == true){
console.log('the date format you have entered is right')
}else
  {console.log('you have entered a wrong date format, please recheck')
  process.exit()
  }

var arr1 = userDOB.split('/');
var month = arr1[1].split('/');
var day = arr1[0].split('/');

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return chalk.bold.rgb(253, 15, 2).bgWhite("your birthday is not a prime number, thank you for using the application");
  return chalk.bold.rgb(253, 15, 2).bgWhite("your birthday is a prime number, you can go ahead and share this on social media");
}

isPrime(day)
