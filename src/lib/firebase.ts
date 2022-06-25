import config from '../config/firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const app = initializeApp(config);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
