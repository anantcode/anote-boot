import "./App.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
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
        // const filteredPeople = this.state.people.filter((item) => {
        //     return item.name.toLowerCase().includes("a");
        // });

        const filteredPeople = this.state.people;

        return (
            <main>
                {/* <Navbar /> */}
                <Header />
                <Switch>
                    <Route path="/" component={LoginForm} exact />
                    {/* <Route path="/about" component={About} /> */}
                    <Route path="/login" component={LoginForm} />
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
