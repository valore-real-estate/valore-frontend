'use client'
import Link from 'next/link'
import React from 'react'
import { useLanguage } from './LanguageContext'
import '../styles/Landing.css'

const logo = '/pictures/valore-logo2.png'

function Landing() {
  const { language } = useLanguage()
  const isGeo = language === 'geo'

  return (
    <div className="landing-container">
      <div className="landing-content">

        {/* LOGO */}
        <div className="landing-logo">
  <img src={logo} alt="Valore Real Estate" className="landing-logo-img" />
</div>
       
        {/* HEADLINE */}
        <div className="landing-headline">
          <p className={`headline-sub ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo
              ? 'ჩვენ ვქმნით ღირებულებას თითოეული თქვენგანისთვის'
              : 'We create value for you every step of the way'}
          </p>
          <p className={`headline-desc ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo
              ? 'პროფესიონალური მომსახურება უძრავი ქონების ყიდვა-გაყიდვასა და გაქირავებაში.'
              : 'Professional services in real estate sales, purchases, and rentals.'}
          </p>
        </div>

        {/* BUTTONS */}
      <div className="landing-buttons">
  <Link href="/listing" className={`btn btn-solid ${isGeo ? 'geo' : 'eng'}`}>
    {isGeo ? 'უძრავი ქონების ძებნა' : 'Find Property'}
  </Link>
  <a href="tel:+995555910910" className={`btn btn-outline ${isGeo ? 'geo' : 'eng'}`}>
    {isGeo ? 'დაგვიკავშირდით' : 'Contact Us'}
  </a>
</div>

      </div>
    </div>
  )
}

export default Landing