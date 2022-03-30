const restaurants = require('./restaurants.json'); 


const { initializeApp, applicationDefault, cert } = require('firebase-admin/app'); 
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const credentials = require('./credentials.json'); 

initializeApp({
    credential: cert(credentials) 
})

const db = getFirestore(); 

const restRef = db.collection('restaurants') 

db.collection('restaurants').add(restaurants[0])
.then(doc => {
    console.log('Added restaurant', doc.id); 
})
.catch(err => {
    console.error(err)
});


db.collection('restaurants').doc('MwAWqr8ShbWXJAze5cHU').get() 
.then(doc => {
    console.log(doc.id, ' => ', doc.data()); 
})
.catch(err => console.error(err));


db.collection('restaurants').get() 
.then(snapshot => {
snapshot.forEach(doc => {
console.log(doc.id, ' => ', doc.data());
})
})                                     
.catch(console.error);


db.collection('restaurants').where('name','==','Bolay').get()  
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.data())
    });
})
.catch(console.error);