// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD0XAjXKyp_MINrtPGnFXCIS1NgFuwiwnw',
	authDomain: 'house-marketplace-app-99734.firebaseapp.com',
	projectId: 'house-marketplace-app-99734',
	storageBucket: 'house-marketplace-app-99734.appspot.com',
	messagingSenderId: '57502051579',
	appId: '1:57502051579:web:24a30ed9bc6a378832545e'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
