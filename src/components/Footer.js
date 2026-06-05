'use client'
import React from 'react'
import { useLanguage } from './LanguageContext'
import '../styles/Footer.css'

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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 11.5 19.79 19.79 0 0 1 .01 2.82 2 2 0 0 1 2 .64h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.09 8.4a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const navLinks = {
  geo: [
    { label: 'მთავარი',       href: '/' },
    { label: 'უძრავი ქონება', href: '/properties' },
    { label: 'ჩვენს შესახებ', href: '/about' },
    { label: 'კონტაქტი',      href: '/contact' },
  ],
  eng: [
    { label: 'Home',          href: '/' },
    { label: 'Real Estate',   href: '/properties' },
    { label: 'About Us',      href: '/about' },
    { label: 'Contact',       href: '/contact' },
  ],
}

function Footer() {
  const { language } = useLanguage()
  const isGeo = language === 'geo'
  const lang  = isGeo ? 'geo' : 'eng'
  const links = navLinks[lang]

  return (
    <footer className="footer">

      {/* ── top shimmer line ── */}
      <div className="footer-top-line" />

      <div className="footer-inner">

        {/* ── COL 1 — Brand ── */}
        <div className="footer-col footer-brand">
          <div className="footer-logo-wrap">
            <div className="footer-logo-lines footer-logo-line-top" />
            <span className="footer-wordmark">VALORE</span>
            <div className="footer-logo-lines footer-logo-line-bottom" />
            <div className="footer-logo-sub-row">
              <span className="footer-logo-dash" />
              <span className="footer-tagword">REAL ESTATE</span>
              <span className="footer-logo-dash" />
            </div>
          </div>
          <p className={`footer-brand-desc ${lang}`}>
            {isGeo
              ? 'პროფესიონალური უძრავი ქონების სერვისი — ვპოულობთ საუკეთესო გადაწყვეტილებას თქვენთვის.'
              : 'Professional real estate services — finding the best solution tailored for you.'}
          </p>
        </div>

        {/* ── COL 2 — Nav ── */}
        <div className="footer-col">
          <h4 className={`footer-col-title ${lang}`}>
            {isGeo ? 'ნავიგაცია' : 'Navigation'}
          </h4>
          <div className="footer-col-divider" />
          <ul className="footer-nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`footer-nav-link ${lang}`}>
                  <span className="footer-nav-arrow">›</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COL 3 — Contact ── */}
        <div className="footer-col">
          <h4 className={`footer-col-title ${lang}`}>
            {isGeo ? 'კონტაქტი' : 'Contact'}
          </h4>
          <div className="footer-col-divider" />
          <ul className="footer-contact-list">
            <li>
              <a href="tel:+995555910910" className="footer-contact-item">
                <span className="footer-contact-icon"><PhoneIcon /></span>
                <span className="footer-contact-text eng">+995 555 91 09 10</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@valore.ge" className="footer-contact-item">
                <span className="footer-contact-icon"><MailIcon /></span>
                <span className="footer-contact-text eng">info@valore.ge</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/995555910910"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon"><WhatsAppIcon /></span>
                <span className={`footer-contact-text ${lang}`}>
                  {isGeo ? 'WhatsApp' : 'WhatsApp'}
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* ── COL 4 — Social ── */}
        <div className="footer-col">
          <h4 className={`footer-col-title ${lang}`}>
            {isGeo ? 'სოციალური მედია' : 'Follow Us'}
          </h4>
          <div className="footer-col-divider" />
          <div className="footer-social-list">
            <a
              href="https://www.instagram.com/valore.realestate/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
              aria-label="Instagram"
            >
              <span className="footer-social-icon"><InstagramIcon /></span>
              <span className="footer-social-label eng">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573236344507"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
              aria-label="Facebook"
            >
              <span className="footer-social-icon"><FacebookIcon /></span>
              <span className="footer-social-label eng">Facebook</span>
            </a>
            <a
              href="https://www.tiktok.com/@valore.realestate?lang=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
              aria-label="TikTok"
            >
              <span className="footer-social-icon"><TikTokIcon /></span>
              <span className="footer-social-label eng">TikTok</span>
            </a>
          </div>
        </div>

      </div>

      {/* ── bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className={`footer-copy ${lang}`}>
            {isGeo
              ? `© ${new Date().getFullYear()} Valore. ყველა უფლება დაცულია.`
              : `© ${new Date().getFullYear()} Valore. All rights reserved.`}
          </span>
          <span className="footer-bottom-divider" />
          <span className={`footer-apollo ${lang}`}>
            {isGeo ? 'დიზაინი და დეველოპმენტი:' : 'Designed & Developed by'}{' '}
            <a
              href="https://apollocreations.net"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-apollo-link"
            >
              Apollo Creations
            </a>
          </span>
        </div>
      </div>

    </footer>
  )
}

export default Footer