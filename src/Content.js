import "./Content.css";
import Overview from "./Overview";
// import Sales from "./Sales";
// import Statistics from "./Statistics";
// import Expenses from "./Expenses";


const Content = (props) => {

const inputs = props.inputs;

 return (
    <div className="content">
        <div className="media">
            <Overview inputs={inputs} />
        </div> 
       
    </div>
);
}
 
export default Content;