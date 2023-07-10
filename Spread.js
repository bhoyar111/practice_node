// const employees = {
//     name    : "Akash",
//     age     : 25,
//     address : "Nagpur",
// }
// const newObject = {employees} 
// console.log(newObject)
// o/p { employees: { name: 'Akash', age: 25, address: 'Nagpur' } }

const employees = {
    name    : "Akash",
    age     : 25,
    address : "Nagpur",
}
const newObject = {...employees}  // By using spread operater

console.log(newObject)
// o/p employees: { name: 'Akash', age: 25, address: 'Nagpur' }


// const hobbies = ['Cricket', 'Yoga', 'Kabaddi'];
// const copyArray = [hobbies]; // Nestest array create
// console.log(copyArray);
// o/p [[ 'Cricket', 'Yoga', 'Kabaddi' ]]

// const hobbies = ['Cricket', 'Yoga', 'Kabaddi'];   // Using spread operator(...)
// const copyArray = [...hobbies];
// console.log(copyArray);
// o/p [ 'Cricket', 'Yoga', 'Kabaddi' ]