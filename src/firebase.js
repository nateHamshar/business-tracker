import {initializeApp} from "firebase/app";
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore';

const getData = () => {
const firebaseConfig = {
    apiKey: "AIzaSyD6tuE_uL6RHJ0gUluKR2Er-LEBIqU8N6A",
    authDomain: "business-tracker-bdd87.firebaseapp.com",
    projectId: "business-tracker-bdd87",
    storageBucket: "business-tracker-bdd87.appspot.com",
    messagingSenderId: "227218748661",
    appId: "1:227218748661:web:f44e7dcce0bd33856301bc"
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const colRef = collection(db, "logs" )

  getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs)
    })
}
export default getData;