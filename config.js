 import  firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCxRZWZXU7E3oyTYohlpou7VCPy0lXvEXY",
  authDomain: "school-wor.firebaseapp.com",
  databaseURL: "https://school-wor-default-rtdb.firebaseio.com",
  projectId: "school-wor",
  storageBucket: "school-wor.appspot.com",
  messagingSenderId: "469838182730",
  appId: "1:469838182730:web:a953b0cf7a873c352129b3",
  measurementId: "G-C2KM9XR635"
};
firebase.initializeApp(firebaseConfig);
export default firebase.database();

 

  