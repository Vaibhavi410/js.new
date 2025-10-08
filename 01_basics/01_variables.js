const accountId=14453
let accounntEmail="vaibhavi@google.xom"
var accountPassword=12345 //var and let allows us to declare variable which we can change
 accountCity="Pune" // we can declare variable like this also bt not prefered..
let accountState;
// accountId=2 // we cannot change the value of const variable)
/*
Prefer not to use var because of issue in block scope
*/

accounntEmail="new@gmail.com"
accountPassword="54321"
accountCity="Mumbai"

// console.log(accountId);
console.table({accounntEmail,accountPassword,accountCity,accountState});
