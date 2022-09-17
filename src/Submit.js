import "./Submit.css";
import addDocument from "./Overview.js";

const Submit = () => {
    


    return (
        <section className="submitSection">
            <form name="submitForm" action="#" className="submitForm">
                <input type="text" className="creatorInput" placeholder="User's Name" name="nameInput" required/>
                <select name="typeInput" className="typeSelect" required>
                    <option value="type" disabled="true" default>Type of Input</option>
                    <option value="expense">expense</option>
                    <option value="sale">sale</option>
                </select>
                <input type="number" className="valueInput" required
                placeholder="Value" name="valueInput" />
                <input type="textarea" className="descriptionInput" placeholder="Description"
                name="descriptionInput" required
                />
                <button className="submitButton directoryButton" type="submit" for="submitForm" onClick={addDocument()}>Submit</button>
            </form>
        </section>
    );
}
 
export default Submit;