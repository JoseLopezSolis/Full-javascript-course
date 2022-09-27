//*BASIC THINGS
//*Values and variables in JS
/*
//Country variables
let country = "Mexico";
let continent = "North America";
let population = 130000000;

//Print variables
console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population);

let isIsland = false;
let language = 'Spanish';

console.log(("The data type of isIsland is: ")+typeof isIsland); //This function return the data type of the variable
console.log("The data type of language is: "+typeof language);

//Undefined data type example
let undifinedVairable;
console.log(undifinedVairable);
*/
/*
//*Data types in JS
let numer = 10;
console.log(typeof numer)
let string = 'string example';
console.log(typeof string)
let boolean = true;
console.log(typeof boolean)
//When it's nothins it's undefined
let undefinedVariable; 
console.log(typeof undefinedVariable);
console.log(undefinedVariable);
//Null variable it's actually an object in JS
let nullVariable = null; 
console.log(typeof nullVariable);
*/
//*let const and var.
/*
let variableExample1 = ''; //simple variable
var variableExample2 = ''; //Simple variable but it can be used as a global variable
const constantExample = ''; //Just a constant, it doesn't change
*/

//*Lecture basic operations:
/*
let mexicoPopulation = prompt("Enter the population of Mexico");

let halfPopulation = mexicoPopulation/2;
console.log("The half of the population of Mexico is:",halfPopulation);

let i=0
while(true){
    i++;
    mexicoPopulation++
    console.log(mexicoPopulation);
    if(i===10){
        break;
    }
}
let finlandPopulation = 3300000000;
if(mexicoPopulation===finlandPopulation){
    console.log("Each other has the same population is their countries.")
}

if(mexicoPopulation>finlandPopulation){
    console.log("Mexico has more population than Finland");
}else{
    console.log("Finland has more population than Mexico");
}

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);
*/

/*
//*Operation precedence 
let operation = (10+10)*10; //Form of operations works in order like math
console.log(operation);

if(operation + 100 == 300){
    console.log('The result of the operation is equal to',operation);
}else{
    console.log("The reusuls it's different to 200");
}
*/
/* 
//*If else stataments
var person1 = 6;
const canDrive = person1 >= 18;

if(canDrive){
    alert("You are able to drive 🚗👌");
}else{
    alert(`YOU AREN´T ABLE TO DRIVE ❌\n You have to wait ${18-person1} years to the licence card `);
}
*/
//*Data type convertion
/*
//string to number
const year = '1991';
console.log(year);
console.log(Number(year)+2022); //sum

//number to string
const independeceDay = 16;
console.log(String(independeceDay)+" it's the day of the independece in Mexico."); 
*/

/*
//*Conditional operator Ternary (If else statements in just one line)

let age = 18
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

console.log(`I like to drink ${age >= 18 ? 'wine': 'Water'}`);
*/
