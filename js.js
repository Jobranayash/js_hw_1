//-----------------------------------
//  Submitters' Names:              |
// * Jobran ayash  - גובראן עיאש   |
// * Majd Bathesh  - מאגד באטחיש   |
//-----------------------------------


/************************************************************************************
*                                    True or False
************************************************************************************/

//                                     Task #1

if ("0") {
    alert('Hello');
}
/* 
Yes, it will be alert cause "0" is not an empty string so js will consider it as true, 
*/

/************************************************************************************/

//                                     Task #2

if (prompt("What is the formal name of JavaScript?") === "ECMAScript") {
    alert("Correct!");
}
else {
    alert("לא יודע? ECMAScript!");
}

/************************************************************************************/

//                                     Task #3

let score = 75;
let grade;

grade = score >= 90 ? "A" :
    score >= 80 ? "B" :
        score >= 70 ? "C" :
            score >= 60 ? "D" :
                "F";
console.log("הציון הוא:", grade);

/************************************************************************************/

//                                     Task #4



let ans = prompt("Enter a number:");

while (isNaN(ans)) {//if the input wasnt a number, makes user try again.
    alert("Invalid input! Please Enter a number again:");
    ans = prompt("Enter a number:");
}
let num = Number(ans);
if (num > 0) {
    alert(1);
}
else if (num < 0) {
    alert(-1);
}
else {
    alert(0);
}

/************************************************************************************/

//                                     Task #5

let result = (a + b < 4) ? 'Not enough' : 'A lot';

/************************************************************************************/

//                                     Task #6

let message = login === 'Employee' || login === 'Director' ? 'Hello' :
    login === '' ? 'No login' : '';


/************************************************************************************/

//                                     Task #7

//                                Expected Output:
console.log(false || 'sdf');         // sdf
console.log(false && '');            // false
console.log(true || '');             // true
console.log(true && '');             // ''
console.log(undefined || null);      // null
console.log(undefined || 0 || null); // null
console.log(undefined && 0 && null); // undefined
console.log(1 || 0);                 // 1
console.log(null || 1);              // 1
console.log(null || 0 || 1);         // 1





/************************************************************************************
*                                       Loops
************************************************************************************/

//                                     Task #1

let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i++;
}
console.log(`1 + 2 + 3 + ... + 100 = ${sum}`);

/************************************************************************************/

//                                     Task #2


let userNum;

do {
    userNum = prompt("Enter a positive number: ");
} while (isNaN(userNum) || Number(userNum) <= 0);
console.log(`The number is ${userNum}`);

/************************************************************************************/

//                                     Task #3


for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

/************************************************************************************/

//                                     Task #4


const secret = 7;
let guess;
for (; ;) {
    if (Number(prompt("נחש את המספר בין 1 ל־10:")) === secret)
        break;
    console.log("לא נכון. נסה שוב.");
}
console.log("נכון!")



/************************************************************************************/

//                                     Task #5


for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}


/************************************************************************************/

//                                     Task #6


let j = 3;

while (j) {
    alert(j--);
}

// last value will be 1 
//because j start with 3 and keep going down by 1 till it reach 0
//when j=1 it goes down to 0 and it wont enter the loop so it will print 1


/************************************************************************************/

//                                     Task #7

// Left code:
/*
let i = 0;
while (++i < 5) {
    console.log(i);
}

Output:
1
2
3
4



// Right code:
let i = 0;
while (i++ < 5) {
    console.log(i);
}

Output:
1
2
3
4
5

Left one increase then check while right one check then increase .

So the answer is NO.
*/


/************************************************************************************/

//                                     Task #8

// Left code:
/*
for(let i = 0 ; i < 5 ; i++) console.log(i);

// Right code:
for(let i = 0 ; i < 5 ; ++i) console.log(i);

Yes, because i++ or ++i is implemented at the end of each for iteration which is doesnt matter!
*/


/************************************************************************************/

//                                     Task #9

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

/************************************************************************************/

//                                     Task #10

let t = 0;
while (t < 3) {
    alert(`number ${t++}!`);
}

/************************************************************************************/
