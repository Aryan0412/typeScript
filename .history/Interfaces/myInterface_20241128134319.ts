interface user {
    email : string,
    userId : number
}

function sayHiToUser (user : user) : string{
    return `Hello ${user.userId}`;
}