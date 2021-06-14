import React from "react";
import MessageList from "../../components/MessageList/MessageList";

const Inbox = (props) => {
    const { userData, messages } = props;
    console.log(messages);

    return (
        <div>
            <div>Welcome, {userData.name}</div>
            <MessageList messages={messages} />
        </div>
    );
};

export default Inbox;
