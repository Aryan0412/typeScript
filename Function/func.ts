function getSum (number : number) : number {
    
    return number + 2;
    // return "Hello";
}

function login (name : string, age : number, email : string, isAgree :boolean = false ){
    if(name && age){
        return "Login Successfully"
    }
}

console.log(login('Aryan', 21, 'aryanyadav6678@gmail.com'))


console.log(getSum(2));

export{}  