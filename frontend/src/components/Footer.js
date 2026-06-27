 import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>📝 Blog Platform</h2>

        <p>
          Share your ideas. Inspire the world.
        </p>

        <div className="footer-links">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://YOUR_PORTFOLIO.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>

        </div>

        <p className="copyright">
          © 2026 Blog Platform | Built with ❤️ using React
        </p>

      </div>

    </footer>
  );
}

export default Footer;