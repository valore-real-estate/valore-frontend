'use client'
import React from 'react'
import { useLanguage } from './LanguageContext'
import '../styles/Landing.css'

function Landing() {
  const { language } = useLanguage()
  const isGeo = language === 'geo'

  return (
    <div className="landing-container">
      <div className="landing-content">

        {/* LOGO */}
        <div className="landing-logo">
          <div className="landing-logo-inner">
            <div className="logo-top-line" />
            <span className="logo-wordmark">VALORE</span>
            <div className="logo-subtitle-row">
              <div className="logo-dash" />
              <span className="logo-tagword">REAL ESTATE</span>
              <div className="logo-dash" />
            </div>
            <div className="logo-bottom-line" />
          </div>
        </div>

        {/* HEADLINE */}
        <div className="landing-headline">
          <p className={`headline-sub ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo
              ? 'ჩვენ ვქმნით ღირებულებას თითოეული კლიენტისთვის'
              : 'We create value for every client'}
          </p>
          <p className={`headline-desc ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo
              ? 'პროფესიონალური მომსახურება უძრავი ქონების ყიდვა-გაყიდვასა და გაქირავებაში.'
              : 'Professional services in real estate sales, purchases, and rentals.'}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="landing-buttons">
          <button className={`btn btn-solid ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo ? 'უძრავი ქონების ძებნა' : 'Find Property'}
          </button>
          <button className={`btn btn-outline ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo ? 'დაგვიკავშირდით' : 'Contact Us'}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Landing