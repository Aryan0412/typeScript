interface user {
    email : string,
    userId : number
}

function sayHiToUser (user : user) : string{
    return `Hello ${user.userId}`;
}

console.log(sayHiToUser({email : 'aryan@gmail', userId : 12016556}))