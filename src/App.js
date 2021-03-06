import "./App.css";
import Header from "./components/Header/Header";
import SigninForm from "./components/SigninForm/SigninForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Inbox from "./components/Inbox/Inbox";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Route, Redirect, Switch } from "react-router-dom";
import Error from "./components/Error/Error";
import { useState } from "react";

function App() {
    const userDataDefault = {
        id: "",
        name: "",
        email: "",
        password: "",
    };

    const [userData, setUserData] = useState(userDataDefault);
    const [messages, setMessages] = useState([]);
    const [loggedIn, setloggedIn] = useState(false);

    const loadMessages = (data) => {
        console.log(`userId going to fetch from Inbox Component:  ${data.id}`);
        let msgs;
        fetch("http://localhost:3001/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json()) // TODO take user to inbox. TODO if 0 msgs show link and suggest to share.
            .then((res) => {
                console.log(res);
                setMessages(res);
            });
        return msgs;
    };

    const performLogout = () => {
        console.log("You are logged out!");
        setloggedIn(false);
        setUserData(userDataDefault);
    };

    return (
        <div>
            <Header />
            <Logout loggedIn={loggedIn} performLogout={performLogout} />
            <Register loggedIn={loggedIn} />
            <br />
            <Login loggedIn={loggedIn} />

            <Switch>
                <Route path="/" exact>
                    <Redirect to="/signin" />
                </Route>
                <Route path="/signin">
                    <SigninForm
                        setUserData={setUserData}
                        loadMessages={loadMessages}
                        setloggedIn={setloggedIn}
                    />
                </Route>
                <Route path="/register">
                    <RegisterForm setUserData={setUserData} />
                </Route>
                <Route path="/inbox">
                    <Inbox userData={userData} messages={messages} />
                </Route>
                <Route path="/error">
                    <Error />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
