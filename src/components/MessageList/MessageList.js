import React from "react";
import Message from "../../components/Message/Message";

const MessageList = ({ messages }) => {
    const cards = messages.map((user) => {
        return (
            <Message
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
            />
        );
    });
    return <div>{cards}</div>;
};

export default MessageList;
