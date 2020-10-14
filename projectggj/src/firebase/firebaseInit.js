import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA0LXZku-juARK93kzZt1O2ktKJUvTkkdE',
	authDomain: 'dragon-ball-project-ggj.firebaseapp.com',
	databaseURL: 'https://dragon-ball-project-ggj.firebaseio.com',
	projectId: 'dragon-ball-project-ggj',
	storageBucket: 'dragon-ball-project-ggj.appspot.com',
	messagingSenderId: '289598953593',
	appId: '1:289598953593:web:0244db3cf6c51486ca9ca8',
	measurementId: 'G-GDCMW11WXC'
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
