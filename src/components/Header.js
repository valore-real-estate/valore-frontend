'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import '../styles/Header.css'
import { useLanguage } from './LanguageContext'

function Header() {
  const { language, toggleLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const translations = {
    geo: { home: 'მთავარი', estate: 'უძრავი ქონება', about: 'ჩვენ შესახებ', contact: 'კონტაქტი' },
    eng: { home: 'Home', estate: 'Real Estate', about: 'About Us', contact: 'Contact' }
  }

  const t = translations[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleHomeClick = () => {
    scrollToTop()
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`header ${language === 'eng' ? 'lang-eng' : ''}`}>
        <div className="header-inner">

          {/* Logo */}
          <Link href="/" className="logo" onClick={scrollToTop}>
            <span className="logo-text">Valore</span>
            <span className="logo-dot">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="header-right">
            <nav className="nav">
              <ul className="nav-links">
                <li>
                  <Link href="/" onClick={handleHomeClick}>{t.home}</Link>
                </li>
                <li>
                  <Link href="/listing">{t.estate}</Link>
                </li>
                <li>
                  <Link href="/about">{t.about}</Link>
                </li>
                <li>
                  <Link href="/contact">{t.contact}</Link>
                </li>
              </ul>
            </nav>
            <button className="lang-switch" onClick={toggleLanguage}>
              {language === 'geo' ? 'ENG' : 'GEO'}
            </button>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`sidebar ${menuOpen ? 'open' : ''} ${language === 'eng' ? 'lang-eng' : ''}`}>
        <div className="sidebar-header">
          <Link href="/" className="logo" onClick={handleHomeClick}>
            <span className="logo-text">Valore</span>
            <span className="logo-dot">.</span>
          </Link>
          <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link href="/" onClick={handleHomeClick}>{t.home}</Link>
          </li>
          <li>
            <Link href="/properties" onClick={() => setMenuOpen(false)}>{t.estate}</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>{t.about}</Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>{t.contact}</Link>
          </li>
        </ul>
        <button className="lang-switch sidebar-lang" onClick={toggleLanguage}>
          {language === 'geo' ? 'ENG' : 'GEO'}
        </button>
      </div>
    </>
  )
}

export default Header