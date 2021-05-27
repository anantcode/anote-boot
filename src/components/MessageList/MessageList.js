import React from "react";
import Message from "../../components/Message/Message";

const MessageList = ({ people }) => {
    const cards = people.map((user) => {
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
