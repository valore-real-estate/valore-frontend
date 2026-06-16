'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useLanguage } from './LanguageContext'
import '../styles/ListingPage.css'

const API = 'https://valore-backend-ro8e.onrender.com/api/properties'

const TYPE_LABELS = {
  apartment:  { geo: 'ბინა',         eng: 'Apartment' },
  house:      { geo: 'სახლი',        eng: 'House' },
  commercial: { geo: 'კომერციული',   eng: 'Commercial' },
  land:       { geo: 'მიწა',         eng: 'Land' },
}

const CONDITION_LABELS = {
  black: { geo: 'შავი კარკასი',   eng: 'Black Frame' },
  white: { geo: 'თეთრი კარკასი',  eng: 'White Frame' },
  green: { geo: 'მწვანე კარკასი', eng: 'Green Frame' },
}

const RENOVATION_LABELS = {
  new: { geo: 'ახალი', eng: 'New' },
  old: { geo: 'ძველი', eng: 'Old' },
}

const BUILDING_AGE_LABELS = {
  new: { geo: 'ახალი აშენებული', eng: 'Newly Built' },
  old: { geo: 'ძველი აშენებული', eng: 'Old Building' },
}

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const IconMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
)

const IconChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)

const IconArea = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/>
  </svg>
)

const IconRooms = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const IconBed = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16M2 8h20v12H2M22 4v4"/>
    <path d="M7 8v4M12 8v4"/>
  </svg>
)

const IconFloor = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="4" rx="1"/>
    <rect x="2" y="10" width="20" height="4" rx="1"/>
    <rect x="2" y="17" width="20" height="4" rx="1"/>
  </svg>
)

const IconType = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

const SPEC_ICONS = {
  area: <IconArea />,
  rooms: <IconRooms />,
  bedrooms: <IconBed />,
  floor: <IconFloor />,
  default: <IconType />,
}

