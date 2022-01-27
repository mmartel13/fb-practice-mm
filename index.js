// import our restaurants 

const restaurants = require('./restaurants.json'); //bringing in list of restaurants

// import a set of tools to talk to firebase and Firestore (bringing in a library)

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app'); //using these tools from firebase admin
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// import our credentials (CANNOT GO TO GITHUB)

const credentials = require('./credentials.json'); //importing my private key

// connect to fireBASE services
//this is how you connect to the firebase project and saying psst this is megan with the credentials so it allows me to
initializeApp({
    credential: cert(credentials) 
})

//connect to fireSTORE

const db = getFirestore(); //here were connecting to the database

// create a collection called "restaurants"

const restRef = db.collection('restaurants') //if you do this you now won't have to keep typing the whole statement to the right of the = sign. can just use restRef throughout. just like a variable. 

// add each restaurant (by index so run 0 first and so on and so on)

db.collection('restaurants').add(restaurants[0])
.then(doc => {
    console.log('Added restaurant', doc.id); //doc.id is whats giving us the document id
})
.catch(err => {
    console.error(err)
});

// // this is how to read one document(.doc means get me this file)
db.collection('restaurants').doc('MwAWqr8ShbWXJAze5cHU').get() //got the id number from below in terminal 
.then(doc => {
    console.log(doc.id, ' => ', doc.data()); //=> CAN ALSO BE WRITTEN AS CONTAINS OR ===> JUST A SYMBOL NOT A JAVASCRIPT SPECIAL CHARACTER HERE 
})
.catch(err => console.error(err));

//get all documents(here we need to get the folder then get the file from out of it )

db.collection('restaurants').get() // here were just getting something once(snapshot)
.then(snapshot => {
snapshot.forEach(doc => {
console.log(doc.id, ' => ', doc.data());
})
})                                     
.catch(console.error);

//find a document(s) a query will always return a collection of documents (querying a collection)

db.collection('restaurants').where('name','==','Bolay').get()  //firestore assuming it will return multiple so will return a collection wherever bolay is mentioned so loop through it 
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.data())
    });
})
.catch(console.error);