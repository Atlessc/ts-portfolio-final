import React, { useState } from 'react';
import data from './jobs.json';
import '../styles/component.css';
import '../styles/XPCards.css';

export const XPCards = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleLogoClick = id => {
    setExpandedCardId(prevId => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className="XPCardsTitle">Professional Experience</div>
      <div className="XPCards">
        {data.slice().reverse().map((item, index) => (
          <div key={item.id} className={"JobCard-"+(item.name)+" JobCard"} onClick={() => handleLogoClick(item.id)} onKeyDown={e => {
            if (e.key === " " || e.key === "Spacebar") {
              e.preventDefault();
              handleLogoClick(item.id);
            }
          }} tabIndex={data.length + 6 - index}>
            <img src={item.logo} alt={item.company}  />
            {expandedCardId === item.id && (
              <div className='description'>
                <p className='company'>{item.company}</p>
                <p>{item.title}</p>
                <p>{item.date}</p>
                <ul className='duties'>
                  {item.duties.map((duty, index) => (
                    <li key={index}>{duty}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
