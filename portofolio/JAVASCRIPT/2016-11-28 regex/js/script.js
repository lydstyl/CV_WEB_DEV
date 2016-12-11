function testerMaRegexAvec(maRegex, parametre){
    for (var i = 0; i < parametre.length; i++) {
        console.log(maRegex.test(parametre[i])+" --> "+parametre[i]);
    }
}
/*
console.log(/^(XXX|OOO)$/.test("XXX"));
console.log(/^(XXXX)$/.test("XXX"));
console.log(/^([X]{2,3})$/.test("XX")); // 2 ou 3 X
console.log(/^([X]{2,3}(A|B))$/.test("XXC")); // 2 ou 3 X
console.log(/^([X]{2,3}(A|B)?)$/.test("XX")); // 2 ou 3 X
console.log(/^([a-z]{1,9})$/.test("abc")); // 2 ou 3 X
console.log(/^([0-9]{4})$/.test("1588")); // 2 ou 3 X
console.log(/^((19|20)([0-9]{2}))$/.test("1988")); // 2 ou 3 X
var maRegex = /^((19|20)([0-9]{2}))$/;
var maRegex = /^([-@#A-Z0-9a-z]{3,15})$/;
var maRegex = /^([-@#A-Z0-9a-z]{3,})$/;
var maRegex = /^([a-zA-Z0-9]{1}[a-zA-Z0-9\-._]{3,}@[a-zA-Z0-9\-._]{3,}\.[a-zA-Z]{2,3})$/; //vérification adresse email
var maRegex = /^([a-zA-Z0-9][a-zA-Z0-9\-._]{3,}@[a-zA-Z0-9\-._]{3,}\.[a-zA-Z]{2,3})$/;
*/

var aTester = [
    "vianney@hotmail.com",
    "cyril69@msn.fr",
    "gabriel-12@live.biz",
    "ga@live.biz",
    "gab@ylve.biz",
    "-_-@gmail.com",
]

testerMaRegexAvec(maRegex, aTester);