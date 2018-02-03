import * as firebase from 'firebase';

const config = {
    // apiKey: "AIzaSyCLuJYQ7cBre3qq_dDtHqjaEhfDGCiqfRo",
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const expenses = [
//     {
//         description: 'Rent',
//         amount: 109500,
//         note: '',
//         createdAt: 0
//     },
//     {
//         description: 'Internet',
//         amount: 7000,
//         note: 'Comcast',
//         createdAt: 1
//     },
//     {
//         description: 'Gas',
//         amount: 2500,
//         note: '',
//         createdAt: 2
//     }
// ];

// Listen for a child being removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // Listen for a child being removed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // Listen for a child to be added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//
//         console.log(expenses);
//     });
// database.ref('expenses').push(expenses[0]);


// database.ref('notes/-L4PvGTJ9cK6VfRD1ARZ').remove();

// const printData = (data) => {
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// };
//
// const unsubscribe = database.ref().on('value', (snapshot) => {
//     printData(snapshot.val());
// });

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React/Redux'
// });
// setTimeout(() => {
//     database.ref().update({
//         'job/company': 'Google',
//         'job/title': 'Senior Software Engineer'
//     });
// }, 3001);
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((error) => {
//         console.log('Error fetching data');
//     });

// database.ref().set({
//     name: 'Chad Lewis',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Associate Software Engineer',
//         company: 'BAMTech'
//     },
//     location: {
//         city: 'Point Richmond',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((error) => {
//     console.log('Data save failed with error: ' + error);
// });
//
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was successfully removed.');
//     }).catch((error) => {
//         console.log('There was a problem removing the data.');
//     });
