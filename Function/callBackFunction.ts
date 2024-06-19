const arr : number[] = [1,2,3,4,5,6,7,8];

const arr2 : string[] = arr.map((item):string => {
    console.log(">>>>>>>>>>>>>")
    return `Hello ${item}`;
})
console.log(">>>>>>>>>>", arr2);
export{}


