// Q.1 Return the Sum of Two Number
function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(3,5));

// Q.2 Convert Hours into Seconds
function hoursIntoSeconds(hour) {
    return hour * 60 * 60;
}

console.log(hoursIntoSeconds(2));

// Q.3 Calculate the Perimeter of a Rectangle
function calcPerimeter(width, length) {
    return (width * 2) + (length * 2);
}

console.log(calcPerimeter(6,7));

// Q.4 Calculate the Area of a Triangle
function calcTriangleArea(base, height) {
    return (1 / 2) * base * height;
}

console.log(calcTriangleArea(10,10));

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

console.log(sumGreaterThan100(50,51));

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

console.log(calcRemainder(10,3));

// Q.11 Is the Number Odd? Then Return True
function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(12))

// Q.12 If a Number is Even, Return 1 Otherwise Return -1
function booleanInteger(num) {
    if (num % 2 ===0) {
        return 1;
    }
    return -1;
}

// function booleanInteger(num) {
//     return num % 2 === 0 ? 1 : -1;
// }

console.log(booleanInteger(3))

// Q.13 Check If A User is Logged In AND Subscribed
function isLoggedInAndSubscribed (loggedIn, Subscribed) {
    // return
    return (loggedIn === 'LOGGED_IN') && (Subscribed === 'SUBSCRIBED')

}

console.log(isLoggedInAndSubscribed('LOGGED_IN','UNSUBSCRIBED'))

// Q.14 Check If A User is Logged In AND Subscribed
function isLoggedInAndSubscribed (loggedIn, Subscribed) {
    return (loggedIn === 'LOGGED_IN') || (Subscribed === 'SUBSCRIBED')

}

console.log(isLoggedInAndSubscribed('LOGGED_IN','UNSUBSCRIBED'));

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
