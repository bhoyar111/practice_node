const employees = {
    name    : "Akash",
    age     : 25,
    address : "Nagpur",
    greet() {
        console.log("Hello, I am " + this.name);
    }
}

// const employeeFun = (employeeData) => {
//     console.log(employeeData.name)

// }
// employeeFun(employees);
// o/p Akash

// const employees = {
//     name    : "Akash",
//     age     : 25,
//     address : "Nagpur",
//     greet() {
//         console.log("Hello, I am " + this.name);
//     }
// }

// const employeeFun = ({name, age}) => {  // Destructuring method
//     console.log(name, age)

// }
// employeeFun(employees);
// o/p Akash, 25

// const { name, age } = employees;   // Destructuring method
// console.log(name, age);
// o/p Akash, 25

const hobbies = ['Cricket', 'Yoga', 'Kabaddi'];
const [ ho1, ho2, ho3, ho4 ] = hobbies;
console.log(ho1, ho2, ho3);
// o/p Cricket Yoga Kabaddi
