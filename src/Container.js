import "./Container.css"
import Content from "./Content";

const Container = () => {
    return (
    <div className="container">
        <div className="navigation">
            <ul className="directory">
            <li><button to="/" className="overview directoryButton">Overview</button></li>
                <li><button to="/expenses" className="expenses directoryButton">Expenses</button></li>
                <li><button to="/sales" className="revenue directoryButton">Sales</button></li>
                <li><button to="/statistics" className="statistics directoryButton">Statistics</button></li>
            </ul>
            <button to="/submit" className="inputButton">Submit New Input</button>
            
        </div>
        <Content />
    </div>
    );
}
 
export default Container;