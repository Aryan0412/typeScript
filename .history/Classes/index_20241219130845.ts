class User {
    email : string;
    name : string; 
    readonly city : string = "Jaipur";
    constructor (email : string, name : string){
        this.email = email;
        this.name = name;
        
    }
}

const User_1 = new User('aryan.yadav@gmail.com', "Aryan");
// User_1.city = "Delhi";