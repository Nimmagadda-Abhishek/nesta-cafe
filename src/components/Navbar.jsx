import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">Nesta Café</div>
      <ul className="nav-links">
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <style jsx="true">{`
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 3rem;
          background: var(--cream);
          border-bottom: 1px solid rgba(42,90,42,0.12);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-logo {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          color: var(--green-dark);
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          font-size: 0.85rem;
          color: var(--text-mid);
          text-decoration: none;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-weight: 400;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--green-dark);
        }

        .nav-cta {
          background: var(--green-dark);
          color: var(--cream);
          font-size: 0.82rem;
          padding: 0.55rem 1.3rem;
          border-radius: 2px;
          text-decoration: none;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: background 0.2s;
        }

        .nav-cta:hover {
          background: var(--green-mid);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          padding: 1rem 1.5rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
