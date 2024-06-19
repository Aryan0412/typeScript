"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var arr2 = arr.map(function (item) {
    console.log(">>>>>>>>>>>>>");
    return "Hello ".concat(item);
});
console.log(">>>>>>>>>>", arr2);
