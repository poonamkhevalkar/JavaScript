const accountId = 144553
let accountEmail = "poonam@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

//accountId = 2  // Not Allowed

accountEmail = "p@gmail.com"
accountPassword = "2222"
accountCity = "Surat"
console.log(accountId);

/*
prefer not to use var
because of issuein block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])