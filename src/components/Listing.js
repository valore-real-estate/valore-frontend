'use client'
import React, { useState, useEffect, useRef } from 'react'
import Filter from './Filter'
import ListingHero from './ListingHero'
import { useLanguage } from './LanguageContext'
import Link from 'next/link'
import '../styles/Listing.css'
import '../styles/Gancxadebebi.css'

const API = 'https://valore-backend-ro8e.onrender.com/api/properties'
const PER_PAGE = 12

function SkeletonCard() {
  return (
    <div className="gcx-card gcx-card--skeleton">
      <div className="gcx-card-img-wrap">
        <div className="gcx-skeleton gcx-skeleton--img" />
      </div>
      <div className="gcx-card-body">
        <div className="gcx-skeleton gcx-skeleton--title" />
        <div className="gcx-skeleton gcx-skeleton--title gcx-skeleton--title-short" />
        <div className="gcx-skeleton gcx-skeleton--location" />
        <div className="gcx-card-meta">
          <div className="gcx-skeleton gcx-skeleton--badge" />
          <div className="gcx-skeleton gcx-skeleton--badge" />
        </div>
        <div className="gcx-card-divider" />
        <div className="gcx-card-footer">
          <div className="gcx-price-block">
            <div className="gcx-skeleton gcx-skeleton--label" />
            <div className="gcx-skeleton gcx-skeleton--price" />
          </div>
          <div className="gcx-price-block">
            <div className="gcx-skeleton gcx-skeleton--label" />
            <div className="gcx-skeleton gcx-skeleton--price" />
          </div>
          <div className="gcx-skeleton gcx-skeleton--arrow" />
        </div>
      </div>
    </div>
  )
}

function ListingCard({ item, isGeo }) {
  const pricePerSqm = item.area ? Math.round(item.price / item.area) : 0

  return (
    <Link href={`/listing-page/${item._id}`} style={{ textDecoration: 'none' }}>
      <div className="gcx-card">
        <div className="gcx-card-img-wrap">
          <img src={item.mainPhoto} alt={item.title?.eng || ''} className="gcx-card-img" />
        </div>
        <div className="gcx-card-body">
          <h3 className={`gcx-card-title ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo ? item.title?.geo : item.title?.eng}
          </h3>
          <p className={`gcx-card-location ${isGeo ? 'geo' : 'eng'}`}>
            <span className="gcx-location-dot">📍</span>
            {isGeo ? item.address?.geo : item.address?.eng}
          </p>
          <div className="gcx-card-meta">
            <span className="gcx-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/>
              </svg>
              {item.area} მ²
            </span>
            {item.rooms && (
              <span className="gcx-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                {item.rooms} {isGeo ? 'ოთახი' : 'rooms'}
              </span>
            )}
          </div>
          <div className="gcx-card-divider" />
          <div className="gcx-card-footer">
            <div className="gcx-price-block">
              <span className={`gcx-price-label ${isGeo ? 'geo' : 'eng'}`}>{isGeo ? 'სრული' : 'Total'}</span>
              <span className="gcx-price-value">${item.price?.toLocaleString()}</span>
            </div>
            <div className="gcx-price-block">
              <span className={`gcx-price-label ${isGeo ? 'geo' : 'eng'}`}>{isGeo ? 'კვ.მ-ს ფასი' : 'Per m²'}</span>
              <span className="gcx-price-value">${pricePerSqm.toLocaleString()}</span>
            </div>
            <div className="gcx-arrow-btn">↗</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function applyFilters(listings, filters) {
  if (!filters) return listings
  return listings.filter(item => {
    if (filters.type && item.type !== filters.type) return false
    if (filters.minPrice && item.price < Number(filters.minPrice)) return false
    if (filters.maxPrice && item.price > Number(filters.maxPrice)) return false
    if (filters.minArea && item.area < Number(filters.minArea)) return false
    if (filters.maxArea && item.area > Number(filters.maxArea)) return false
    if (filters.rooms && String(item.rooms) !== filters.rooms) return false
    if (filters.condition && item.condition !== filters.condition) return false
    if (filters.renovation && item.renovation !== filters.renovation) return false
    if (filters.city && !item.city?.geo?.toLowerCase().includes(filters.city.toLowerCase()) &&
        !item.city?.eng?.toLowerCase().includes(filters.city.toLowerCase())) return false
    if (filters.district && !item.district?.geo?.toLowerCase().includes(filters.district.toLowerCase()) &&
        !item.district?.eng?.toLowerCase().includes(filters.district.toLowerCase())) return false
    return true
  }).sort((a, b) => {
    switch (filters.sort) {
      case 'price_asc':  return a.price - b.price
      case 'price_desc': return b.price - a.price
      case 'area_asc':   return a.area - b.area
      case 'area_desc':  return b.area - a.area
      default:           return new Date(b.createdAt) - new Date(a.createdAt)
    }
  })
}

function PaginationBar({ current, total, onChange }) {
  if (total <= 1) return null

  const pages = []
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || i === current || i === current - 1 || i === current + 1) {
      pages.push(i)
    } else if (i === current - 2 || i === current + 2) {
      pages.push('...')
    }
  }
  const deduped = pages.filter((p, i) => p !== '...' || pages[i - 1] !== '...')

  return (
    <div className="listing-pagination">
      <button
        className="listing-page-btn listing-page-btn--arrow"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
      >←</button>

      {deduped.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="listing-page-dots">…</span>
        ) : (
          <button
            key={p}
            className={`listing-page-btn ${current === p ? 'active' : ''}`}
            onClick={() => onChange(p)}
          >{p}</button>
        )
      )}

      <button
        className="listing-page-btn listing-page-btn--arrow"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
      >→</button>
    </div>
  )
}

function Listing() {
  const { language } = useLanguage()
  const isGeo = language === 'geo'
  const [filters, setFilters] = useState(null)
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const gridRef = useRef(null)

  useEffect(() => {
    setLoading(true)
    fetch(API)
      .then(r => r.json())
      .then(data => {
        const arr = Array.isArray(data) ? data : (data.properties || data.listings || data.data || [])
        setListings(arr)
        setLoading(false)
      })
      .catch(err => { console.error(err); setLoading(false) })
  }, [])

  const handleFilterChange = (f) => {
    setFilters(f)
    setPage(1)
  }

  const filtered = applyFilters(listings, filters)
  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handlePageChange = (p) => {
    setPage(p)
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="listing-wrapper">
      <ListingHero />
      <Filter lang={isGeo ? 'geo' : 'eng'} onFilterChange={handleFilterChange} />

      <div className="listing-grid" ref={gridRef}>
        {loading
          ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
          : paginated.length > 0
            ? paginated.map(item => <ListingCard key={item._id} item={item} isGeo={isGeo} />)
            : <p className={`listing-empty ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? 'განცხადება ვერ მოიძებნა' : 'No listings found'}
              </p>
        }
      </div>

      {!loading && (
        <PaginationBar
          current={page}
          total={totalPages}
          onChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default Listing