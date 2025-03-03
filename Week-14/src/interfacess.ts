// Interfaces are used to define types of complex objects

interface Address{
    city:string;
    country:string;
    pincode:number
}
interface User{
    name:String;
    age: number;
    address?:Address | { //?: means the field is optional
        city:string;
        country:string;
        pincode:number
    }
}

interface Office{
    name:String;
    address:Address;
}
let user :User={
    name: 'John',
    age: 25,
    address:{
        city: 'Bangalore',
        country: 'India',
        pincode: 560001
    }
}

function isLegal(user:User):boolean{
    if(user.age>=18){
        return true;
    }
    return false;
}

// console.log(isLegal(user));

interface Person{
    name : String;
    age: Number;
    greet:()=>string;
}

const person : Person = {
    name: 'John',
    age: 25,
    greet: function(){
        return `Hello ${this.name}`;
    }
}

// console.log(person.greet());

class Manager implements Person{
    name :String;
    age: Number;
    constructor(name:String, age:Number){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hello ${this.name}`;
    }
}

const manager = new Manager('Johny', 25);
// console.log(manager.greet());

abstract class User2{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract greet():string;
}

class Boss extends User2{
    constructor(public name:string){
        super(name);
    }
    greet(){
        return `Hello ${this.name}`;
    }
}

const boss = new Boss('John');
// console.log(boss.greet());


