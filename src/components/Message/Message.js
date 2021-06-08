import React from "react";

const Message = (props) => {
    let { message } = props;

    let url = `https://picsum.photos/200/200?random=${message.length}`;

    return (
        <div className="tc bg-dark-green dib br3 pa3 ma2 bw2 shadow-5 grow">
            <img src={url} alt="background-image" />
            {/* <h3 className="white">{name}</h3> */}
            <p className="white">{message}</p>
        </div>
    );
};

export default Message;
