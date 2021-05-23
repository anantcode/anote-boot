import "./App.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Inbox from "./components/Inbox/Inbox";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <main>
            {/* <Navbar /> */}
            <Header />
            <Switch>
                <Route path="/" component={LoginForm} exact />
                {/* <Route path="/about" component={About} /> */}
                <Route path="/login" component={LoginForm} />
                <Route path="/inbox" component={Inbox} />
                <Route component={Error} />
            </Switch>
        </main>
    );
}

export default App;
