import React from "react";
import MessageList from "../../components/MessageList/MessageList";

const Inbox = (props) => {
    return (
        <div>
            <MessageList messages={props.messages} />
        </div>
    );
};

export default Inbox;
