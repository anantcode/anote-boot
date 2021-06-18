import { Link } from "react-router-dom";

const Register = (props) => {
    const { loggedIn } = props;

    if (!loggedIn) {
        return <Link to="/register">Sign Up</Link>;
    }
    return "";
};

export default Register;
