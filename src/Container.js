import { useState } from "react";
import "./Container.css"
import Content from "./Content";
import Submit from "./Submit";

import {initializeApp} from "firebase/app";
import {
    getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore';

const Container = () => {

    // This is all of the logs and connections to firebase //
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
      ///////////////////////////////////////////////////

    const addDocument = (name, type, value, description) => {
      addDoc(colRef, {
        creator: name,
        type: type,
        price: value,
        description: description
      })
    }
/* ------------------------------------------------------- */

//Below switches between the submit section and the section with the data logs //
    const [display, setDisplay] = useState(false)

    const goToSubmit = () =>{
        setDisplay(true)
    }
    const goToLogs = () => {
        setDisplay(false)
    }
/* -------------------------------------------------------- */

    return (
    <div className="container">
        <div className="navigation">
            <ul className="directory">
            <li><button to="/" className="overview directoryButton" onClick={goToLogs}>Overview</button></li>
                <li><button to="/expenses" className="expenses directoryButton" onClick={goToLogs}>Expenses</button></li>
                <li><button to="/sales" className="revenue directoryButton" onClick={goToLogs}>Sales</button></li>
                <li><button to="/statistics" className="statistics directoryButton" onClick={goToLogs}>Statistics</button></li>
            </ul>
            <button to="/submit" className="inputButton" onClick={goToSubmit}>Submit New Input</button>
            
        </div>
        {!display && <Content inputs={inputs} />}
        {display && <Submit inputs={inputs} addDocument={addDocument} />}
    </div>
    );
}
 
export default Container;