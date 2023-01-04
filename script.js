
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