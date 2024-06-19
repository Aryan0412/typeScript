"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSum(number) {
    return number + 2;
}
function login(name, age, email, isAgree) {
    if (isAgree === void 0) { isAgree = false; }
    if (name && age) {
        return "Login Successfully";
    }
}
console.log(login('Aryan', 21, 'aryanyadav6678@gmail.com'));
console.log(getSum(2));
