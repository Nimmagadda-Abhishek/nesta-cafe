import React from 'react';
import COFFEE from '../assets/01.jpg'
import CHICKEN from '../assets/02.jpg'
import PASTA from '../assets/03.jpg'
import SANDWICH from '../assets/04.jpg'
import BROWNIE from '../assets/05.jpg'
import SHAKSHUKA from '../assets/06.jpg'
import THICKSHAKE from '../assets/07.jpg'

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <div className="gallery-title-group">
          <p className="gallery-label">Life at Nesta</p>
          <h2 className="gallery-title">A few moments.</h2>
        </div>
      </div>
      <div className="gallery-masonry">
        <div className="gallery-item gc1">
          <img src={COFFEE} alt="Nesta Coffee" className="gallery-img" />
          <div className="gallery-caption"><span>Where moments come alive.</span></div>
        </div>
        <div className="gallery-item gc2">
          <img src={CHICKEN} alt="Jamaican Chicken" className="gallery-img" />
          <div className="gallery-caption"><span>Depth in every detail.</span></div>
        </div>
        <div className="gallery-item gc3">
          <img src={PASTA} alt="Delicious Pasta" className="gallery-img" />
          <div className="gallery-caption"><span>Flavors that speak first.</span></div>
        </div>
        <div className="gallery-item gc4">
          <img src={SANDWICH} alt="Nesta Sandwich" className="gallery-img" />
          <div className="gallery-caption"><span>Soft tones, strong taste</span></div>
        </div>
        <div className="gallery-item gc5">
          <img src={BROWNIE} alt="Dessert Brownie" className="gallery-img" />
          <div className="gallery-caption"><span>Subtle. Clean. Timeless.</span></div>
        </div>
        <div className="gallery-item gc6">
          <img src={SHAKSHUKA} alt="Nesta Breakfast" className="gallery-img" />
          <div className="gallery-caption"><span>Plated to perfection</span></div>
        </div>
        <div className="gallery-item gc7">
          <img src={THICKSHAKE} alt="Nesta Thickshake" className="gallery-img" />
          <div className="gallery-caption"><span>Good vibes and great company.</span></div>
        </div>
      </div>

      <style jsx="true">{`
        .gallery-section {
          padding: 7rem 3rem;
          background: var(--cream);
        }

        .gallery-header {
          max-width: 1100px;
          margin: 0 auto 3rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .gallery-label {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green-accent);
          margin-bottom: 0.6rem;
        }

        .gallery-title {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--green-dark);
        }

        .gallery-masonry {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto;
          gap: 0.9rem;
        }

        .gallery-item {
          border-radius: 2px;
          overflow: hidden;
          position: relative;
          background: var(--green-dark);
          height: 100%;
        }

        .gallery-item:nth-child(1) { grid-row: span 2; }
        .gallery-item:nth-child(4) { grid-row: span 2; }
        .gallery-item:nth-child(6) { grid-column: span 2; }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
          filter: brightness(0.9);
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.05);
          filter: brightness(1);
        }

        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          color: var(--cream);
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 0.85rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .gallery-item:hover .gallery-caption {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .gallery-masonry {
            grid-template-columns: repeat(2, 1fr);
          }
          .gallery-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .gallery-item:nth-child(1), .gallery-item:nth-child(4) {
            grid-row: span 1;
          }
          .gallery-item:nth-child(6) {
            grid-column: span 1;
          }
          .gallery-img {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
