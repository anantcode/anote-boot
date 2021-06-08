import React from "react";
import Message from "../../components/Message/Message";

const MessageList = (props) => {
    const { messages } = props;
    const cards = messages.map((msg) => {
        return <Message message={msg} />;
    });
    return <div>{cards}</div>;
};

export default MessageList;
