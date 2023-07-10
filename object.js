// const employees = {
//     name    : "Akash",
//     age     : 25,
//     address : "Nagpur",
//     greet   : function() {
//         console.log("Hello, I am " + this.name);
//     }
// }
// employees.greet();
// o/p I am Akash

const employees = {
    name    : "Akash",
    age     : 25,
    address : "Nagpur",
    greet() {
        console.log("Hello, I am " + this.name);
    }
}
employees.greet();
// o/p I am Akash

// const employees = {
//     name    : "Akash",
//     age     : 25,
//     address : "Nagpur",
//     greet   : () => {
//         console.log("Hello, I am " + this.name);
//     }
// }
// employees.greet();
// o/p I am undefined
