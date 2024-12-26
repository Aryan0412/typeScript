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

const card_number:cardNumber = {
    cardnumber : '1234 1234 1234 1234',
}
const card_date:cardDate = {
    cardDate : '12/12'
}

const card_details : cardDetails = {
    cardnumber : '1234 1234 1234 1234',
    cardDate : '12/12',
    cvv : 123
}

export{}