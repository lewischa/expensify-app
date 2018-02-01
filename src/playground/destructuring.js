// Object Destructuring

// const person = {
//     name: 'Chad',
//     age: 25,
//     location: {
//         city: 'Point Richmond',
//         temp: 45
//     }
// };
//
//
//
// const { name = 'Anonymous', age } = person;
//
// console.log(`${name} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
//
// // if (person.location.city && person.location.temp) {
//     // console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// // }
//
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

// Array Destructuring

const address = ['503 Canal Bldvd', 'Point Richmond', 'California', '99999'];

const [ , city, state, ] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [ coffee, , mediumPrice ] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}.`);
