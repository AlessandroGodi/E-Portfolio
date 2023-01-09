// // First way of accessing an element
// console.log(document.querySelector('#title'))

// // Second way of accessing an element
// console.log(document.getElementById('title'))

// function changeTitleToRed() {
//     document.querySelector(".title").style.color = 'red'
// }




// const emailRef = document.querySelector(".email");
// console.log(emailRef)

// // 1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//          emailRef.innerHTML = data.email
//     })

// // 2. Async/Await
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML = data.phone
// }

// main();




// Creating Promises
function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

console.log(getSubscriptionStatus())