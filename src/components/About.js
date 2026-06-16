'use client'
import React from 'react'
import { useLanguage } from './LanguageContext'
import '../styles/About.css'

function About() {
  const { language } = useLanguage()
  const isGeo = language === 'geo'
  const lang = isGeo ? 'geo' : 'eng'

  const content = {
    geo: {
      heroLabel: 'ჩვენ შესახებ',
      heroTitle: 'ჩვენ შესახებ',
      heroDesc: 'Valore არის თანამედროვე უძრავი ქონების სააგენტო, რომელიც ქმნის ღირებულებას თითოეული კლიენტისთვის.',
      missionLabel: 'ჩვენი მისია',
      missionText: 'კომპანია სთავაზობს მომხმარებლებს პროფესიონალურ მომსახურეობას საცხოვრებელი და საინვესტიციო უძრავი ქონების ყიდვა-გაყიდვასა და გაქირავებაში.',
      teamLabel: 'გუნდი',
      teamDesc: 'გამოცდილი და ერთგული პროფესიონალები',
      founders: [
        { name: 'ლაშა გოგუაძე', nameEng: 'Lasha Goguadze', role: 'თანადამფუძნებელი', photo: '/pictures/lasha.jpg' },
        { name: 'ანუკა ანთია',   nameEng: 'Anuka Antia',    role: 'თანადამფუძნებელი', photo: '/pictures/anuka.jpg' },
      ],
      valuesLabel: 'ჩვენი ღირებულებები',
      values: [
        { title: 'სანდოობა',        desc: 'გამჭვირვალე და პატიოსანი ურთიერთობა ყველა კლიენტთან.' },
        { title: 'პროფესიონალიზმი', desc: 'მაღალი სტანდარტი მომსახურებისა და შედეგის მიღწევის გზაზე.' },
        { title: 'ღირებულება',      desc: 'ყველა გადაწყვეტილება ორიენტირებულია კლიენტის ინტერესზე.' },
      ],
      memberText: 'Valore Real Estate საქართველოს უძრავი ქონების ეროვნული ასოციაციის წევრია, რაც პროფესიონალიზმისა და სანდოობის კიდევ ერთი დასტურია.'
    },
    eng: {
      heroLabel: 'About Us',
      heroTitle: 'About Us',
      heroDesc: 'Valore is a modern real estate agency that creates value for every client.',
      missionLabel: 'Our Mission',
      missionText: 'We offer professional services in the purchase, sale, and rental of residential and investment real estate — built on trust, expertise, and a genuine commitment to our clients.',
      teamLabel: 'Our Team',
      teamDesc: 'Experienced and dedicated professionals',
      founders: [
        { name: 'Lasha Goguadze', nameEng: 'Lasha Goguadze', role: 'Co-Founder', photo: '/pictures/lasha.jpg' },
        { name: 'Anuka Antia',    nameEng: 'Anuka Antia',    role: 'Co-Founder', photo: '/pictures/anuka.jpg' },
      ],
      valuesLabel: 'Our Values',
      values: [
        { title: 'Trust',           desc: 'Transparent and honest relationships with every client.' },
        { title: 'Professionalism', desc: 'High standards in service delivery and achieving results.' },
        { title: 'Value',           desc: "Every decision is centred around the client's best interest." },
      ],
      memberText: 'Valore Real Estate is a member of the National Association of Real Estate of Georgia, a further testament to our professionalism and trustworthiness.'
    },
  }

  const t = content[lang]

  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className={`about-hero-label ${lang}`}>{t.heroLabel}</span>
          <h1 className={`about-hero-title ${lang}`}>{t.heroTitle}</h1>
          <p className={`about-hero-desc ${lang}`}>{t.heroDesc}</p>
        </div>
        <div className="about-hero-deco" aria-hidden="true">
          <div className="about-hero-circle c1" />
          <div className="about-hero-circle c2" />
          <div className="about-hero-circle c3" />
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="about-mission">
        <div className="about-mission-inner">
          <div className="about-mission-tag-row">
            <span className="about-mission-line-deco" />
            <span className={`about-mission-label ${lang}`}>{t.missionLabel}</span>
            <span className="about-mission-line-deco" />
          </div>
          <blockquote className={`about-mission-quote ${lang}`}>
            {t.missionText}
          </blockquote>
          <div className="about-mission-ornament" aria-hidden="true">
            <span /><span /><span />
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP ── */}
<section className="about-member-section">
  <div className="about-member-inner">
    <div className="about-member-icon" aria-hidden="true">✦</div>
    <p className={`about-member-text ${lang}`}>{t.memberText}</p>
  </div>
</section>

      {/* ── TEAM ── */}
      <section className="about-team-section">
        <div className="about-section-inner">
          <div className="about-team-header">
            <span className={`about-section-label ${lang}`}>{t.teamLabel}</span>
            <div className="about-section-line" />
            <p className={`about-team-desc ${lang}`}>{t.teamDesc}</p>
          </div>
          <div className="about-team-grid">
            {t.founders.map((f, i) => (
              <div className="about-founder-card" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="about-founder-photo-wrap">
                  <img
                    src={f.photo}
                    alt={f.name}
                    className="about-founder-photo"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="about-founder-photo-fallback">
                    <span>{f.nameEng.split(' ').map(w => w[0]).join('')}</span>
                  </div>
                </div>
                <h3 className={`about-founder-name ${lang}`}>{f.name}</h3>
                <span className={`about-founder-role ${lang}`}>{f.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-values-section">
        <div className="about-values-inner">
          <div className="about-values-header">
            <span className={`about-section-label light ${lang}`}>{t.valuesLabel}</span>
            <div className="about-section-line light" />
          </div>
          <div className="about-values-grid">
            {t.values.map((v, i) => (
              <div className="about-value-card" key={i}>
                <span className="about-value-number eng">0{i + 1}</span>
                <h3 className={`about-value-title ${lang}`}>{v.title}</h3>
                <p className={`about-value-desc ${lang}`}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About