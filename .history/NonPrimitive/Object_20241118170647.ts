function createUser({name: string, isPain: boolean}) {

}
let newUser = {name : 'Aryan', isPain : false, email : 'aryanyadav@gmail.com'}
createUser(newUser)

type User = {
    readonly _id : number,
    name : string,
    email : string,
    cardDetails ?: number
}

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

export{}