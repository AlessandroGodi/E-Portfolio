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




// map array changing the values of original array

let dollars = [1, 5, 10, 3]

let cents = dollars.map((element) => {
    return element * 100
})

console.log(cents)

// map array without using map function 
let dollars = [1, 3, 5, 10]

let cents = []

for(let i = 0; i <dollars.length; ++i) {
    cents.push(dollars[i] * 100);
}

console.log(cents)




// logging user into an application

let users = [
    {
        username: "David",
        email: "david@frontendsimplified.com",
        password: 'test234',
        subscriptionStatus: "VIP",
        discordId: "David Big Boy",
        lessonsCompleted: [0, 1],
    }
]

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            console.log(users[i]);
            if (users[i].password === password) {
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect - try again')
            }
            return;
        }
    }
    console.log('could not find an email that exists')
}

login('david@frontendsimplified.com', 'test234')