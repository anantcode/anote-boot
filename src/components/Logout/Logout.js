import { Link } from "react-router-dom";

const Logout = (props) => {
    const { loggedIn, performLogout } = props;

    if (loggedIn) {
        return (
            <Link to="/signin">
                <p onClick={performLogout}>Log Out</p>
            </Link>
        );
    }
    return "";
};

export default Logout;
