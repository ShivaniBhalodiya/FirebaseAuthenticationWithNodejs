const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

// Add Firebase SDK Snippet
// const firebaseConfig = {
//   apiKey: "AIzaSyCRKJAvIUz-TfUkSzmBOCIuBSTFZ_zbIoM",
//   authDomain: "authenticationwithfireba-59cb2.firebaseapp.com",
//   databaseURL: "https://authenticationwithfireba-59cb2-default-rtdb.firebaseio.com",
//   projectId: "authenticationwithfireba-59cb2",
//   storageBucket: "authenticationwithfireba-59cb2.appspot.com",
//   messagingSenderId: "1048889381318",
//   appId: "1:1048889381318:web:c39a4ec4add6166278a2c7"
    
    
//   }
const firebaseConfig = {
  apiKey: "AIzaSyCTNKup1SKz7oORKKF34A10n9tkOanzZrc",
  authDomain: "fir-blog-app-d6482.firebaseapp.com",
  databaseURL: "https://fir-blog-app-d6482-default-rtdb.firebaseio.com",
  projectId: "fir-blog-app-d6482",
  storageBucket: "fir-blog-app-d6482.appspot.com",
  messagingSenderId: "664678664662",
  appId: "1:664678664662:web:452f02056bb0fae2397c77",
  measurementId: "G-P5CLWGJNQP"
};
const firebaseapp = firebase.initializeApp(firebaseConfig);

module.exports = firebaseapp;
