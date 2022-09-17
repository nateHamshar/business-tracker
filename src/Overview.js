import {initializeApp} from "firebase/app";
import {
    getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore';
import { useState } from "react";


const Overview = () => {
  const [inputs, setInputs] = useState([])
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
          let logs = []
          snapshot.docs.forEach((doc) => {
            logs.push({...doc.data(), id: doc.id})
          })
          setInputs(logs);
          }
          )
        .catch(err => {
          console.log(err.message)
        })
        ;
      const addDocument = (name, type, value, description) => {
        addDoc(colRef, {
          creator: name,
          type: type,
          price: value,
          description: description
        })
      }
    return(
      <section>
          {inputs.map((input) => (
            <ul className="inputLog" key={input.id}>
                <li className="inputCreator">Creator: {input.creator} </li>
                <li className="inputType">Type: {input.type}</li>
                <li className="inputType">Value ($): {input.price}</li>
                <li className="inputType">Description: {input.description}</li>
            </ul>
          ))}
      </section>
    )
}
export function addDocument();
export default Overview;