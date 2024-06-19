// Defining types for array using the Array type
const arr1 : Array<string>= ['IronMan', 'Batman', 'Spiderman']
const arr2 : Array<number> = [1,2,3,4];

// Using bracket notation
const arr3 : number[] = [1,2,3,4];
const arr4 : string[] = ['IronMan', 'Batman', 'Spiderman']

// Using type alias

type numbers = number[];
type strings = string[];

const arr5 : numbers = [1,2,3,4];

// Using Interfaces

interface Person {
    name : string;
    age : number;
}

const arr6 : Array<Person> = [
    {name : 'Aryan', age : 12},

]

