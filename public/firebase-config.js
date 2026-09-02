import firebase from "firebase/app";
import "firebase/compat/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	apiKey: "AIzaSyBL1pdJip7hCq-VZMKfizYMyspFLRgdHkk",
	authDomain: "geo-quiz-7ad38.firebaseapp.com",
	databaseURL: "https://geo-quiz-7ad38-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "geo-quiz-7ad38",
	storageBucket: "geo-quiz-7ad38.firebasestorage.app",
	messagingSenderId: "395928209564",
	appId: "1:395928209564:web:f2a865c5652d1ad1a50559"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);