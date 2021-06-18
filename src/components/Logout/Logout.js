import { Link } from "react-router-dom";

const Logout = (props) => {
    const { logout, performLogout } = props;

    if (logout) {
        return "";
    }

    return (
        <Link to="/signin">
            <p onClick={performLogout}>Log Out</p>
        </Link>
    );
};

export default Logout;
