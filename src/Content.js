import "./Content.css";
import Overview from "./Overview";
import Sales from "./Sales";
import Statistics from "./Statistics";
import Expenses from "./Expenses";


const Content = () => {


 return (
    <div className="content">
      <div className="media">
            <Overview />
            <Expenses />
            <Sales />
            <Statistics />
        </div> 
       
    </div>
);
}
 
export default Content;