var readlineSync = require('readline-sync');
var old = require("./lastpolicy.json")
var policyterms = require("./terms.json")

var userName = readlineSync.question('Hi What is your name? ');
console.log('Hi ' + userName );

var age = readlineSync.question('How old are you?' )

function lastpolicy (){
var pastpremiun = old [0].last
return pastpremiun
}

function info (){
    var text2 = ""; // this sets a variable called text as empty as it will change later in the program
    var i; // this sets a variable that we can use as a starting point
    for (i = 0; i < policyterms.length; i++) {
        
        text2 += "Item No: " + (i +1) + " is: " + policyterms[i] + "\n"; // this line sets the value of the text for each variable.
          
      }
      console.log(text2) // this line console logs the answer
    
    }




if  (age < 20) {
policy = "You are too young for a policy"

} else if (age >= 21&& age <= 35){
    var premium = age * 16
    var admin = premium + 22


     
    policy ="€" + admin + " is your premium price, your last payment was € " + lastpolicy()

info()

}else {
    var premium = 700
    var admin = premium + 22
    policy = "The policy will cost " + admin + " your last payment was € " + lastpolicy()
    info()

}



console.log(policy)