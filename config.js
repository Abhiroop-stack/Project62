 import firebase from 'firebase';
 
 var firebaseConfig = {
    apiKey: "AIzaSyDsrvct51wPqHyVI9-OstI6zoWAmVf_DNc",
    authDomain: "school-attendence-cfafd.firebaseapp.com",
    projectId: "school-attendence-cfafd",
    storageBucket: "school-attendence-cfafd.appspot.com",
    messagingSenderId: "393509357178",
    appId: "1:393509357178:web:d5621781da2ea444905dc3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();