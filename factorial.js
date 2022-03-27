// function factorial (n){
//     let ans = 1;
//     for (var i = 1; i<=n; i++){
//         ans = ans * i;
//     }
//     return ans;
// }
// console.log(factorial(4));


let factorial = (n)=> {
    let ans = 1;
    for (var i = 1; i<=n; i++){
        ans = ans * i;
    }
    return ans;
}
console.log(factorial(4));