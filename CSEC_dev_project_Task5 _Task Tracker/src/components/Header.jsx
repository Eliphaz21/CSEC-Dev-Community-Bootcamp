import { NavLink } from "react-router-dom";
import { useTasks } from "../store/taskContext";

const Header = () => {
    const { darkMode, setDarkMode } = useTasks();

    return (
        <header className="navbar">
            <h1 className="logo">TaskTracker</h1>

            <nav className="nav-links">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/stats">
                    Stats
                </NavLink>
            </nav>

            <button
                className="theme-btn"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
        </header>
    );
};

export default Header;
