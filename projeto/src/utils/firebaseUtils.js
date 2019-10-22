import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDX6eU5RpS2ANGZTFXCpwsI2yMgAtzg4N4",
    authDomain: "react-native-firebase-807a1.firebaseapp.com",
    databaseURL: "https://react-native-firebase-807a1.firebaseio.com",
    projectId: "react-native-firebase-807a1",
    storageBucket: "react-native-firebase-807a1.appspot.com",
    messagingSenderId: "529729039885"
};

let app = Firebase.initializeApp(config);
export const firebaseDatabase = Firebase.database();