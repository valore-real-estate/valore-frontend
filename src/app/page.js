import Landing from '../components/Landing'
import Category from '../components/Category'
import WhyUs from '../components/WhyUs'
import Gancxadebebi from '../components/Gancxadebebi'
import Cta from '../components/Cta'

export const metadata = {
  title: 'Valore Real Estate | უძრავი ქონების სააგენტო საქართველოში',
  description:
    'Valore — ჩვენ ვქმნით ღირებულებას თითოეული თქვენგანისთვის. პროფესიონალური მომსახურება უძრავი ქონების ყიდვა-გაყიდვასა და გაქირავებაში. ბინები, კერძო სახლები, კომერციული ფართები და მიწის ნაკვეთები საქართველოში. | Valore — we create value for every one of you. Professional real estate services for buying, selling, and renting. Apartments, private houses, commercial spaces, and land plots in Georgia.',
  keywords: [
    'Valore',
    'Valore Real Estate',
    'უძრავი ქონება საქართველოში',
    'ბინების ყიდვა',
    'კერძო სახლები',
    'კომერციული ფართი',
    'მიწის ნაკვეთი',
    'უძრავი ქონების სააგენტო თბილისი',
    'real estate Georgia',
    'real estate agency Tbilisi',
    'apartments for sale Georgia',
    'houses for sale Tbilisi',
    'commercial property Georgia',
    'land for sale Georgia',
  ],
  alternates: {
    canonical: 'https://valore.ge',
  },
  openGraph: {
    title: 'Valore Real Estate | უძრავი ქონების სააგენტო საქართველოში',
    description:
      'ჩვენ ვქმნით ღირებულებას თითოეული თქვენგანისთვის — პროფესიონალური მომსახურება უძრავი ქონების ყიდვა-გაყიდვასა და გაქირავებაში. | We create value for every one of you — professional real estate buying, selling, and rental services.',
    url: 'https://valore.ge',
    siteName: 'Valore Real Estate',
    locale: 'ka_GE',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://valore.ge/pictures/fbhome.png',
        width: 1200,
        height: 630,
        alt: 'Valore Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valore Real Estate | უძრავი ქონების სააგენტო საქართველოში',
    description:
      'პროფესიონალური მომსახურება უძრავი ქონების ყიდვა-გაყიდვასა და გაქირავებაში.',
    images: ['https://valore.ge/pictures/fbhome.png'],
  },
}

export default function Home() {
  return (
    <div>
      <Landing />
      <Category />
      <WhyUs />
      <Gancxadebebi />
      <Cta />
    </div>
  );
}