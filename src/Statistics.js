import { useState, useEffect } from "react";
import "./Statistics.css";

const Statistics = (props) => {
    
    const inputs = props.inputs;
    
    const [totalSales, setTotalSales] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [netProfit, setNetProfit] = useState(0);

    useEffect(() => {

        let cumExpenses = 0;
        let cumSales = 0;

        for(let i = 0; i<inputs.length; i++){
            if (inputs[i].type === "expense"){
                cumExpenses = cumExpenses + parseFloat(inputs[i].price)
            } else if (inputs[i].type === "sale"){
                cumSales = cumSales + parseFloat(inputs[i].price)
            }
        };
        setTotalExpenses(cumExpenses.toFixed(2));
        setTotalSales(cumSales.toFixed(2));
        setNetProfit((cumSales - cumExpenses).toFixed(2));

    },[inputs]);

    return (
        <section>
            <ul className="statsList">
                <li className="salesItem listItem">
                    <h1 className="salesTitle itemTitle">Total Sales: </h1>
                    <p className="salesNumber dollarValue">{totalSales}</p>
                </li>
                <li className="expensesItem listItem">
                    <h1 className="expensesTitle itemTitle">Total Expenses: </h1>
                    <p className="expensesNumber dollarValue">{totalExpenses}</p>
                </li>
                <li className="profitItem listItem">
                    <h1 className="profitTitle itemTitle">Net Profit: </h1>
                    <p className="profitNumber dollarValue">{netProfit}</p>
                </li>
            </ul>
        </section>
    );
}
 
export default Statistics;