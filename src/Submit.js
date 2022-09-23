import "./Submit.css";

const Submit = (props) => {
    const addDocument = props.addDocument;
    return (
        <section className="submitSection">
            <form name="submitForm" action="#" className="submitForm">
                <input type="text" className="creatorInput" placeholder="User's Name" id="nameInput" required/>
                <select id="typeInput" className="typeSelect" required>
                    <option value="type" disabled default>Type of Input</option>
                    <option value="expense">expense</option>
                    <option value="sale">sale</option>
                </select>
                <input type="number" step=".01" className="valueInput" required
                placeholder="Value" id="valueInput" />
                <input type="textarea" className="descriptionInput" placeholder="Description"
                id="descriptionInput" required
                />
                <button className="submitButton directoryButton" onClick={() => addDocument(
                    document.getElementById("nameInput").value,
                    document.getElementById("typeInput").value,
                    document.getElementById("valueInput").value,
                    document.getElementById("descriptionInput").value
                )}>Submit</button>
            </form>
        </section>
    );
}

export default Submit;