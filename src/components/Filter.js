'use client'
import React, { useState, useEffect } from 'react'
import '../styles/Filter.css'

const API = 'https://valore-backend-ro8e.onrender.com/api/properties'

const PROPERTY_TYPES = [
  { value: '',           geo: 'ყველა',       eng: 'All Types' },
  { value: 'apartment',  geo: 'ბინა',         eng: 'Apartment' },
  { value: 'house',      geo: 'სახლი',        eng: 'House' },
  { value: 'commercial', geo: 'კომერციული',   eng: 'Commercial' },
  { value: 'land',       geo: 'მიწა',         eng: 'Land' },
]

const CONDITION_OPTIONS = [
  { value: '',      geo: 'ნებისმიერი', eng: 'Any' },
  { value: 'black', geo: 'შავი კარკასი', eng: 'Black Frame' },
  { value: 'white', geo: 'თეთრი კარკასი', eng: 'White Frame' },
  { value: 'green', geo: 'მწვანე კარკასი', eng: 'Green Frame' },
]

const RENOVATION_OPTIONS = [
  { value: '',    geo: 'ნებისმიერი', eng: 'Any' },
  { value: 'new', geo: 'ახალი',      eng: 'New' },
  { value: 'old', geo: 'ძველი',      eng: 'Old' },
]

const SORT_OPTIONS = [
  { value: 'newest',     geo: 'უახლესი',        eng: 'Newest' },
  { value: 'price_asc',  geo: 'ფასი: იზრდება',  eng: 'Price: Low to High' },
  { value: 'price_desc', geo: 'ფასი: მცირდება', eng: 'Price: High to Low' },
  { value: 'area_asc',   geo: 'ფართი: იზრდება', eng: 'Area: Small to Large' },
  { value: 'area_desc',  geo: 'ფართი: მცირდება', eng: 'Area: Large to Small' },
]

const DEFAULT_FILTERS = {
  type: '',
  minPrice: '',
  maxPrice: '',
  minArea: '',
  maxArea: '',
  rooms: '',
  condition: '',
  renovation: '',
  city: '',
  district: '',
  sort: 'newest',
}

