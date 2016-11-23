/**
 * Created by kitagawa-shuhei on 2016/11/23.
 */
import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyBFV248Jy57goHpHuSIJUNIUF6Xl7j7B34",
        authDomain: "mead-todo-app-31f33.firebaseapp.com",
        databaseURL: "https://mead-todo-app-31f33.firebaseio.com",
        storageBucket: "mead-todo-app-31f33.appspot.com",
        messagingSenderId: "42139997202"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase