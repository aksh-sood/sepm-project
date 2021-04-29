const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('logmod');

const userDetails = document.getElementById('userDetails');


const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});



///// Firestore /////

const db = firebase.firestore();

const pname = document.getElementById('namepatient');
const pgender = document.getElementById('pgender');
const time = document.getElementById('time');
const date = document.getElementById('date');
const adddata = document.getElementById('bookingbutton');

let thingsRef;
let unsubscribe;

auth.onAuthStateChanged(user => {

  
// Database Reference
    thingsRef = db.collection('patient')
    adddata.onclick = () => {

    thingsRef.add({
        PatientName: pname,
        Date: date,
        Time: time,
        Gender: pgender
        });
    }

});