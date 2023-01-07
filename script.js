for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplfied`)
    }
    else if (i % 3 === 0) {
         console.log(`${i} -> Frontend`) /* NEED `...` when using ${} */
     }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
}

const str = "Frontend Simplified"

for (let i = 0; i <= str.length; ++i) {
    console.log(str[i])
}



// Function definition
function welcomePersonToFES (name) {
    // console.log("welcome to FES, DAVID") Back ticks used when ${} in code
    console.log(`Welcome to Fes, ${name}`) 
}

// Call the function
welcomePersonToFES ('David');
welcomePersonToFES ('Zen');
welcomePersonToFES ('Metri');

function CelsiusToFahrenheit (Celsius) {
    // let fahrenheit = Celsius * 1.8 + 32 Not necesary to have `let fahrenheit`
    return Celsius * 1.8 + 32
}

console.log(CelsiusToFahrenheit(10))

let arr = [20, 30, 40, 50, 100]

console.log(arr);

arr.push(200)

console.log(arr);

let arr = [20, 30, 40, 50, 100]

let newArr = arr.filter((element) => {
    console.log(element)
    return true;
})

console.log(newArr)

// returns (5) [20, 30, 40, 50, 100]



let arr = [20, 30, 40, 50, 100]

let newArr = arr.filter((element) => {
    console.log(element)
    if (element < 50) {
        return true;
    }
})

console.log(newArr)

// returns (3) [20, 30, 40]




let arr = [20, 30, 40, 50, 100]

let newArr = arr.filter((element) => element < 50)

console.log(newArr)

// returns (3) [20, 30, 40]