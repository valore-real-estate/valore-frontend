'use client'
import React from 'react'
import { useLanguage } from './LanguageContext'
import '../styles/ListingHero.css'

const translations = {
  geo: {
    label: 'განძი',
    title: 'მოძებნე შენთვის სასურველი უძრავი ქონება',
    desc: 'საცხოვრებელი, კომერციული თუ საინვესტიციო — ყველაფერი ერთ ადგილას.',
  },
  eng: {
    label: 'Listings',
    title: 'Find Your Perfect Property',
    desc: 'Residential, commercial or investment — everything in one place.',
  },
}

function ListingHero() {
  const { language } = useLanguage()
  const lang = language === 'geo' ? 'geo' : 'eng'
  const t = translations[lang]

  return (
    <div className="listing-hero">
      <div className="listing-hero-inner">
        <span className={`listing-hero-label ${lang}`}>{t.label}</span>
        <h1 className={`listing-hero-title ${lang}`}>{t.title}</h1>
        <p className={`listing-hero-desc ${lang}`}>{t.desc}</p>
      </div>
      <div className="listing-hero-deco" aria-hidden="true">
        <div className="listing-hero-circle c1" />
        <div className="listing-hero-circle c2" />
        <div className="listing-hero-circle c3" />
      </div>
    </div>
  )
}

export default ListingHero