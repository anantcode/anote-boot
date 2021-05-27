import React from "react";
import MessageList from "../../components/MessageList/MessageList";

const Inbox = (props) => {
    return (
        <div>
            <MessageList people={props.people} />
        </div>
    );
};

export default Inbox;
