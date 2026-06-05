'use client'
import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/Gancxadebebi.css'

const listings = [
  {
    img: '/pictures/cat1.jpg',
    titleGeo: 'იყიდება 2 ოთახიანი ბინა',
    titleEng: 'For Sale — 2-Room Apartment',
    locationGeo: 'თბილისი, დიდუბე, 300 არაგველი',
    locationEng: 'Tbilisi, Didi Dighomi, 300 Aragveli',
    sqm: 81,
    rooms: 2,
    price: 320000,
  },
  {
    img: '/pictures/cat2.jpg',
    titleGeo: 'იყიდება 4 ოთახიანი კერძო სახლი',
    titleEng: 'For Sale — 4-Room Private House',
    locationGeo: 'თბილისი, ისანი, დოლაბაური',
    locationEng: 'Tbilisi, Isani, Dolabouri',
    sqm: 202,
    rooms: 4,
    price: 420000,
  },
  {
    img: '/pictures/cat3.jpg',
    titleGeo: 'ქირავდება კომერციული ფართი',
    titleEng: 'For Rent — Commercial Space',
    locationGeo: 'თბილისი, ვაკე, საბურთალო',
    locationEng: 'Tbilisi, Vake, Saburtalo',
    sqm: 116,
    rooms: null,
    price: 2000,
  },
  {
    img: '/pictures/cat4.jpg',
    titleGeo: 'იყიდება მიწის ნაკვეთი',
    titleEng: 'For Sale — Land Plot',
    locationGeo: 'თბილისი, გლდანი, ვარკეთილი',
    locationEng: 'Tbilisi, Gldani, Varketili',
    sqm: 450,
    rooms: null,
    price: 85000,
  },
]

function ListingCard({ item, isGeo }) {
  const pricePerSqm = Math.round(item.price / item.sqm)

  return (
    <div className="gcx-card">
      <div className="gcx-card-img-wrap">
        <img src={item.img} alt={item.titleEng} className="gcx-card-img" />
      </div>

      <div className="gcx-card-body">
        <h3 className={`gcx-card-title ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo ? item.titleGeo : item.titleEng}
        </h3>

        <p className={`gcx-card-location ${isGeo ? 'geo' : 'eng'}`}>
          <span className="gcx-location-dot">📍</span>
          {isGeo ? item.locationGeo : item.locationEng}
        </p>

        <div className="gcx-card-meta">
          <span className="gcx-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/></svg>
            {item.sqm} მ²
          </span>
          {item.rooms && (
            <span className="gcx-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              {item.rooms} {isGeo ? 'ოთახი' : 'rooms'}
            </span>
          )}
        </div>

        <div className="gcx-card-divider" />

        <div className="gcx-card-footer">
          <div className="gcx-price-block">
            <span className={`gcx-price-label ${isGeo ? 'geo' : 'eng'}`}>{isGeo ? 'სრული' : 'Total'}</span>
            <span className="gcx-price-value">${item.price.toLocaleString()}</span>
          </div>
          <div className="gcx-price-block">
            <span className={`gcx-price-label ${isGeo ? 'geo' : 'eng'}`}>{isGeo ? 'კვ.მ-ს ფასი' : 'Per m²'}</span>
            <span className="gcx-price-value">${pricePerSqm.toLocaleString()}</span>
          </div>
          <div className="gcx-arrow-btn">↗</div>
        </div>
      </div>
    </div>
  )
}

function Gancxadebebi() {
  const { language } = useLanguage()
  const isGeo = language === 'geo'

  return (
    <div className="gancxadebebi-container" id="gancxadebebi">
      <div className="category-title">
        <h2 className={`cat-title-text ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo ? 'ახალი განცხადებები' : 'Latest Listings'}
        </h2>
        <div className="cat-title-divider" />
        <p className={`cat-title-desc ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo
            ? 'აღმოაჩინეთ ახალი და ექსკლუზიური განცხადებები'
            : 'Discover the newest and most exclusive property listings'}
        </p>
      </div>

      {/* Desktop grid */}
      <div className="gcx-grid">
        {listings.map((item, i) => (
          <ListingCard key={i} item={item} isGeo={isGeo} />
        ))}
      </div>

      {/* Mobile swiper */}
      <div className="gcx-swiper-wrap">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="gcx-swiper"
        >
          {listings.map((item, i) => (
            <SwiperSlide key={i}>
              <ListingCard item={item} isGeo={isGeo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Gancxadebebi