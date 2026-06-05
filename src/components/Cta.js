'use client'
import React from 'react'
import { useLanguage } from './LanguageContext'
import '../styles/Cta.css'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 11.5 19.79 19.79 0 0 1 .01 2.82 2 2 0 0 1 2 .64h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.09 8.4a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

function Cta() {
  const { language } = useLanguage()
  const isGeo = language === 'geo'

  return (
    <div className="cta-container">
      <div className="cta-inner">

        <div className="cta-text-block">
          <h2 className={`cta-title ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo
              ? 'გსურთ პროფესიონალი გუნდის დახმარება?'
              : 'Looking for Professional Guidance?'}
          </h2>
          <p className={`cta-desc ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo
              ? 'თუ გსურთ უძრავი ქონების შერჩევაში დაგეხმაროთ გამოცდილი გუნდი, დაგვიკავშირდით — მზად ვართ თქვენთვის საუკეთესო გადაწყვეტილება მოვძებნოთ.'
              : 'If you would like our experienced team to help you find the right property, get in touch — we are ready to find the best solution for you.'}
          </p>
        </div>

        <div className="cta-contact-block">
          <a href="tel:+995555910910" className="cta-contact-item">
            <span className="cta-contact-icon">
              <PhoneIcon />
            </span>
            <span className="cta-contact-value eng">+995 555 91 09 10</span>
          </a>

          <a href="mailto:info@valore.ge" className="cta-contact-item">
            <span className="cta-contact-icon">
              <MailIcon />
            </span>
            <span className="cta-contact-value eng">info@valore.ge</span>
          </a>

          <a href="tel:+995555910910" className={`cta-btn ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo ? 'დაგვიკავშირდით' : 'Contact Us'}
          </a>
        </div>

      </div>
    </div>
  )
}

export default Cta