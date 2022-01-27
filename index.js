
// import our restaurants 

const restaurants = require('./restaurants.json'); //bringing in list of restaurants

// import a set of tools to talk to firebase and Firestore

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app'); //using these tools from firebase admin
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// import our credentials

const credentials = require('./credentials.json'); //importing my private key

// connect to firebase services
//this is how you connect to the firebase project and saying psst this is megan with the credentials so it allows me to
initializeApp({
    credential: cert(credentials) 
})

//connect to firestore

const db = getFirestore(); //here were connecting to the database

// create a collection called "restaurants"



// add each restaurant 

db.collection('restaurants').add(restaurants[0])
.then(doc => {
    console.log('Added restaurant', doc.id);
})
.catch(err => {
    console.error(err)
});