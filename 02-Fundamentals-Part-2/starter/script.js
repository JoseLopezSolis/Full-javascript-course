'use strict';
/*
//*STRICT MODE
//It's a security mode for javascript (Dont let the user enter to the script)

//Always set strict mode for security
'use strict';

let hasDriversLicence = false;
const passTest = true;

//If in one line (for clean code)
if(passTest) hasDriversLicence = true;

if(hasDriversLicence) console.log("I can drive");

//let interface = 'Audio'; 
//const private = 545;
*/
/*
//*Functions in javascript

//Function expresion
function calculateAge(dateBirth){
    const currentlyYear = 2022;
    return(currentlyYear-dateBirth)
}
const person1 = 2002;
let date = calculateAge(person1);

console.log(date);

//function declaration
const calculateAge2 = function (dateBirth){
    return(2022-dateBirth);
}

let result = calculateAge(2002);
console.log(result);

//Arrow functions
//Define = <paramether> => <function code>
//Return the value automatically
const calcAge = birthYear => 2022 - birthYear;

const newAge = calcAge(2002);
console.log(newAge);


const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} Retires in ${retirement} years`;
}

const yearResult = yearsUntilRetirement(2002,'pepeboss');
console.log(yearResult);
*/

//*function calling other functions
/*
function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples,oranges){
    let applePieces = cutFruitPieces(apples);
    let orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

const result1 = fruitProcessor(2,3);
console.log(result1);
*/

//*Arrays in JS
/*
const arrayExample = ['One','Two','etc'];
const arrayExample2 = new Array(1,2,3,4,5,6);

//Methods
console.log(arrayExample.length);
console.log(arrayExample2.length);

console.log(arrayExample);
console.log(arrayExample2);

//printing the last item in my array
console.log(arrayExample[arrayExample.length - 1]);
*/
//*Objects in javascript
/*
const person1 ={
    name: 'pepe',
    lastname: 'Lopez',
    age: 20,
    carrier: 'ICI',
};

console.log(person1);

//Two types of call a property
console.log(person1.name);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.carrier);

console.log("INFORMATION:\n")
for(let i in person1){
    console.log(person1[i]);
};
*/
//*DOT NOTATION AND BRACKET NOTATION with(objets)
/*
const person1 = {
    name: 'Pepeboss',
    lastName: 'Lopez',
    age: 20,
    university: 'UDC',
    bitches: 3,
};

//Add elements into an object
person1.address = 'Colima';
person1['rfc'] = 12312;
console.log(person1.name);

const accesInformation = prompt("What do you want to know?").toLowerCase();
console.log(accesInformation);

if(person1[accesInformation]){
    switch(accesInformation){
        case 'name':
            console.log(`The name is ${person1[accesInformation]}`);
            break;
        case 'lastname':
            console.log(`The last name is ${
                person1[lastName]
            }`);
            break;
        case 'age':
            console.log(`The age is: ${person1[accesInformation]}`);
            break;
        case 'university':
            console.log(`The university is ${person1[accesInformation]}`)
            break;
        case 'bitches':
            console.log(`The total bitches ${person1[accesInformation]}`);
            break;
        case 'address':
            console.log(`The address is ${person1[accesInformation]}`);
            break;
        case 'rfc':
            console.log(`The RFC is ${person1[accesInformation]}`);
            break;
        default:
            console.log(`${accesInformation} not found`);
    }
}else{
    console.log("The request is't exist");
}
*/
//*Challenge with objects
/*
const Pepe = {
    name: 'pepeboss',
    age: 20,
    friends: ['Pancho','Jared','Jose'],
};
const Anthony = {
    name: 'Anthony',
    age: 21,
};
const Jared = {
    name: 'Jared',
    age: 23,
};
const user = prompt("What's your best fried?").toLowerCase();  

console.log(user);
switch (user){
    case 'pepe': console.log(`His name it's ${Pepe.name} his age is ${Pepe.age} his friends are ${Pepe.friends} and his favorite friend is ${Pepe.friends[0]} and he has ${Pepe.friends.length} favorite friends.Pee`); 
        break;
    case 'anthony': console.log(`His name it's ${Anthony.name} his age is ${Anthony.age}`); 
        break;
    case 'jared': console.log(`His name it's ${Jared.name} his age is ${Jared.age}`); 
        break;
    default:
        console.log("The friend doesn't exist");
        break
}
*/
//*Object methods
/*
const pepeboss = {
    name: 'pepeboss',
    year: 2002,
    university: 'UDC',
    lastName: 'Lopez Solis',
    friends: ['Francisco','Jese','Jared'],
    hasDriverLicense: true,

    calcAge: function(){
        console.log(this); //this is going to be our object
        return 2022 - this.year; //this.year = pepeboss.year
    }
}

const result = pepeboss.calcAge()
console.log(result);
*/
//*Challenge using object methods
/*
const jonas = {
    name: 'Jonas',
    age: 46,
    driverLicence: false,
    job: 'Teacher',

    showData: function(){
        //Showing the data of Jonas
        let driverLicense = '';
        //Short if
        this.driverLicence ? driverLicense='has driver license': driverLicense = "don't have driver lincese";

        return(`
        name -> ${this.name}🧔🏽\n
        age -> ${this.age} 🧔🏽\n
        driver license -> ${driverLicense} 💳\n
        job -> ${this.job} 🧑🏽‍🏫
        `);
    }
}

const result = jonas.showData();
console.log(result);
*/
//BMI = weight/height**2 || 

//*Iteration for the loops
//*For loops
/*
var rep = 10;
for(let i = 0; i<=rep;i++){
    console.log(`Lifting number ${i}`);
}
*/
//*Go trhough a list with a for
//*This is an array
/*
const pepeboss = [
    'Jonas',
    'Lopez',
    2022 - 2002,
    ['Francisco','Anthony','Jared'],
    true,
];

const types2 = new Array;

for(let i = 0; i < pepeboss.length; i++){
    console.log(pepeboss[i], typeof(pepeboss[i]));
    //Loop in two dimentions
    if(typeof pepeboss[i] == 'object'){
        //*continue = jump to the other iteration
        for(let j in pepeboss[i]){
            console.log(pepeboss[i][j]);
        }
        break; //*Break the loop
    }
    //How to append without using append method
    //types[i] = typeof pepeboss[i];
    //Add elemetns into an a list
    types2.push(typeof pepeboss[i]);
}
 console.log(types2);
*/
//* While loops in JS
/*
const createRandomNumber = number => {return Math.trunc(Math.random()*number+1)};

let number = createRandomNumber(5);

while(number !== 4){
    console.log(number);
    number = createRandomNumber(5)
    if(number === 4){
        console.log("Finsishing");
    }
}
*/
