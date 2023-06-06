import React, { useState } from 'react';
import data from './certs.json';
import './component.css';

export const CertCards = () => {

  return (
    <div className='SectionCert'>
        <div className="CertHeader">Certificates</div>
        <div className='Certs'>
      {data.map(item => (
        <div key={item.id}>
                <a href={item.url} className={"CartCard-"+(item.id)+" CertCards"} target="_blank">
                    <p className='CertTitle'>{item.title}</p>
                    <p className='CertIssuer'>{item.issuer}</p>
                    <p className='CertDate'>{item.date}</p>
                    <p className='Verify'>Click To Verify</p>
                </a>
        </div>
      ))}
      </div>
    </div>
  );
};