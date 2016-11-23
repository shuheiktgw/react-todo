/**
 * Created by kitagawa-shuhei on 2016/11/22.
 */

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBFV248Jy57goHpHuSIJUNIUF6Xl7j7B34",
    authDomain: "mead-todo-app-31f33.firebaseapp.com",
    databaseURL: "https://mead-todo-app-31f33.firebaseio.com",
    storageBucket: "mead-todo-app-31f33.appspot.com",
    messagingSenderId: "42139997202"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0,0'
    },
    isRunning: true,
    user: {
        name: 'Shuhei',
        age: 25
    },
});

const todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
    todo: 'take some courses'
});

todosRef.push({
    todo: 'eat something'
});






