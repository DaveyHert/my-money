import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Config credentials from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyDo3veq3bfoqx4zJK2-LDYWrpUxuW_bmPs",
  authDomain: "mymoney-138ea.firebaseapp.com",
  projectId: "mymoney-138ea",
  storageBucket: "mymoney-138ea.appspot.com",
  messagingSenderId: "420421572544",
  appId: "1:420421572544:web:b76f9785fd7e0b13401a25",
};

//   initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services to use
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// export services for use
export { projectFirestore, projectAuth };
