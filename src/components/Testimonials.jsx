import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="test-inner">
        <p className="test-label">What guests say</p>
        <h2 className="test-title">The part we don't write ourselves.</h2>
        <div className="test-grid">
          <div className="test-card featured">
            <p className="test-quote">"Had a great experience here! This place has plenty of seating capacity, so even during busy hours it should be comfortable and spacious. The food was amazing — everything was fresh, flavorful, and well-presented. Definitely the only spot in the area offering such a unique and diverse menu, which makes it stand out. Highly recommend visiting if you’re nearby!"</p>
            <p className="test-author"><strong>Nishath Gujjula.</strong></p>
          </div>
          <div className="test-card">
            <p className="test-quote">"Good food and ambience. Very nice place in the area ( jadimetla, narapally) both working class and students can eat here. They get burgers , pizzas, pasta, continental, sizzlers and many more.
              They have wifi and good seating.
              Owner Mr. Nikhil is very kind and have a vision. I highly recomend this place"</p>
            <p className="test-author"><strong>Abhilash Kommu.</strong></p>
          </div>
          <div className="test-card">
            <p className="test-quote">"Recently i visited nesta cafe, i enjoy the food budget friendly. I like entire menu my most favourite is pasta, sandwich, thick shake, jamaican chicken is best try item and brownie .Best hangout place with friends . I love the ambience…eagerly waiting to visit this place again …"</p>
            <p className="test-author"><strong>Harshitha Garre.</strong></p>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .testimonials {
          padding: 6rem 3rem;
          background: var(--cream-warm);
        }

        .test-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .test-label {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green-accent);
          margin-bottom: 0.8rem;
        }

        .test-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--green-dark);
          margin-bottom: 3.5rem;
        }

        .test-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 2rem;
        }

        .test-card {
          padding: 2rem;
          border-left: 2px solid rgba(42,90,42,0.15);
        }

        .test-card.featured {
          border-left-color: var(--green-accent);
          background: rgba(255,255,255,0.6);
          padding: 2rem 2rem 2rem 1.8rem;
        }

        .test-quote {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-dark);
          font-style: italic;
          margin-bottom: 1.2rem;
        }

        .test-card:not(.featured) .test-quote {
          font-size: 0.95rem;
        }

        .test-author {
          font-size: 0.78rem;
          color: var(--text-soft);
          letter-spacing: 0.04em;
        }

        .test-author strong {
          color: var(--text-mid);
          font-weight: 500;
          display: block;
          margin-bottom: 2px;
        }

        @media (max-width: 992px) {
          .test-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
