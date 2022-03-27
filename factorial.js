// function factorial (n){
//     let ans = 1;
//     for (var i = 1; i<=n; i++){
//         ans = ans * i;
//     }
//     return ans;
// }
// console.log(factorial(4));


// let factorial = n => {
//     let f = 1;
//     while (n >= 1) {
//         f = f * n;
//         n = n - 1;
//     }
//     return f;
// }
// let ans = 4;

// console.log(factorial(ans));


let factorial = (n)=> {
    let ans = 1;
    for (var i = 1; i<=n; i++){
        ans = ans * i;
    }
    return ans;
}
console.log(factorial(4));