import React from 'react';

const Marquee = () => {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-inner">
        <span>Freshly Brewed Everyday</span><span className="dot">·</span>
        <span>Hyderabad's Favourite Corner</span><span className="dot">·</span>
        <span>Farm to Table Ingredients</span><span className="dot">·</span>
        <span>All Day Breakfast</span><span className="dot">·</span>
        <span>Specialty Coffee</span><span className="dot">·</span>
        <span>Freshly Brewed Everyday</span><span className="dot">·</span>
        <span>Hyderabad's Favourite Corner</span><span className="dot">·</span>
        <span>Farm to Table Ingredients</span><span className="dot">·</span>
        <span>All Day Breakfast</span><span className="dot">·</span>
        <span>Specialty Coffee</span><span className="dot">·</span>
      </div>

      <style jsx="true">{`
        .marquee-strip {
          background: var(--green-dark);
          padding: 0.85rem 0;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-inner {
          display: inline-block;
          animation: scrollLeft 22s linear infinite;
        }

        .marquee-inner span {
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.65);
          margin: 0 2.5rem;
        }

        .marquee-inner .dot {
          color: var(--green-light);
        }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
