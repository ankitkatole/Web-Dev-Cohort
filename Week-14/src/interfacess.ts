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

interface Userr{
    name:string;
    age:number;
}

function sum(user1:Userr,user2:Userr):number{
    return user1.age + user2.age;
}

const user1 = {name:'John', age:25};
const user2 = {name:'Doe', age:30};

// console.log(sum(user1,user2));

interface Customer{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
}

type UpdateProps = Pick<Customer, 'name' | 'age' | 'email'>

type updatedCustomer = Partial<Customer>

type Userprops = {
    readonly id:number;
    readonly name:string;
    readonly age:number;
}

const userprops:Userprops = {
    id:1,
    name:'John',
    age:25
}

// userprops.age = 30; // Error: Cannot assign to 'age' because it is a read-only property


type UserData= {
    id: string;
    username: string;
}

type UsersData={
    [key:string]:UserData;
}

const usersData:UsersData = {
    'user1':{
        id:'1',
        username:'John'
    },
    'user2':{
        id:'2',
        username:'Doe'
    }
}

//Records in Typescript
type UsersData2 = Record<string,UserData>;//typescript specific concept

//Maps 
let myMap = new Map<number,string>();//Javascript Concept
myMap.set(1,'John');
myMap.set(2,'Doe');

