// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false
numberTeachers > numberStudents
// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: This will show the results of 4 being less than 9

var books = 3;
console.log(4 < books);
// YOU DO: the variable number of books is set to 3. The console.log will give the results of whether 4 is 
// less than the variable number of books. Which should be false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Variables of friends is set to 6, while siblings is set to 4. Console will give results of whethe friends 
// is greater than siblings which is true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: variables set to 9 attendees and 8 meals. console says attendees is not strictly equal to meals
// which I believe is true.


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework); false
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework); true

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark)

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age < 1)
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:I put determine a puppys age to being less than 1 so i used the equation to 
//ask if the dogs age was less than 1 and likes to play. This statement is false.
