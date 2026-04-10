import React from 'react';
import { contactData } from '../data/menuData';

const Contact = () => {
  return (
    <section id="contact-details" className="contact-section">
      <div className="contact-inner">
        <div className="contact-text">
          <p className="contact-label">Find us</p>
          <h2 className="contact-title">Come in, stay<br />a while.</h2>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24"><path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0114 0c0 3.5-3 7-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
              </div>
              <div className="contact-item-body">
                <p className="contact-item-label">Address</p>
                <p className="contact-item-val">{contactData.address}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.88 19.79 19.79 0 01.1 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" /></svg>
              </div>
              <div className="contact-item-body">
                <p className="contact-item-label">Phone</p>
                <p className="contact-item-val">{contactData.phone}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <div className="contact-item-body">
                <p className="contact-item-label">Email</p>
                <p className="contact-item-val">{contactData.email}</p>
              </div>
            </div>
          </div>
          <div className="contact-hours">
            <p className="contact-hours-title">Opening Hours</p>
            <div className="hours-row"><span>Monday – Sunday</span><span>11:00 am – 11:00 pm</span></div>
          </div>
        </div>
        <div>
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.778589410955!2d78.64602227493553!3d17.42241008347077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f0068464a39%3A0xee02de86260568e!2sNESTA%20CAFE!5e0!3m2!1sen!2sin!4v1775847446419!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .contact-section {
          padding: 7rem 3rem;
          background: var(--cream);
        }

        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 6rem;
          align-items: start;
        }

        .contact-label {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green-accent);
          margin-bottom: 0.8rem;
        }

        .contact-title {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--green-dark);
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2.5rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
        }

        .contact-item-icon {
          width: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-item-icon svg {
          width: 16px;
          height: 16px;
          stroke: var(--green-accent);
          fill: none;
          stroke-width: 1.5;
        }

        .contact-item-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-soft);
          margin-bottom: 2px;
        }

        .contact-item-val {
          font-size: 0.92rem;
          color: var(--text-dark);
          line-height: 1.5;
        }

        .contact-hours {
          margin-top: 2rem;
          padding: 1.4rem;
          background: rgba(42,90,42,0.05);
          border-radius: 2px;
          border: 1px solid rgba(42,90,42,0.1);
        }

        .contact-hours-title {
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--green-accent);
          margin-bottom: 0.9rem;
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-mid);
          padding: 0.3rem 0;
        }

        .hours-row:not(:last-child) {
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .contact-map {
          background: var(--green-dark);
          border-radius: 2px;
          overflow: hidden;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .map-inner { text-align: center; color: rgba(245,240,232,0.5); }
        .map-pin { width: 28px; height: 28px; stroke: var(--green-light); fill: none; stroke-width: 1.5; margin: 0 auto 0.8rem; display: block; }
        .map-text { font-size: 0.8rem; letter-spacing: 0.06em; text-transform: uppercase; }
        .map-sub { font-size: 0.75rem; color: rgba(245,240,232,0.3); margin-top: 0.3rem; font-style: italic; font-family: var(--font-serif); }

        .map-grid-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(rgba(140,196,89,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(140,196,89,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @media (max-width: 850px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
