const hobbies = ['Cricket', 'Yoga', 'Kabaddi'];
// for( let hobby of hobbies) {
//     console.log(hobby);
// }
// o/p [ 'Cricket', 'Yoga', 'Kabaddi' ]

// console.log(hobbies.map((hobby => {
//     return 'My Hobby: ' + hobby;
// })));
// o/p [ 'My Hobby: Cricket', 'My Hobby: Yoga', 'My Hobby: Kabaddi' ]

// console.log(hobbies.map(hobby => 'My Hobby: ' + hobby 
// ));
// o/p [ 'My Hobby: Cricket', 'My Hobby: Yoga', 'My Hobby: Kabaddi' ]

// hobbies.push('Kho Kho');
// console.log(hobbies);
// o/p [ 'Cricket', 'Yoga', 'Kabaddi', 'Kho Kho' ]

const copyArray = hobbies.slice();
console.log(copyArray);
// o/p [ 'Cricket', 'Yoga', 'Kabaddi' ]
