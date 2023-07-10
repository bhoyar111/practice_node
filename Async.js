// const fetchData = callback => {
//     setTimeout(() => { 
//         callback('Done!');
//     }, 1500);
// }

// setTimeout(() => {
//     console.log('this timer done!');
//     fetchData(text => {
//         console.log(text);
//     })
// }, 2000);

// console.log('hello');  // syncro
// console.log('Hey')


const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve('Done!');
        }, 1500);
    })
    return promise;
};

setTimeout(() => {
    console.log('this timer done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData(); 
    })
    .then((text2) => {
         console.log(text2);
    })
}, 2000);

console.log('hello');  // syncro
console.log('Hey')