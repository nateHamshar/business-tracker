import "./Content.css"

const Content = () => {
 return (
    <div className="content">
        <div className="navigation">
            <ul className="directory">
            <li><button className="overview directoryButton">Overview</button></li>
                <li><button className="expenses directoryButton">Expenses</button></li>
                <li><button className="revenue directoryButton">Sales</button></li>
                <li><button className="statistics directoryButton">Statistics</button></li>
            </ul>
            <button className="inputButton">Submit New Input</button>
        </div>
        
        <div className="media">
            <div>
            <ul className="inputLog">
                <li className="inputCreator">Creator:</li>
                <li className="inputType">Type of Input:</li>
                <li className="inputType">Dollar Value:</li>
                <li className="inputType">Description:</li>
            </ul>
            </div>
        </div>
    </div>
);
}
 
export default Content;