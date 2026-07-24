'use client'
import React from 'react'
import { useLanguage } from './LanguageContext'
import '../styles/WhyUs.css'

const reasons = [
  {
    icon: '◈',
    eng: 'Professional Excellence',
    geo: 'პროფესიონალიზმი',
    descEng: 'Our team has in-depth knowledge of the real estate market and continuously monitors its changes. We provide professional guidance and data-driven insights to help you make safe, informed, and profitable real estate decisions.',
    descGeo: 'ჩვენი გუნდი კარგად იცნობს უძრავი ქონების ბაზარს და მუდმივად აკვირდება მის ცვლილებებს. გთავაზობთ პროფესიონალურ რჩევებსა და მონაცემებზე დაფუძნებულ გადაწყვეტილებებს, რათა არჩევანი იყოს უსაფრთხო და მომგებიანი.',
  },
  {
    icon: '◈',
    eng: 'Trusted Network',
    geo: 'სანდო პარტნიორობა',
    descEng: 'Every client is unique to Valore. At every stage of the process, we work with complete transparency, responsibility, and continuous communication to ensure you feel confident and at ease.',
    descGeo: 'Valore-სთვის ყველა კლიენტი უნიკალურია. პროცესის თითოეულ ეტაპზე ვმუშაობთ სრული გამჭვირვალობით, პასუხისმგებლობითა და მუდმივი კომუნიკაციით, რათა თქვენ თავი მშვიდად იგრძნოთ',
  },
  {
    icon: '◈',
    eng: 'Premium Service',
    geo: 'პრემიუმ სერვისი',
    descEng: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    descGeo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
]

function WhyUs() {
  const { language } = useLanguage()
  const isGeo = language === 'geo'

  return (
    <div className="whyus-container">
      <div className="whyus-content">

        {/* LEFT — title block */}
        <div className="whyus-left">
          <p className="whyus-eyebrow eng">VALORE REAL ESTATE</p>

          <h2 className={`whyus-title ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo ? 'რატომ' : 'Why'}
            <span className="whyus-title-accent"> Valore</span>
          </h2>

          <div className="whyus-divider" />

          <p className={`whyus-desc ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo
              ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'}
          </p>

          <div className="whyus-stat-row">
            <div className="whyus-stat">
              <span className="whyus-stat-num">500+</span>
              <span className={`whyus-stat-label ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? 'განხორციელებული გარიგება' : 'Deals Closed'}
              </span>
            </div>
            <div className="whyus-stat-divider" />
            <div className="whyus-stat">
              <span className="whyus-stat-num">12+</span>
              <span className={`whyus-stat-label ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? 'წლიანი გამოცდილება' : 'Years Experience'}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — reason cards */}
        <div className="whyus-right">
          {reasons.map((r, i) => (
            <div className="whyus-card" key={i}>
              <div className="whyus-card-top">
                <span className="whyus-card-num">0{i + 1}</span>
                <div className="whyus-card-line" />
              </div>
              <h3 className={`whyus-card-title ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? r.geo : r.eng}
              </h3>
              <p className={`whyus-card-desc ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? r.descGeo : r.descEng}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default WhyUs