class User {
    email : string;
    name : string; 
    private readonly city : string = "Jaipur";
    private counter : number = 0;
    constructor (email : string, name : string){
        this.email = email
        this.name = name;
        this.city = "Gurgaon";
    }
    get getCounter() : number {
        return this.counter;
    }

    set setCounter (counter : number) {
        this.counter = counter
    }


}


class Student extends User {
    constructor(
       public email : string,
       public name : string,
        public age : number,
    ){
        super(email, name);
    }
}

const User_1 = new User('aryan.yadav@gmail.com', "Aryan");
// User_1.city = "Delhi";