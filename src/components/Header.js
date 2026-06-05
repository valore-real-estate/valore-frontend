'use client'
import React, { useState } from 'react'
import '../styles/Header.css'
import { useLanguage } from './LanguageContext'

function Header() {
  const { language, toggleLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const translations = {
    geo: { home: 'მთავარი', estate: 'უძრავი ქონება', about: 'ჩვენს შესახებ', contact: 'კონტაქტი' },
    eng: { home: 'Home', estate: 'Real Estate', about: 'About Us', contact: 'Contact' }
  }

  const t = translations[language]

  return (
    <>
      <header className={`header ${language === 'eng' ? 'lang-eng' : ''}`}>
        <div className="header-inner">

          {/* Logo */}
          <div className="logo">
            <span className="logo-text">Valore</span>
            <span className="logo-dot">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="header-right">
            <nav className="nav">
              <ul className="nav-links">
                <li>{t.home}</li>
                <li>{t.estate}</li>
                <li>{t.about}</li>
                <li>{t.contact}</li>
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
          <div className="logo">
            <span className="logo-text">Valore</span>
            <span className="logo-dot">.</span>
          </div>
          <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>

        <ul className="sidebar-links">
          <li onClick={() => setMenuOpen(false)}>{t.home}</li>
          <li onClick={() => setMenuOpen(false)}>{t.estate}</li>
          <li onClick={() => setMenuOpen(false)}>{t.about}</li>
          <li onClick={() => setMenuOpen(false)}>{t.contact}</li>
        </ul>

        <button className="lang-switch sidebar-lang" onClick={toggleLanguage}>
          {language === 'geo' ? 'ENG' : 'GEO'}
        </button>
      </div>
    </>
  )
}

export default Header