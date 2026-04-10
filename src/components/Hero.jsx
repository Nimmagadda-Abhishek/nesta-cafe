import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-tag">Est. 2019 · Hyderabad</p>
        <h1 className="hero-title">Where every<br />cup has a<br /><em>story.</em></h1>
        <p className="hero-sub">A quiet corner for good coffee, honest food, and the kind of conversations you don't want to end.</p>
        <div className="hero-actions">
          <a href="#menu" className="btn-primary">View Menu</a>
          <a href="#about" className="btn-ghost">Our story →</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-placeholder">

          <p className="hero-img-caption">"A place that smells like<br />mornings well spent."</p>
        </div>
      </div>

      <style jsx="true">{`
        .hero {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          min-height: 78vh;
          max-height: 820px;
          overflow: hidden;
        }

        .hero-text {
          background: var(--cream-warm);
          padding: 5rem 4rem 4rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .hero-tag {
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green-accent);
          margin-bottom: 1.4rem;
          font-weight: 400;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-size: 3.6rem;
          line-height: 1.08;
          color: var(--green-dark);
          font-weight: 600;
          margin-bottom: 1.6rem;
          letter-spacing: -0.025em;
        }

        .hero-sub {
          font-size: 0.97rem;
          line-height: 1.75;
          color: var(--text-mid);
          max-width: 340px;
          margin-bottom: 2.4rem;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .hero-image {
          position: relative;
          overflow: hidden;
        }

        .hero-img-placeholder {
          width: 100%;
          height: 100%;
          min-height: 520px;
          background: linear-gradient(160deg, #2d5a1a 0%, #1a3d0e 40%, #4a7a2a 100%);
          display: flex;
          align-items: flex-end;
          padding: 2.5rem;
          position: relative;
        }

        .hero-img-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at 30% 60%, rgba(140,180,80,0.18) 0%, transparent 70%);
        }

        .hero-img-caption {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1rem;
          color: rgba(245,240,232,0.7);
          line-height: 1.5;
          z-index: 1;
        }

        .hero-year {
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-size: 0.72rem;
          color: rgba(245,240,232,0.5);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .hero-text {
            padding: 3rem 1.5rem;
          }
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
