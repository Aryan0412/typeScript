let id : number | string = '1';
let arr : number[] | string[] = ["a", "b", "c", "d"];
let arrMix : (number | string)[] = ["a", "b", "c", "d", 1];

let seatAllotment : 'asile' | 'middle' | 'window';
seatAllotment = 'asile';


type reservation_type = [number, string, boolean]; 

let reservation : [number, string, boolean] = [24, "Aryan", false];
// or 
let reservationWithType : reservation_type = [46, "Aryan", true];
reservationWithType.push("Aryan");
console.log(">>>>>>>>>>>>", reservationWithType);











export {}