export default function Filter({ lang = 'geo', onFilterChange }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [expanded, setExpanded] = useState(false)

  // fetched meta
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(0)
  const [cities, setCities] = useState([])
  const [districts, setDistricts] = useState([])
  const [allDistricts, setAllDistricts] = useState({}) // city -> districts[]

  const t = (geo, eng) => lang === 'geo' ? geo : eng
  const fontClass = lang === 'geo' ? 'geo' : 'eng'

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => {
        const arr = Array.isArray(data) ? data : (data.properties || data.listings || data.data || [])

        // price range
        const prices = arr.map(p => p.price).filter(Boolean)
        if (prices.length) {
          setPriceMin(Math.min(...prices))
          setPriceMax(Math.max(...prices))
        }

        // extract cities — try item.city first, fallback to first word of address
        const cityMap = {}
        arr.forEach(item => {
          const cityGeo = item.city?.geo || item.address?.geo?.split(',')[0]?.trim()
          const cityEng = item.city?.eng || item.address?.eng?.split(',')[0]?.trim()
          const districtGeo = item.district?.geo || item.address?.geo?.split(',')[1]?.trim()
          const districtEng = item.district?.eng || item.address?.eng?.split(',')[1]?.trim()

          if (cityGeo) {
            if (!cityMap[cityGeo]) cityMap[cityGeo] = { geo: cityGeo, eng: cityEng || cityGeo, districts: [] }
            if (districtGeo && !cityMap[cityGeo].districts.find(d => d.geo === districtGeo)) {
              cityMap[cityGeo].districts.push({ geo: districtGeo, eng: districtEng || districtGeo })
            }
          }
        })

        const cityList = Object.values(cityMap)
        setCities(cityList)
        setAllDistricts(cityMap)
      })
      .catch(console.error)
  }, [])

  // when city changes, update available districts
  useEffect(() => {
    if (filters.city && allDistricts[filters.city]) {
      setDistricts(allDistricts[filters.city].districts)
    } else {
      // show all districts across all cities
      const all = Object.values(allDistricts).flatMap(c => c.districts)
      const unique = all.filter((d, i, arr) => arr.findIndex(x => x.geo === d.geo) === i)
      setDistricts(unique)
    }
  }, [filters.city, allDistricts])

  const handleChange = (key, value) => {
    const next = { ...filters, [key]: value }
    // reset district when city changes
    if (key === 'city') next.district = ''
    setFilters(next)
    onFilterChange?.(next)
  }

  const handleReset = () => {
    setFilters(DEFAULT_FILTERS)
    onFilterChange?.(DEFAULT_FILTERS)
  }

  const activeCount = Object.entries(filters).filter(
    ([k, v]) => v !== '' && v !== 'newest' && k !== 'sort'
  ).length

  return (
    <div className="filter-wrapper">

      {/* ── TOP ROW ── */}
      <div className="filter-top-row">
        <button
          className={`filter-toggle-btn ${fontClass} ${expanded ? 'active' : ''}`}
          onClick={() => setExpanded(p => !p)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
            <line x1="11" y1="18" x2="13" y2="18"/>
          </svg>
          {t('ფილტრი', 'Filters')}
          {activeCount > 0 && <span className="filter-badge">{activeCount}</span>}
        </button>

        <div className="filter-sort-wrap">
          <select
            className={`filter-select ${fontClass}`}
            value={filters.sort}
            onChange={e => handleChange('sort', e.target.value)}
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{t(o.geo, o.eng)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── TYPE PILLS ── */}
      <div className="filter-type-row">
        {PROPERTY_TYPES.map(pt => (
          <button
            key={pt.value}
            className={`filter-type-pill ${fontClass} ${filters.type === pt.value ? 'active' : ''}`}
            onClick={() => handleChange('type', pt.value)}
          >
            {t(pt.geo, pt.eng)}
          </button>
        ))}
      </div>

      {/* ── EXPANDED PANEL ── */}
      <div className={`filter-panel ${expanded ? 'open' : ''}`}>
        <div className="filter-panel-inner">

          {/* Price */}
          <div className="filter-group">
            <label className={`filter-label ${fontClass}`}>
              {t('ფასი ($)', 'Price ($)')}
              {priceMax > 0 && (
                <span className="filter-label-hint">
                  {priceMin.toLocaleString()} – {priceMax.toLocaleString()}
                </span>
              )}
            </label>
            <div className="filter-range-row">
              <input className={`filter-range-input ${fontClass}`} type="number"
                placeholder={priceMin ? priceMin.toLocaleString() : t('მინ.', 'Min')}
                value={filters.minPrice}
                min={priceMin} max={priceMax}
                onChange={e => handleChange('minPrice', e.target.value)} />
              <span className="filter-range-sep">—</span>
              <input className={`filter-range-input ${fontClass}`} type="number"
                placeholder={priceMax ? priceMax.toLocaleString() : t('მაქს.', 'Max')}
                value={filters.maxPrice}
                min={priceMin} max={priceMax}
                onChange={e => handleChange('maxPrice', e.target.value)} />
            </div>
          </div>

          {/* Area */}
          <div className="filter-group">
            <label className={`filter-label ${fontClass}`}>{t('ფართი (მ²)', 'Area (m²)')}</label>
            <div className="filter-range-row">
              <input className={`filter-range-input ${fontClass}`} type="number"
                placeholder={t('მინ.', 'Min')} value={filters.minArea}
                onChange={e => handleChange('minArea', e.target.value)} />
              <span className="filter-range-sep">—</span>
              <input className={`filter-range-input ${fontClass}`} type="number"
                placeholder={t('მაქს.', 'Max')} value={filters.maxArea}
                onChange={e => handleChange('maxArea', e.target.value)} />
            </div>
          </div>

          {/* Rooms */}
          <div className="filter-group">
            <label className={`filter-label ${fontClass}`}>{t('ოთახები', 'Rooms')}</label>
            <div className="filter-pill-row">
              {['', '1', '2', '3', '4', '5'].map(r => (
                <button key={r}
                  className={`filter-mini-pill ${fontClass} ${filters.rooms === r ? 'active' : ''}`}
                  onClick={() => handleChange('rooms', r)}>
                  {r === '' ? t('ყველა', 'Any') : r === '5' ? '5+' : r}
                </button>
              ))}
            </div>
          </div>

          {/* City — dropdown from fetched data */}
          <div className="filter-group">
            <label className={`filter-label ${fontClass}`}>{t('ქალაქი', 'City')}</label>
            <select
              className={`filter-select ${fontClass}`}
              value={filters.city}
              onChange={e => handleChange('city', e.target.value)}
            >
              <option value="">{t('ყველა', 'All')}</option>
              {cities.map(c => (
                <option key={c.geo} value={c.geo}>
                  {lang === 'geo' ? c.geo : c.eng}
                </option>
              ))}
            </select>
          </div>

          {/* District — dropdown filtered by selected city */}
          <div className="filter-group">
            <label className={`filter-label ${fontClass}`}>{t('უბანი', 'District')}</label>
            <select
              className={`filter-select ${fontClass}`}
              value={filters.district}
              onChange={e => handleChange('district', e.target.value)}
              disabled={districts.length === 0}
            >
              <option value="">{t('ყველა', 'All')}</option>
              {districts.map(d => (
                <option key={d.geo} value={d.geo}>
                  {lang === 'geo' ? d.geo : d.eng}
                </option>
              ))}
            </select>
          </div>

          {/* Condition */}
          <div className="filter-group">
            <label className={`filter-label ${fontClass}`}>{t('მდგომარეობა', 'Condition')}</label>
            <select className={`filter-select ${fontClass}`} value={filters.condition}
              onChange={e => handleChange('condition', e.target.value)}>
              {CONDITION_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{t(o.geo, o.eng)}</option>
              ))}
            </select>
          </div>

          {/* Renovation */}
          <div className="filter-group">
            <label className={`filter-label ${fontClass}`}>{t('რემონტი', 'Renovation')}</label>
            <select className={`filter-select ${fontClass}`} value={filters.renovation}
              onChange={e => handleChange('renovation', e.target.value)}>
              {RENOVATION_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{t(o.geo, o.eng)}</option>
              ))}
            </select>
          </div>

          {/* Reset */}
          <div className="filter-group filter-group--reset">
            <button className={`filter-reset-btn ${fontClass}`} onClick={handleReset}>
              {t('გასუფთავება', 'Clear All')}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}