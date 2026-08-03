import ListingPage from '../../../components/ListingPage'

const API = 'https://valore-backend-ro8e.onrender.com/api/properties'

const TYPE_LABELS = {
  apartment:  { geo: 'ბინა',       eng: 'Apartment' },
  house:      { geo: 'სახლი',      eng: 'House' },
  commercial: { geo: 'კომერციული', eng: 'Commercial' },
  land:       { geo: 'მიწა',       eng: 'Land' },
}

async function getProperty(id) {
  try {
    const res = await fetch(`${API}/${id}`, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function generateMetadata({ params }) {
  const { id } = params
  const item = await getProperty(id)

  if (!item) {
    return {
      title: 'განცხადება | Valore Real Estate',
      description: 'დაათვალიერე უძრავი ქონების განცხადებები Valore-ზე.',
    }
  }

  const typeLabel = TYPE_LABELS[item.type] || { geo: '', eng: '' }
  const titleGeo = item.title?.geo || typeLabel.geo
  const titleEng = item.title?.eng || typeLabel.eng
  const addressGeo = item.address?.geo || ''
  const addressEng = item.address?.eng || ''
  const price = item.price ? `$${item.price.toLocaleString()}` : ''

  const pageTitle = `${titleGeo}${addressGeo ? `, ${addressGeo}` : ''} | Valore Real Estate`

  const descriptionParts = [
    `${typeLabel.geo}${item.area ? `, ${item.area} მ²` : ''}${item.rooms ? `, ${item.rooms} ოთახი` : ''}${price ? `, ფასი: ${price}` : ''}.`,
    item.description?.geo,
    '|',
    `${typeLabel.eng}${item.area ? `, ${item.area} m²` : ''}${item.rooms ? `, ${item.rooms} rooms` : ''}${price ? `, price: ${price}` : ''}.`,
    item.description?.eng,
  ].filter(Boolean)

  const description = descriptionParts.join(' ').slice(0, 300)

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: `https://valore.ge/listing-page/${id}`,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: `https://valore.ge/listing-page/${id}`,
      siteName: 'Valore Real Estate',
      locale: 'ka_GE',
      alternateLocale: 'en_US',
      type: 'website',
      images: item.mainPhoto
        ? [
            {
              url: item.mainPhoto,
              width: 1200,
              height: 630,
              alt: titleGeo || titleEng,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: item.mainPhoto ? [item.mainPhoto] : undefined,
    },
  }
}

export default function Page() {
  return <ListingPage />
}