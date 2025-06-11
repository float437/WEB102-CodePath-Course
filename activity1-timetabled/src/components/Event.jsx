import React from "react";

// The event component will recieve propositions/arguments for its values 
const Event = (props) => {
    return (
        // The class name of the component part here can be changed with curlybraces {}/
        // multiple classes should be listed with spaces afterward to separate them.
        <td className={'Event ' + props.backgroundColor}>
            <h5>{props.eventName}</h5>
        </td>
    )
}

export default Event;