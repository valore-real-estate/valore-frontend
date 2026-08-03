import About from '../../components/About'

export const metadata = {
  title: 'ჩვენ შესახებ | Valore Real Estate — უძრავი ქონების სააგენტო საქართველოში',
  description:
    'Valore არის თანამედროვე უძრავი ქონების სააგენტო საქართველოში, რომელიც სთავაზობს პროფესიონალურ მომსახურებას საცხოვრებელი და საინვესტიციო უძრავი ქონების ყიდვა-გაყიდვასა და გაქირავებაში. საქართველოს უძრავი ქონების ეროვნული ასოციაციის წევრი. | Valore is a modern real estate agency in Georgia offering professional services for buying, selling, and renting residential and investment properties. Member of the National Real Estate Association of Georgia.',
  keywords: [
    'Valore',
    'უძრავი ქონება',
    'უძრავი ქონების სააგენტო',
    'ბინის ყიდვა',
    'ბინის გაქირავება',
    'საინვესტიციო ქონება თბილისში',
    'real estate Georgia',
    'real estate agency Tbilisi',
    'buy property Georgia',
    'rent apartment Tbilisi',
    'property investment Georgia',
  ],
  alternates: {
    canonical: 'https://valore.ge/about',
  },
  openGraph: {
    title: 'ჩვენ შესახებ | Valore Real Estate',
    description:
      'გამოცდილი და სანდო გუნდი — Valore გთავაზობთ პროფესიონალურ მომსახურებას უძრავი ქონების ყიდვა-გაყიდვასა და გაქირავებაში. | An experienced, trusted team — Valore offers professional real estate buying, selling, and rental services.',
    url: 'https://valore.ge/about',
    siteName: 'Valore Real Estate',
    locale: 'ka_GE',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://valore.ge/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Valore Real Estate — ჩვენ შესახებ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ჩვენ შესახებ | Valore Real Estate',
    description:
      'თანამედროვე უძრავი ქონების სააგენტო საქართველოში — სანდოობა, პროფესიონალიზმი, ღირებულება.',
    images: ['https://valore.ge/og-about.jpg'],
  },
}

export default function AboutPage() {
  return (
    <About />
  )
}