
const Overview = (props) => {

  const inputs = props.inputs
    return(
      <section>
          {inputs.map((input) => (
            <ul className="inputLog" key={input.id}>
                <li className="inputCreator">Creator: {input.creator} </li>
                <li className="inputType">Type: {input.type}</li>
                <li className="inputType">Value ($): {input.price}</li>
                <li className="inputType">Description: {input.description}</li>
            </ul>
          ))}
      </section>
    )
}
export default Overview;