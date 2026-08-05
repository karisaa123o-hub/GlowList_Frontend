import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <Link to="/" className="navabr-brand">GlowList</Link>
            <button className="btn btn-denger">Logout</button>
        </nav>
    );
}