import React, { useState } from 'react';
import { menuData } from '../data/menuData';

const MenuSection = () => {
  const categories = menuData.map(c => c.category);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeItems = menuData.find(c => c.category === activeCategory).items;

  return (
    <section id="menu" className="menu-section">
      <div className="menu-header">
        <p className="menu-label">What we serve</p>
        <h2 className="menu-title">The Menu</h2>
      </div>

      <div className="menu-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-container">
        <div className="menu-card" key={activeCategory}>
          <div className="menu-card-bg"></div>
          <p className="menu-card-cat">{activeCategory}</p>
          <div className="items-grid">
            {activeItems.map((item, idx) => (
              <div key={idx} className="menu-item">
                <div className="menu-item-left">
                  <p className="menu-item-name">{item.name}</p>
                  {item.description && <p className="menu-item-desc">{item.description}</p>}
                </div>
                <div className="menu-item-price">
                  {item.prices ? (
                    <div className="price-multi">
                      <span>S: ₹{item.prices.small}</span>
                      <span>M: ₹{item.prices.medium}</span>
                    </div>
                  ) : (
                    <span>₹{item.price}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="menu-note">All prices inclusive of taxes · Seasonal specials change weekly · Ask your server for today's special.</p>

      <style jsx="true">{`
        .menu-section {
          background: var(--green-dark);
          padding: 7rem 3rem;
        }

        .menu-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .menu-label {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green-light);
          margin-bottom: 1rem;
        }

        .menu-title {
          font-family: var(--font-serif);
          font-size: 2.6rem;
          color: var(--cream);
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .menu-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 4rem;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .tab-btn {
          background: rgba(245, 240, 232, 0.05);
          border: 1px solid rgba(245, 240, 232, 0.1);
          color: var(--cream);
          padding: 0.6rem 1.2rem;
          border-radius: 2px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: var(--transition);
        }

        .tab-btn:hover, .tab-btn.active {
          background: var(--green-light);
          color: var(--green-dark);
          border-color: var(--green-light);
        }

        .menu-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .menu-card {
          background: rgba(245, 240, 232, 0.05);
          border: 1px solid rgba(245, 240, 232, 0.1);
          border-radius: 2px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .menu-card-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(245, 240, 232, 0.015) 28px, rgba(245, 240, 232, 0.015) 29px);
        }

        .menu-card-cat {
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--green-light);
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(245, 240, 232, 0.1);
          text-align: center;
        }

        .items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 4rem;
        }

        .menu-item {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0.8rem 0;
          border-bottom: 1px dotted rgba(245, 240, 232, 0.08);
        }

        .menu-item:last-child {
          border-bottom: none;
        }

        .menu-item-name {
          font-size: 0.95rem;
          color: var(--cream);
          font-weight: 400;
        }

        .menu-item-desc {
          font-size: 0.76rem;
          color: rgba(245, 240, 232, 0.45);
          margin-top: 2px;
          font-style: italic;
        }

        .menu-item-price {
          font-family: var(--font-serif);
          font-size: 0.92rem;
          color: var(--green-light);
          white-space: nowrap;
          margin-left: 1rem;
          text-align: right;
        }

        .price-multi {
          display: flex;
          gap: 1rem;
          font-size: 0.85rem;
        }

        .menu-note {
          max-width: 1100px;
          margin: 2rem auto 0;
          text-align: center;
          font-size: 0.78rem;
          color: rgba(245, 240, 232, 0.35);
          font-style: italic;
          letter-spacing: 0.03em;
        }

        @media (max-width: 900px) {
          .items-grid {
            grid-template-columns: 1fr;
          }
          .menu-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MenuSection;
