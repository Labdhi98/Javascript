const account_ID = 1234
let accountEmail = "labdhi@google.com"
var accountPassword = "2345"
accountCity = "Ahmedabad"
let accountstate;
//accountID = 1235 //not allowed to change as it is const
accountEmail = "lg@hotmail.com"
accountPassword = "5432"
accountCity = "goa"

/*
not to use var as for scope functional problem
{} - called scope
*/
console.log(account_ID);
console.table([account_ID,accountEmail,accountPassword,accountCity,accountstate])
