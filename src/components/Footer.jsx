import React from 'react';
import { contactData } from '../data/menuData';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <p className="footer-logo">Nesta Café</p>
          <p>A café for people who believe good coffee deserves good company.</p>
        </div>
        <div>
          <p className="footer-col-title">Navigate</p>
          <ul className="footer-links">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Follow along</p>
          <ul className="footer-links">
            <li><a href={`https://www.instagram.com/nestacafehyd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`}>Instagram</a></li>
            <li><a href="https://www.zomato.com/hyderabad/nesta-cafe-restro-ghatkesar-secunderabad">Zomato</a></li>
            <li><a href="https://maps.app.goo.gl/wLaxCd3ha2XNzbhT6">Google Maps</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>© 2026 Nesta Café. All rights reserved.</p>
      </div>

      <style jsx="true">{`
        footer {
          background: var(--text-dark);
          padding: 3rem;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 3rem;
        }

        .footer-brand .footer-logo {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          color: var(--cream);
          letter-spacing: -0.02em;
          margin-bottom: 0.8rem;
        }

        .footer-brand p {
          font-size: 0.82rem;
          color: rgba(245,240,232,0.4);
          line-height: 1.7;
          max-width: 260px;
        }

        .footer-col-title {
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.4);
          margin-bottom: 1.2rem;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-links a {
          font-size: 0.85rem;
          color: rgba(245,240,232,0.65);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--cream);
        }

        .footer-bottom {
          background: var(--text-dark);
          border-top: 1px solid rgba(245,240,232,0.08);
          padding: 1.2rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom p {
          font-size: 0.75rem;
          color: rgba(245,240,232,0.3);
        }

        @media (max-width: 768px) {
          footer {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
