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
    descEng: 'We approach each project with individual attention and provide a service that combines quality, efficiency, and professionalism.',
    descGeo: 'თითოეულ პროექტს ინდივიდუალური ყურადღებით ვუდგებით და გთავაზობთ მომსახურებას, რომელიც აერთიანებს ხარისხს, სისწრაფესა და პროფესიონალიზმს.',
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
              ? 'ჩვენი სერვისები დაფუძნებულია ნდობაზე, პროფესიონალიზმსა და მაღალი ხარისხის მომსახურებაზე.'
              : 'Our services are built on trust, expertise, and a commitment to providing exceptional experiences for every client.'}
          </p>

          <div className="whyus-stat-row">
            <div className="whyus-stat">
              <span className="whyus-stat-num">24/7</span>
              <span className={`whyus-stat-label ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? 'მუდმივი მხარდაჭერა' : 'Customer support'}
              </span>
            </div>
            <div className="whyus-stat-divider" />
            <div className="whyus-stat">
              <span className="whyus-stat-num">100%</span>
              <span className={`whyus-stat-label ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? 'ზრუნვა თითოეულ გადაწყვეტილებაზე' : 'Client Care'}
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