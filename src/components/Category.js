'use client'
import React from 'react'
import { useLanguage } from './LanguageContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import '../styles/Category.css'

const pic1 = '/pictures/cat1.jpg'
const pic2 = '/pictures/cat2.jpg'
const pic3 = '/pictures/cat3.jpg'
const pic4 = '/pictures/cat4.jpg'

const categories = [
  { img: pic1, eng: 'Apartments',        geo: 'ბინები' },
  { img: pic2, eng: 'Private Houses',    geo: 'კერძო სახლები' },
  { img: pic3, eng: 'Commercial Spaces', geo: 'კომერციული ფართები' },
  { img: pic4, eng: 'Land Plots',        geo: 'მიწის ნაკვეთები' },
]

function CategoryCard({ item, isGeo }) {
  return (
    <div className="cat-card">
      <div className="cat-card-img-wrap">
        <img src={item.img} alt={item.eng} className="cat-card-img" />
      </div>
      <div className="cat-card-label">
        <span className={`cat-card-name ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo ? item.geo : item.eng}
        </span>
      </div>
    </div>
  )
}

function Category() {
  const { language } = useLanguage()
  const isGeo = language === 'geo'

  return (
    <div className="category-container">
      <div className="category-title">
        <h2 className={`cat-title-text ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo ? 'კატეგორიები' : 'Categories'}
        </h2>

        <div className="cat-title-divider" />

        <p className={`cat-title-desc ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo
            ? 'შეარჩიეთ თქვენთვის სასურველი უძრავი ქონება'
            : 'Browse and find the property that suits you best'}
        </p>
      </div>

      {/* Desktop: 4 in a row */}
      <div className="cat-grid">
        {categories.map((item, i) => (
          <CategoryCard key={i} item={item} isGeo={isGeo} />
        ))}
      </div>

      {/* Mobile: Swiper */}
      <div className="cat-swiper-wrap">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="cat-swiper"
        >
          {categories.map((item, i) => (
            <SwiperSlide key={i}>
              <CategoryCard item={item} isGeo={isGeo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Category