export default function ListingPage() {
  const { id } = useParams()
  const { language } = useLanguage()
  const isGeo = language === 'geo'
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activePhoto, setActivePhoto] = useState(0)

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then(r => r.json())
      .then(data => {
        const prop = data.data || data
        setItem(prop)
        setLoading(false)
      })
      .catch(err => { console.error(err); setLoading(false) })
  }, [id])

  if (loading) return (
    <div className="lp-loading">
      <div className="lp-spinner" />
    </div>
  )
  if (!item) return (
    <div className="lp-notfound">
      {isGeo ? 'განცხადება ვერ მოიძებნა' : 'Property not found'}
    </div>
  )

  const allPhotos = [item.mainPhoto, ...(item.photos || [])].filter(Boolean)
  const pricePerSqm = item.area ? Math.round(item.price / item.area) : 0

  const prev = () => setActivePhoto(p => (p - 1 + allPhotos.length) % allPhotos.length)
  const next = () => setActivePhoto(p => (p + 1) % allPhotos.length)

  const specs = [
    item.area       && { key: 'area',      label: isGeo ? 'ფართი'         : 'Area',        value: `${item.area} მ²` },
    item.rooms      && { key: 'rooms',     label: isGeo ? 'ოთახები'       : 'Rooms',       value: item.rooms },
    item.bedrooms   && { key: 'bedrooms',  label: isGeo ? 'საძინებელი'    : 'Bedrooms',    value: item.bedrooms },
    item.floor      && { key: 'floor',     label: isGeo ? 'სართული'       : 'Floor',       value: `${item.floor}/${item.totalFloors}` },
    item.type       && { key: 'type',      label: isGeo ? 'ტიპი'          : 'Type',        value: isGeo ? TYPE_LABELS[item.type]?.geo       : TYPE_LABELS[item.type]?.eng },
    item.condition  && { key: 'condition', label: isGeo ? 'მდგომარეობა'   : 'Condition',   value: isGeo ? CONDITION_LABELS[item.condition]?.geo  : CONDITION_LABELS[item.condition]?.eng },
    item.renovation && { key: 'renovation',label: isGeo ? 'რემონტი'       : 'Renovation',  value: isGeo ? RENOVATION_LABELS[item.renovation]?.geo : RENOVATION_LABELS[item.renovation]?.eng },
    item.buildingAge&& { key: 'building',  label: isGeo ? 'შენობა'        : 'Building',    value: isGeo ? BUILDING_AGE_LABELS[item.buildingAge]?.geo : BUILDING_AGE_LABELS[item.buildingAge]?.eng },
    item.type === 'land' && item.isAgricultural !== null && item.isAgricultural !== undefined && {
      key: 'agri',
      label: isGeo ? 'სასოფლო' : 'Agricultural',
      value: item.isAgricultural ? (isGeo ? 'დიახ' : 'Yes') : (isGeo ? 'არა' : 'No')
    },
  ].filter(Boolean)

  return (
    <div className="lp-wrapper">

      {/* CAROUSEL */}
      <div className="lp-carousel">
        <div className="lp-carousel-main">
          <img src={allPhotos[activePhoto]} alt="" className="lp-carousel-img" />
          {allPhotos.length > 1 && (
            <>
              <button className="lp-carousel-btn lp-carousel-btn--prev" onClick={prev}>
                <IconChevronLeft />
              </button>
              <button className="lp-carousel-btn lp-carousel-btn--next" onClick={next}>
                <IconChevronRight />
              </button>
              <div className="lp-carousel-counter">{activePhoto + 1} / {allPhotos.length}</div>
            </>
          )}
        </div>
        {allPhotos.length > 1 && (
          <div className="lp-carousel-thumbs">
            {allPhotos.map((photo, i) => (
              <button
                key={i}
                className={`lp-thumb ${i === activePhoto ? 'active' : ''}`}
                onClick={() => setActivePhoto(i)}
              >
                <img src={photo} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* BODY */}
      <div className="lp-body">

        {/* LEFT */}
        <div className="lp-left">

          <div className="lp-breadcrumb">
            <span>{isGeo ? TYPE_LABELS[item.type]?.geo : TYPE_LABELS[item.type]?.eng}</span>
            {(item.city?.geo || item.city?.eng) && (
              <>
                <span className="lp-breadcrumb-sep">·</span>
                <span>{isGeo ? item.city?.geo : item.city?.eng}</span>
              </>
            )}
            {(item.district?.geo || item.district?.eng) && (
              <>
                <span className="lp-breadcrumb-sep">·</span>
                <span>{isGeo ? item.district?.geo : item.district?.eng}</span>
              </>
            )}
          </div>

          <h1 className={`lp-title ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo ? item.title?.geo : item.title?.eng}
          </h1>

          <p className={`lp-address ${isGeo ? 'geo' : 'eng'}`}>
            <span className="lp-address-icon"><IconPin /></span>
            {isGeo ? item.address?.geo : item.address?.eng}
          </p>

          <div className="lp-specs">
            {specs.map((s, i) => (
              <div className="lp-spec-item" key={i}>
                <span className="lp-spec-icon">
                  {SPEC_ICONS[s.key] || SPEC_ICONS.default}
                </span>
                <span className={`lp-spec-label ${isGeo ? 'geo' : 'eng'}`}>{s.label}</span>
                <span className={`lp-spec-value ${isGeo ? 'geo' : 'eng'}`}>{s.value}</span>
              </div>
            ))}
          </div>

          {(item.description?.geo || item.description?.eng) && (
            <div className="lp-description-block">
              <h2 className={`lp-section-title ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? 'აღწერა' : 'Description'}
              </h2>
              <p className={`lp-description ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? item.description?.geo : item.description?.eng}
              </p>
            </div>
          )}

        </div>

        {/* RIGHT */}
        <div className="lp-right">
          <div className="lp-price-card">

            <p className={`lp-consult-label ${isGeo ? 'geo' : 'eng'}`}>
              {isGeo ? 'მოითხოვე ექსპერტთან კონსულტაცია' : 'Request Expert Consultation'}
            </p>

            <div className="lp-price-row">
              <div className="lp-price-block">
                <span className={`lp-price-label ${isGeo ? 'geo' : 'eng'}`}>
                  {isGeo ? 'სრული' : 'Total'}
                </span>
                <span className="lp-price-value">${item.price?.toLocaleString()}</span>
              </div>
              <div className="lp-price-divider" />
              <div className="lp-price-block">
                <span className={`lp-price-label ${isGeo ? 'geo' : 'eng'}`}>
                  {isGeo ? 'კვ.მ-ს ფასი' : 'Per m²'}
                </span>
                <span className="lp-price-value lp-price-value--sm">
                  ${pricePerSqm.toLocaleString()}
                </span>
              </div>
            </div>

            <a href="tel:+995000000000" className="lp-cta-btn">
              <span className="lp-cta-icon"><IconPhone /></span>
              {isGeo ? 'დაგვიკავშირდით' : 'Contact Us'}
            </a>

            <a href="mailto:info@valore.ge" className="lp-email-link">
              <span className="lp-email-icon"><IconMail /></span>
              info@valore.ge
            </a>

          </div>
        </div>

      </div>
    </div>
  )
}