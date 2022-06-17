
import getData from "./firebase";

const Expenses = () => {
    
    const test = getData();
    
    const getArray = (snapshot) => {
        let logs = []
        console.log(snapshot.forEach(doc => {
            logs.push(doc.metadata)
        }))
        }
    getArray(test);

    return (
        <section>
                <ul className="inputLog">
                    <li className="inputCreator">Creator:</li>
                    <li className="inputType">Type of Input:</li>
                    <li className="inputType">Dollar Value:</li>
                    <li className="inputType">Description:</li>
                </ul>
        </section>
    );
}
 
export default Expenses;