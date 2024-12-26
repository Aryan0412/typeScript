interface user {
    email : string,
    userId : number
}

interface userDetails extends user {
    first_name : string,
    last_name : string
}

function sayHiToUser (user : userDetails) : string{
    return `Hello ${user.userId}`;
}

console.log(sayHiToUser({email : 'aryan@gmail', userId : 12016556}));

export {};