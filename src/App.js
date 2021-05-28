import "./App.css";
import Header from "./components/Header/Header";
import SigninForm from "./components/SigninForm/SigninForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Inbox from "./components/Inbox/Inbox";
import { Route, Switch } from "react-router-dom";
import Error from "./components/Error/Error";
import { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            people: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => this.setState({ people: users }));
    }

    render() {
        const filteredPeople = this.state.people;
        return (
            <main>
                {/* <Navbar /> */}
                <Header />
                <Switch>
                    <Route path="/" component={SigninForm} exact />
                    <Route path="/signin" component={SigninForm} exact />
                    <Route path="/register" component={RegisterForm} exact />

                    <Route
                        path="/inbox"
                        render={(props) => (
                            <Inbox {...props} people={filteredPeople} />
                        )}
                    />
                    <Route component={Error} />
                </Switch>
            </main>
        );
    }
}

export default App;
