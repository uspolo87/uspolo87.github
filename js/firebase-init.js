    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCjOPK6CyVfDAPO_512d43T9S6sIXHVrmI",
        authDomain: "cable-launch-test-project.firebaseapp.com",
        databaseURL: "https://cable-launch-test-project.firebaseio.com",
        projectId: "cable-launch-test-project",
        storageBucket: "cable-launch-test-project.appspot.com",
        messagingSenderId: "270278220532",
        appId: "1:270278220532:web:6eeb345f53d678dac41ca1",
        measurementId: "G-9GRSG52KLG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var auth = firebase.auth();
    var db = firebase.firestore();