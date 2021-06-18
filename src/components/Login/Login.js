import { Link } from "react-router-dom";

const Login = (props) => {
    const { loggedIn } = props;

    if (!loggedIn) {
        return <Link to="/signin">Log In</Link>;
    }
    return "";
};

export default Login;
