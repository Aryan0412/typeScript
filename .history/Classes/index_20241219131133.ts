class User {
    email : string;
    name : string; 
    private readonly city : string = "Jaipur";
    constructor (email : string, name : string){
        this.email = email;
        this.name = name;
        this.city = "Gurgaon";
    }
}

class Student {
    constructor(
        public name : string,
        public age : number,
    ){}
}

const User_1 = new User('aryan.yadav@gmail.com', "Aryan");
// User_1.city = "Delhi";