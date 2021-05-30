import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyDGh8D3a4sn_B2szRloPFJehre2-GM4yAk',
	authDomain: 'slack-clone-yt-3fe26.firebaseapp.com',
	projectId: 'slack-clone-yt-3fe26',
	storageBucket: 'slack-clone-yt-3fe26.appspot.com',
	messagingSenderId: '172925426597',
	appId: '1:172925426597:web:8058fdc4ad590e71c0664c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};
