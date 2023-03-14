// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDm8lO9l8d8XUayj-dOgVPtjsAwYRpZ5cM",
    authDomain: "auth-form-5ea4a.firebaseapp.com",
    projectId: "auth-form-5ea4a",
    storageBucket: "auth-form-5ea4a.appspot.com",
    messagingSenderId: "607068770244",
    appId: "1:607068770244:web:3cc6f0f5787a572c4e9e91"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// sign up function

const signup = (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    console.log(email, password);

    // firebase code...
    firebase.auth().createUserWithEmailAndPassword(email, password)

        .then((result) => {
            window.location.assign("sign-in.html")
            console.log(result);
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}


// sign in function

const signin = (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            document.write("you are Logged  In ! ")
            // window.location.assign("index.html")
          


        })
        .catch((error) => {
            
            alert(error.message)
        });
}
