import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="header">Business Tracker</h1>
            <ul className="page-list">
                <li>
                    <button className="signIn">Sign In</button>
                </li>
                <li>
                    <button className="signOut">Sign Out</button>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;