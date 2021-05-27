import React from "react";

const Message = (props) => {
    let { name, email, id } = props;

    //   let url = `https://robohash.org/${id}.png?size=200x200`;
    //   let url = `https://api.adorable.io/avatars/200/${props.email}.png`;

    let url = `https://picsum.photos/200/200?random=${id}`;
    //   let url = `https://loremflickr.com/200/200/sunset,city/all?random=${id}`;
    //   let url = `https://source.unsplash.com/200x200/?nature,beach`;

    return (
        <div className="tc bg-dark-green dib br3 pa3 ma2 bw2 shadow-5 grow">
            <img src={url} alt="person-image" />
            <h3 className="white">{name}</h3>
            <p className="white">{email}</p>
        </div>
    );
};

export default Message;
