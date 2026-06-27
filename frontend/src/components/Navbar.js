 import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ darkMode, setDarkMode, search, setSearch }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const value = search.toLowerCase().trim();

      switch (value) {
        case "mern":
        case "mern stack guide":
          navigate("/post/1");
          break;

        case "react":
        case "react tutorial":
          navigate("/post/2");
          break;

        case "javascript":
        case "javascript basics":
          navigate("/post/3");
          break;

        default:
          alert("No blog found!");
      }
    }
  };

  return (
    <nav className="navbar">

      <div className="logo">
        📝 Blog Platform
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      <div className="right-section">

        <div className="search-box">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div className="avatar">
          👤
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;