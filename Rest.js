// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3]
// }

// console.log(toArray(2, 5, 8));
// o/p [ 2, 5, 8 ]

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3]
// }

// console.log(toArray(2, 5, 8, 4));  // 4th arg not showing
// o/p [ 2, 5, 8 ] 

const toArray = (...arg) => {   // by using rest operator
    return arg
}

console.log(toArray(2, 5, 8, 4)); 
// o/p [ 2, 5, 8, 4 ] 