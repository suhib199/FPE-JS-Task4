/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
let arr = [10, 2, 4, 6, 20];
let arr2 = [];
function doubleValues(arr) {
    arr.forEach(element => {
        arr2.push(element + element)

    });
    arr2.forEach(el => { console.log(el) });
}
doubleValues(arr);

/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = [];
function onlyEvenValues(arr) {
    arr.forEach(element => {
        if (element % 2 === 0) {

            evenNumbers.push(element)
        }

    })

    evenNumbers.forEach(element => { console.log(element) });


}
onlyEvenValues(numbers);

/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
let stringsArray = ["colt", "matt", "tim", "udemy"];
let afterModification = [];
function showFirstAndLast(arr) {
    arr.forEach(element => {
        afterModification.push(`${element[0]}${element[element.length - 1]}`)
    })

    afterModification.forEach(function (el) { console.log(el) })

}
showFirstAndLast(stringsArray);

/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
let arrObject = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }];
let newArray = [];

function addKeyAndValue(arr, key, value) {
    arr.forEach(element => {
        element[key] = value;
        newArray.push(element);
    });

    newArray.forEach(element => {
        console.log(element);
    });
}

addKeyAndValue(arrObject, 'title', 'instructor');




/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

let vowelLetters = ['a', 'i', 'o', 'e', 'u'];
let vowelObject = {};

function vowelCount(str) {
    let lowerCase = str.toLowerCase();
    let splitString = lowerCase.split("");
    for (let i = 0; i < vowelLetters.length; i++) {
        let counter = 0;
        splitString.forEach(element => {
            if (element === vowelLetters[i]) {
                counter++;
            }
            vowelObject[vowelLetters[i]] = counter;
      
        })
    }
    return vowelObject;
}

vowelCount('AliaUeawer');