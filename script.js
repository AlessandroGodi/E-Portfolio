// for (let i = 1; i <= 20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} -> Frontend Simplfied`)
//     }
//     else if (i % 3 === 0) {
//          console.log(`${i} -> Frontend`) /* NEED `...` when using ${} */
//      }
//     else if (i % 5 === 0) {
//         console.log(`${i} -> Simplified`)
//     }
//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }

// const str = "Frontend Simplified"

// for (let i = 0; i <= str.length; ++i) {
//     console.log(str[i])
// }



// Function definition
function welcomePersonToFES (name) {
    // console.log("welcome to FES, DAVID") Back ticks used when ${} in code
    console.log(`Welcome to Fes, ${name}`) 
}

// Call the function
welcomePersonToFES ('David');
welcomePersonToFES ('Zen');
welcomePersonToFES ('Metri');