import React, { useState } from 'react';
import data from './jobs.json';
import './component.css';
import './XPCards.css';

export const XPCards = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleLogoClick = id => {
    setExpandedCardId(prevId => (prevId === id ? null : id));
  };

  return (
    // add aria labels using the key.id's as to which order to tab through
    <div>
      <div className="XPCardsTitle">Professional Experience</div>
    <div className="XPCards">
      {data.map(item => (
        <div key={item.id} className={"JobCard-"+(item.id)+" JobCard"} onClick={() => handleLogoClick(item.id)} onKeyDown={e => {
          if (e.key === " " || e.key === "Spacebar") {
            // Prevent the default action to avoid scrolling the page
            e.preventDefault();
            handleLogoClick(item.id);
          }
        }} tabIndex={item.tabIndex}>
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