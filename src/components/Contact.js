'use client'
import React from 'react'
import { useLanguage } from './LanguageContext'
import '../styles/Contact.css'

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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

function Contact() {
  const { language } = useLanguage()
  const isGeo = language === 'geo'
  const lang = isGeo ? 'geo' : 'eng'

  const content = {
    geo: {
      heroLabel: 'კონტაქტი',
      heroTitle: 'დაგვიკავშირდით',
      heroDesc: 'ჩვენი გუნდი მზადაა დაგეხმაროთ უძრავი ქონების ნებისმიერ საკითხში. დაუკავშირდით ჩვენ - პასუხს სწრაფად მოგცემთ.',
      cardTitle: 'საკონტაქტო ინფორმაცია',
      cardDesc: 'მოგვწერეთ ან დაგვიკავშირდით პირდაპირ',
      phone: 'ტელეფონი',
      email: 'ელ. ფოსტა',
      whatsapp: 'WhatsApp',
      location: 'მისამართი',
      locationVal: 'თბილისი, საქართველო',
      social: 'სოციალური მედია',
      workingHours: 'სამუშაო საათები',
      weekdays: 'ორშ - პარ: 10:00 - 19:00',
      weekend: 'შაბ: 11:00 - 17:00',
    },
    eng: {
      heroLabel: 'Contact',
      heroTitle: 'Get In Touch',
      heroDesc: "Our team is ready to assist you with any real estate matter. Reach out and we'll get back to you promptly.",
      cardTitle: 'Contact Information',
      cardDesc: 'Write to us or get in touch directly',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Location',
      locationVal: 'Tbilisi, Georgia',
      social: 'Follow Us',
      workingHours: 'Working Hours',
      weekdays: 'Mon - Fri: 10:00 - 19:00',
      weekend: 'Sat: 11:00 - 17:00',
    },
  }

  const t = content[lang]

  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className={`contact-hero-label ${lang}`}>{t.heroLabel}</span>
          <h1 className={`contact-hero-title ${lang}`}>{t.heroTitle}</h1>
          <p className={`contact-hero-desc ${lang}`}>{t.heroDesc}</p>
        </div>
        <div className="contact-hero-deco" aria-hidden="true">
          <div className="contact-hero-circle c1" />
          <div className="contact-hero-circle c2" />
          <div className="contact-hero-circle c3" />
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="contact-main">
        <div className="contact-main-centered">

          <div className="contact-info-card contact-info-card--wide">
            <div className="contact-info-card-header">
              <h2 className={`contact-info-card-title ${lang}`}>{t.cardTitle}</h2>
              <p className={`contact-info-card-desc ${lang}`}>{t.cardDesc}</p>
            </div>

            <div className="contact-info-divider" />

            {/* ── Contact items 2x2 grid ── */}
            <div className="contact-info-grid">
              <a href="tel:+995555910910" className="contact-info-item">
                <span className="contact-info-icon"><PhoneIcon /></span>
                <div className="contact-info-item-text">
                  <span className={`contact-info-item-label ${lang}`}>{t.phone}</span>
                  <span className="contact-info-item-value eng">+995 555 91 09 10</span>
                </div>
              </a>

              <a href="mailto:info@valore.ge" className="contact-info-item">
                <span className="contact-info-icon"><MailIcon /></span>
                <div className="contact-info-item-text">
                  <span className={`contact-info-item-label ${lang}`}>{t.email}</span>
                  <span className="contact-info-item-value eng">info@valore.ge</span>
                </div>
              </a>

              <a href="https://wa.me/995555910910" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <span className="contact-info-icon"><WhatsAppIcon /></span>
                <div className="contact-info-item-text">
                  <span className={`contact-info-item-label ${lang}`}>{t.whatsapp}</span>
                  <span className="contact-info-item-value eng">+995 555 91 09 10</span>
                </div>
              </a>

              <div className="contact-info-item no-link">
                <span className="contact-info-icon"><LocationIcon /></span>
                <div className="contact-info-item-text">
                  <span className={`contact-info-item-label ${lang}`}>{t.location}</span>
                  <span className={`contact-info-item-value ${lang}`}>{t.locationVal}</span>
                </div>
              </div>
            </div>

            <div className="contact-info-divider" />

            {/* ── Hours + Social ── */}
            <div className="contact-bottom-row">
              <div className="contact-hours">
                <span className={`contact-hours-title ${lang}`}>{t.workingHours}</span>
                <span className={`contact-hours-row ${lang}`}>{t.weekdays}</span>
                <span className={`contact-hours-row ${lang}`}>{t.weekend}</span>
              </div>

              <div className="contact-social-block">
                <span className={`contact-social-title ${lang}`}>{t.social}</span>
                <div className="contact-social-row">
                  <a href="https://www.instagram.com/valore.realestate/" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61573236344507" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="https://www.tiktok.com/@valore.realestate" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="TikTok">
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact