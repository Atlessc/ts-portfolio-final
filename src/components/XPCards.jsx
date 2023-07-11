import React, { useState } from 'react';
import data from './jobs.json';
import './component.css';
import ReactGA from 'react-ga'

export const XPCards = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleLogoClick = id => {
    setExpandedCardId(prevId => (prevId === id ? null : id));
    ReactGA.event({
      category: 'User',
      action: 'Clicked on a job logo',
      label: data.company
    });
  };

  return (
    <div>
      <div className="XPCardsTitle">Professional Experience</div>
    <div className="XPCards">
      {data.map(item => (
        <div key={item.id} className={"JobCard-"+(item.id)+" JobCard"}>
          <img src={item.logo} alt={item.company} onClick={() => handleLogoClick(item.id)} />
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