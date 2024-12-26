function addTwo (num : number) {
    return num+2;
}

console.log(addTwo(4))

function getUpperCase (val: string){
    return val.toUpperCase()
}

console.log(getUpperCase('aryan'))

const signUpUser =function (name:string, email:string, isAuth:boolean) {
    
}
console.log(signUpUser("Aryan", "aryan.yadav@strideone.in", true))

const loginUser = (name : string, email : string, isPain : boolean = false) => {}
console.log(loginUser('Aryan', 'aryan@gmail.com'))

export {}