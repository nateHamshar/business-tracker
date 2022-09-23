import { useState, useEffect } from "react";
import "./Container.css"
import Content from "./Content";
import Submit from "./Submit";
import Statistics from "./Statistics";
import {initializeApp} from "firebase/app";
import {
    getFirestore, collection, addDoc, getDocs, query, 
    where, serverTimestamp, orderBy
} from 'firebase/firestore';

const Container = () => {

    // This is all of the connections to firebase and doc retrieval//
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

    const expenses = query(colRef, where("type", "==", "expense"), orderBy("createdAt", "desc"))
    const sales = query(colRef, where("type", "==", "sale"), orderBy("createdAt", "desc"))
    const overview = query(colRef, orderBy("createdAt", "desc"));

    const [filter, setFilter] = useState(overview);

    useEffect(() => {
        getDocs(filter)
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
            .then(console.log("run"))
    },[filter]);

    const addDocument = (name, type, value, description) => {
      addDoc(colRef, {
        creator: name,
        type: type,
        price: value,
        description: description,
        createdAt: serverTimestamp()
      });
      goToOverview();
    }
/* ------------------------------------------------------- */

//Below switches between the submit section and the section with the data logs //
    const [display, setDisplay] = useState(0)

    const goToSubmit = () =>{
        setDisplay(1)
    }
    const goToOverview = () => {
        setDisplay(false);
        setFilter(overview);
    }
    const goToExpenses = () => {
        setDisplay(false);
        setFilter(expenses);
    }
    const goToSales = () => {
        setDisplay(false);
        setFilter(sales);
    }
    const goToStats = () => {
        setFilter(overview);
        setDisplay(2);
    }
/* -------------------------------------------------------- */

    return (
    <div className="container">
        <div className="navigation">
            <ul className="directory">
            <li><button to="/" className="overview directoryButton" onClick={goToOverview}>Overview</button></li>
                <li><button to="/expenses" className="expenses directoryButton" onClick={goToExpenses}>Expenses</button></li>
                <li><button to="/sales" className="revenue directoryButton" onClick={goToSales}>Sales</button></li>
                <li><button to="/statistics" className="statistics directoryButton" onClick={goToStats}>Statistics</button></li>
            </ul>
            <button to="/submit" className="inputButton" onClick={goToSubmit}>Submit New Input</button>
            
        </div>
        {!display && <Content inputs={inputs} />}
        {display===1 && <Submit addDocument={addDocument} />}
        {display===2 && <Statistics inputs={inputs} />}
    </div>
    );
}
 
export default Container;