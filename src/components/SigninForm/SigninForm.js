import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const appStyle = {
    height: "250px",
    display: "flex",
};

const formStyle = {
    margin: "auto",
    padding: "10px",
    border: "1px solid #c9c9c9",
    borderRadius: "5px",
    background: "#f5f5f5",
    width: "220px",
    display: "block",
};

const headingStyle = {
    margin: "auto",
};

const labelStyle = {
    margin: "10px 0 5px 0",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "15px",
};

const inputStyle = {
    margin: "5px 0 10px 0",
    padding: "5px",
    border: "1px solid #bfbfbf",
    borderRadius: "3px",
    boxSizing: "border-box",
    width: "100%",
};

const submitStyle = {
    margin: "10px 0 0 0",
    padding: "7px 10px",
    border: "1px solid #efffff",
    borderRadius: "3px",
    background: "#3085d6",
    width: "100%",
    fontSize: "15px",
    color: "white",
    display: "block",
};

const Field = React.forwardRef(({ label, type }, ref) => {
    return (
        <div>
            <label style={labelStyle}>{label}</label>
            <input ref={ref} type={type} style={inputStyle} />
        </div>
    );
});

const Form = ({ onSubmit }) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };
        onSubmit(data);
    };
    return (
        <div style={headingStyle}>
            <h3>Sign In</h3>
            <form style={formStyle} onSubmit={handleSubmit}>
                <Field ref={usernameRef} label="Username:" type="text" />
                <Field ref={passwordRef} label="Password:" type="password" />
                <div>
                    <button style={submitStyle} type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

// Usage example:

const SigninForm = (props) => {
    const history = useHistory();
    let { setUserData, loadMessages } = props;

    const handleSubmit = (data) => {
        console.clear();
        console.log(`Going to send data to signin: ${JSON.stringify(data)}`);
        let userData;

        //TODO make service call
        fetch("http://localhost:3001/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                userData = res;
                // TODO take user to inbox. TODO if 0 msgs show link and suggest to share.
                if (userData.id) {
                    setUserData(userData);
                    loadMessages({ userId: userData.id });
                    history.push("/inbox");
                } else {
                    history.push("/error");
                }
            });
    };

    return (
        <div style={appStyle}>
            <Form onSubmit={handleSubmit} />
        </div>
    );
};

export default SigninForm;
