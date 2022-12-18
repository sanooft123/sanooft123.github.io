const firebaseConfig = {
    apiKey: "AIzaSyBEIcMFeB9_q8jYCMd4L4KOqzEXxVeVl1s",
    authDomain: "mullakantakath-69cdb.firebaseapp.com",
    projectId: "mullakantakath-69cdb",
    storageBucket: "mullakantakath-69cdb.appspot.com",
    messagingSenderId: "599191502634",
    appId: "1:599191502634:web:b76620bfc08ba4af0be853",
    measurementId: "G-67WTJWRZ63"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = firebase.firestore("");