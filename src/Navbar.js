import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="header">Business Tracker</h1>
            <ul className="page-list">
                <li>
                    <button hidden className="signIn navButton">Sign In</button>
                </li>
                <li>
                    <button hidden className="signOut navButton">Sign Out</button>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;