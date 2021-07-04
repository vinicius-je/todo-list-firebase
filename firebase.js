var firebaseConfig = {
    apiKey: "AIzaSyDgKdh5i5dgsxElD-2-60GUYDCouT_O9Ww",
    authDomain: "todolist-5d13a.firebaseapp.com",
    projectId: "todolist-5d13a",
    storageBucket: "todolist-5d13a.appspot.com",
    messagingSenderId: "635869773975",
    appId: "1:635869773975:web:4d27a8f63d3004b16c29d2",
    measurementId: "G-8PKSN4KJ4J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

// data base name from firebase
const TODO = "todoList";
// user uid
let user = "dZXEhCrrDANmXsPErKDEb65RZKR2"

let docRef = db.collection(TODO).doc(user)