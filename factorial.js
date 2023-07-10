const factorialFun = (x) => {
    if(x === 0) {
        return 1;
    }
    return x * factorialFun(x- 1);
}
console.log(factorialFun(5))