import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ASuOa6-0Bhm0Ji4kwrQkXJo2_pXlMkc",
  authDomain: "disney-clone-85115.firebaseapp.com",
  projectId: "disney-clone-85115",
  storageBucket: "disney-clone-85115.appspot.com",
  messagingSenderId: "806930250159",
  appId: "1:806930250159:web:fd36c21633bcdb55c3575a"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase services instances
const db = getFirestore(firebaseApp); // Firestore
const auth = getAuth(firebaseApp); // Authentication
const provider = new GoogleAuthProvider(); // Google Authentication Provider
const storage = getStorage(firebaseApp); // Storage

export { auth, provider, storage };
export default db;
