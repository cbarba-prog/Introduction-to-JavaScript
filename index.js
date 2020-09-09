/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;

if(votingAge >= 18){
console.log(true);
}
else 
console.log(false);




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var num = 2;

if(num == 2)
{
    num = num + 3;
}
console.log(num);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let x = "1999";
console.log(Number(x));


//Task d: Write a function to multiply a*b 

function multiply(a, b){
    return a * b;
}
console.log(multiply(3,3));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const age = 27;

function dogAge()
{
    dogyears = age * 7;
    return dogyears;
}
console.log(dogAge());



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal)
// and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct 
// your result should be 0.44999999999999996
  
let weight = prompt("Enter the dog's weight: ");
let age = prompt("Enter the dog's age: ");
//let weight = 15;
//let age = 1;


function PoundsOfRawFood(){
if(age >= 1){

    if(weight <= 5){
        feedReq = weight * 0.05;
        return feedReq;
    }

    else if(weight <= 10 && weight >= 6){
        feedReq = weight * 0.04;
        return feedReq;
    }
    
    else if(weight >= 11 && weight <= 15){
        feedReq = weight * 0.03;
        return feedReq;
    }

    else{
        feedReq = weight * 0.02; 
        return feedReq;
    }
}
else if(age >= 0.166 && age < 0.333)
{
    feedReq = weight * 0.1;
    return feedReq;
}
else if(age >= 0.333 && age < 0.583){
    feedReq = weight * 0.05;
    return feedReq;
}
else if(age >= 0.583 && age < 1.000)
{
    feedReq = weight * 0.04;
    return feedReq;
}
}
console.log(PoundsOfRawFood());




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var RPS = prompt("Enter rock, paper, scissors: ");

var compRPS = Math.floor(Math.random() * 3); 


function UserRPS(){
    if (RPS == "rock")
    {
        RPS = 0;
    }
    else if (RPS == "paper")
    {
        RPS = 1;
    }
    else if (RPS == "scissors")
    {
        RPS = 2;
    }
}

UserRPS();

    if(RPS == compRPS){

        console.log("Tie");
    }
    else if(RPS == 0 && compRPS == 1)
    {
        console.log("Lose");
    }
    else if(RPS == 0 && compRPS == 2){
        console.log("Win");
    }
    else if(RPS == 1 && compRPS == 0) {
        console.log("Win")
    }
    else if(RPS == 1 && compRPS == 2){
        console.log("Lose");
    }
    else if (RPS == 2 && compRPS == 0){
        console.log("Lose");    
    }
    else{
        console.log("Win");
    }



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let KM = prompt("Enter # of Kilometers: ");

Miles = KM * 0.621371;

console.log(KM + " kilometers is " + Miles + " miles");


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let Feet = prompt("Enter # of feet: ");

CM = Feet * 30.48;

console.log(Feet + " feet is " + CM + " centimeters");

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(){
    for(let i = 100; i >= 1; i--){
    console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around " + (i - 1) + " bottles of soda on the wall");
    }
}
annoyingSong();
    
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

let grade = prompt("Enter score out of 100: ");

if (grade <= 100 && grade >= 90)
{
    console.log("A");
}
else if(grade < 90 && grade >= 80){
    console.log("B");
}
else if(grade < 80 && grade >= 70){
    console.log("C");
}
else if(grade < 70 && grade >= 60){
    console.log("D");
}
else if(grade < 60){
    console.log("F");
}
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





