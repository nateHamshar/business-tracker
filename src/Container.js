import { useState } from "react";
import "./Container.css"
import Content from "./Content";
import Submit from "./Submit";

const Container = () => {

    const [display, setDisplay] = useState(false)

    const goToSubmit = () =>{
        setDisplay(true)
    }
    const goToLogs = () => {
        setDisplay(false)
    }
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
        {!display && <Content />}
        {display && <Submit />}
    </div>
    );
}
 
export default Container;