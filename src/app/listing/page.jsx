import Listing from '../../components/Listing'

export const metadata = {
  title: 'უძრავი ქონება | Valore Real Estate — ბინები, სახლები, კომერციული და მიწები',
  description:
    'მოძებნე შენთვის სასურველი უძრავი ქონება — საცხოვრებელი, კომერციული თუ საინვესტიციო, ყველაფერი ერთ ადგილას. ბინები, სახლები, კომერციული ფართები და მიწები საქართველოში. | Find the property you\'re looking for — residential, commercial, or investment, all in one place. Apartments, houses, commercial spaces, and land in Georgia.',
  keywords: [
    'უძრავი ქონება',
    'ბინების ყიდვა',
    'სახლების ყიდვა',
    'კომერციული ფართი',
    'მიწის ყიდვა',
    'უძრავი ქონება თბილისში',
    'Valore განცხადებები',
    'real estate listings Georgia',
    'apartments for sale Tbilisi',
    'houses for sale Georgia',
    'commercial property Georgia',
    'land for sale Georgia',
  ],
  alternates: {
    canonical: 'https://valore.ge/listing-page',
  },
  openGraph: {
    title: 'უძრავი ქონება | Valore Real Estate',
    description:
      'საცხოვრებელი, კომერციული თუ საინვესტიციო — ყველაფერი ერთ ადგილას. | Residential, commercial, or investment — all in one place.',
    url: 'https://valore.ge/listing-page',
    siteName: 'Valore Real Estate',
    locale: 'ka_GE',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://valore.ge/pictures/fblistings.PNG',
        width: 1200,
        height: 630,
        alt: 'Valore Real Estate — უძრავი ქონების განცხადებები',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'უძრავი ქონება | Valore Real Estate',
    description:
      'მოძებნე შენთვის სასურველი უძრავი ქონება — ბინები, სახლები, კომერციული და მიწები.',
    images: ['https://valore.ge/pictures/fblistings.PNG'],
  },
}

export default function ListingPage() {
  return (
    <Listing />
  )
}