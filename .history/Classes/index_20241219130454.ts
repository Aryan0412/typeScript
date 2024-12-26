class User {
    email : string;
    name : string; 
    city : string = ""
    constructor (email : string, name : string){
        this.email = email;
        this.name = name;
    }
}

const aryan = new User('aryan.yadav@gmail.com', "Aryan");