// Q.1 Return the Sum of Two Number
function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(3, 5));

// Q.2 Convert Hours into Seconds
function hoursIntoSeconds(hour) {
    return hour * 60 * 60;
}

console.log(hoursIntoSeconds(2));

// Q.3 Calculate the Perimeter of a Rectangle
function calcPerimeter(width, length) {
    return (width * 2) + (length * 2);
}

console.log(calcPerimeter(6, 7));

// Q.4 Calculate the Area of a Triangle
function calcTriangleArea(base, height) {
    return (1 / 2) * base * height;
}

console.log(calcTriangleArea(10, 10));

// Q.5 Extend a String
function appendFrontend(string) {
    return string + 'Frontend'
}

console.log(appendFrontend('Apple'));

// Q.6 Greater than 100? Then Return True
function sumGreaterThan100(num1, num2) {
    if (num1 + num2 > 100) {
        return true;
    }
    return false;
}

// function sumGreaterThan100(num1, num2) {
//     return num1 + num2 >=100
// }

console.log(sumGreaterThan100(50, 51));

// Q.7 Less Than or Equal to Zero? Then Return True
function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(40))

// Q.8 Opposite Boolean
function oppositeBoolean(bool) {
    if (bool === false) {
        return true;
    }
    return false;
}

// function oppositeBoolean(bool) {
//     return !bool;
// }

console.log(oppositeBoolean(false));

// Q.9 Is Not the Number 0, Then Retur True
function isNotZero(num) {
    return num !== 0
}

console.log(isNotZero("0"));

// Q.10 Calculate the Remainder
function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(10, 3));

// Q.11 Is the Number Odd? Then Return True
function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(12))

// Q.12 If a Number is Even, Return 1 Otherwise Return -1
function booleanInteger(num) {
    if (num % 2 === 0) {
        return 1;
    }
    return -1;
}

// function booleanInteger(num) {
//     return num % 2 === 0 ? 1 : -1;
// }

console.log(booleanInteger(3))

// Q.13 Check If A User is Logged In AND Subscribed
function isLoggedInAndSubscribed(loggedIn, Subscribed) {
    // return
    return (loggedIn === 'LOGGED_IN') && (Subscribed === 'SUBSCRIBED')

}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))

// Q.14 Check If A User is Logged In AND Subscribed
function isLoggedInAndSubscribed(loggedIn, Subscribed) {
    return (loggedIn === 'LOGGED_IN') || (Subscribed === 'SUBSCRIBED')

}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));

//Q.15 Given Two Values, Return if first One is Falsy, Otherwise Return the Second ONe
function falsyOrTruthy(elem1, elem2) {
    return !elem1 ? elem1 : elem2;
    // if (!elem1) {
    //     return elem1;
    // }
    // else {
    //     return elem2;
    // } (LONG WAY)
}

console.log(falsyOrTruthy(1, 'dog'));

// Q.16 Return the Length of Any Given Array
function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([1, 2, 3, 4, 5]))

// Q.17 Return Last Element in Array
function arrLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(arrLastElement([1, 2, 3, 4]))

// Q.18 Find the Sum of an Array
function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        // How to loop through every element in an array
        // console.log(arr[i]);
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum([1, 2, 3, 4, 5, 6]))

// Q.19 Add Up the Numbers from a Single Number
function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        sum = sum + i;
    }
    return sum
}

console.log(progressiveSum(3))

// Q.20 Calculate the Time
function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(500))

// Q.21 Find the Largest Number
function getMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax([-500, -200, -300]))

// Q.22 Reverse a String
function reverseString(str) {
    // let reversedString = '';
    // for(let i = 0; i <str.length; ++i) {
    //     reversedString = str[i] + reversedString; //(incremening for loop)
    // }
    // return reversedString;

    // for(let i = str.length -1; i >= 0; --1) {
    //     reversedString = reversedString + str[i] // (decrementing for loop)
    // }
    // return reversedString; ()

    return str.split('').reverse().join(''); //(array reverse property)
}

console.log(reverseString('abc'))

// Q.23 Turn Every Element in an Array into 0
function convertToZeros(arr) {
    // let newArr = [];
    // for(let i = 0; i <arr.length; ++i) {
    //     newArr[i] = 0 //(for loop)
    // }
    // return newArr; 

    // return new Array(arr.length).fill(0); //(array '.fill')

    return arr.map(elem => {
        return 0 // if have {}, need to return if using .map
    }); //(array 'map')
}

console.log(convertToZeros([10, 20, 80, 30, 35]))

//Q.24 Filter Out all the Apples
function removeApples(arr) {
    // let noApples = [];
    // for(let i = 0; i <arr.length; ++i) {
    //     if (arr[i] !== 'Apple') {
    //         noApples.push(arr[i])
    //     }
    // }
    // return noApples; //(for loop)

    return arr.filter(elem => elem !== 'Apple'); //(array 'filter')
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))

//Q.25 Filter Out All the Falsy Values
function filterOutFalsy(arr) {
    // let truthyArr = [];
    // for(let i = 0; i <arr.length; ++i) {
    //     if(!!arr[i] === true) {
    //         truthyArr.push(arr[i]);
    //     }
    // }
    // return truthyArr; //(for loop)

    return arr.filter(elem => !!elem === true); // (array 'filter')
}

console.log(filterOutFalsy(["", 0, 'Tomato', undefined, "0", false, 'Orange', []]))

//Q.26 Truthy to True, Falsy to False
function convertToBoolean(arr) {
    return arr.map(elem => !!elem) //(array 'map')
}

console.log(convertToBoolean([500, 0, "David", "", []]))

//Q.27 Show Rating
function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings += "*" //ratings = ratings + "*"
        if (i !== Math.floor(rating) - 1) {
            ratings += " " //ratings = ratings + " "
        }
    }
    if (!Number.isInteger(rating)) { //checking if a number is not an integer
        ratings += " ."; //ratings = ratings + " ."
    }
    return ratings;
}

console.log(showRating(4.5));

//Q.28 Sort by Lowest to Highest Price
function sortLowToHigh(numebrs) {
    return numebrs.sort((a, b) => a - b); //how to sort numbers form lowest to highest OR highest to lowest is b - a
} //invisible return in from of a - b ( (a, b) => {return a - b} )

console.log(sortLowToHigh([5, 1, 20, 10, -30, 10006, 2000]))

//Q.29 Sort by Highest to Lowest Price
function sortHighToLow() {
    return numbers.sort((a, b) => b - a)
}

console.log(sortHighToLow([{ id: 5, price: 50 }, { id: 5, price: 50 }, { id: 5, price: 50 }]))