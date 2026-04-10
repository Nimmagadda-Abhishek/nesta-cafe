import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-text">
          <p className="about-label">Our Story</p>
          <h2 className="about-title">Born from a love<br />of slow <em>mornings.</em></h2>
          <div className="about-body">
            <p>Nesta Café started as a sketch on a napkin — a dream of a place where the coffee is never rushed, the food is made with care, and the chairs are comfortable enough to stay a little longer than planned.</p>
            <div className="about-divider">
              <span className="about-divider-icon">❧</span>
            </div>
            <p>We source our beans directly from small farms in Coorg and Araku Valley. Every dish on our menu has a reason to be there — not to fill a page, but because we genuinely love it.</p>
          </div>
        </div>
        <div className="about-visual">
          <div className="about-offset">
            <p className="about-quote">"We didn't open a café. We opened a place we wanted to sit in every single day."</p>
            <p className="about-quote-attr">— Nesta founder</p>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .about {
          padding: 7rem 0;
          overflow: hidden;
          background: var(--cream);
        }

        .about-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 3rem;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .about-label {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green-accent);
          margin-bottom: 1.2rem;
        }

        .about-title {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          line-height: 1.18;
          color: var(--green-dark);
          margin-bottom: 1.8rem;
          letter-spacing: -0.02em;
        }

        .about-body {
          font-size: 0.97rem;
          line-height: 1.85;
          color: var(--text-mid);
          font-weight: 300;
        }

        .about-body p + p {
          margin-top: 1.2rem;
        }

        .about-divider {
          margin: 2.2rem 0;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .about-divider::before, .about-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(42,90,42,0.15);
        }

        .about-divider-icon {
          font-size: 1rem;
          color: var(--green-accent);
          font-family: var(--font-serif);
          font-style: italic;
        }

        .about-visual {
          position: relative;
        }

        .about-card {
          background: var(--green-dark);
          border-radius: 3px;
          padding: 2.5rem 2.5rem 4rem 2.5rem;
          color: var(--cream);
          position: relative;
          overflow: hidden;
        }

        .about-card::before {
          content: '';
          position: absolute;
          top: -30px;
          right: -30px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(140,196,89,0.12);
        }

        .about-card-num {
          font-family: var(--font-serif);
          font-size: 4.5rem;
          font-weight: 600;
          color: var(--green-light);
          line-height: 1;
          margin-bottom: 0.5rem;
          letter-spacing: -0.03em;
        }

        .about-card-label {
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.6);
        }

        .about-stats {
          margin-top: 1.5rem;
          display: flex;
          gap: 2rem;
          border-top: 1px solid rgba(245,240,232,0.1);
          padding-top: 1.5rem;
        }

        .about-stat-n {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--green-light);
        }

        .about-stat-l {
          font-size: 0.75rem;
          color: rgba(245,240,232,0.55);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .about-offset {
          position: relative;
          z-index: 2;
          margin-top: -3rem;
          margin-left: 2rem;
          margin-right: -1rem;
          background: var(--cream-warm);
          border: 1px solid rgba(42,90,42,0.12);
          border-radius: 3px;
          padding: 2rem;
          box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
        }

        .about-quote {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--green-dark);
        }

        .about-quote-attr {
          font-size: 0.78rem;
          color: var(--text-soft);
          margin-top: 0.8rem;
          letter-spacing: 0.04em;
        }

        @media (max-width: 992px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .about-offset {
            margin-top: 0;
            margin-left: 0;
            margin-right: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
