import { Outlet, Link } from "react-router-dom";
import "./stylesheet/navigation.css"

function Navigation() {
    return (
    <>
        <nav>
            <div>
                <h1 className="Logo">Pustaka by Andra Fauzi</h1>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/panel">Panel Book</Link>
                </li>
                <li>
                    <Link to="/search">Search Book</Link>
                </li>
            </ul>
        </nav>
        <hr className="stripline"></hr>
        <Outlet />
    </>
    );
}

export default Navigation;