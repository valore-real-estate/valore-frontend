import Contact from '../../components/Contact'

export const metadata = {
  title: 'კონტაქტი | Valore Real Estate — დაგვიკავშირდით',
  description:
    'დაგვიკავშირდით Valore-ის გუნდს ნებისმიერ საკითხზე — ბინის ყიდვა, გაყიდვა ან გაქირავება. თბილისი, საქართველო. ტელეფონი, ელ. ფოსტა და WhatsApp. | Get in touch with the Valore real estate team for any question — buying, selling, or renting property. Tbilisi, Georgia. Phone, email, and WhatsApp available.',
  keywords: [
    'Valore კონტაქტი',
    'უძრავი ქონების სააგენტო თბილისი',
    'დაგვიკავშირდით',
    'Valore Real Estate contact',
    'real estate agency Tbilisi contact',
    'contact Valore Georgia',
  ],
  alternates: {
    canonical: 'https://valore.ge/contact',
  },
  openGraph: {
    title: 'კონტაქტი | Valore Real Estate',
    description:
      'ჩვენი გუნდი მზადაა დაგეხმაროთ უძრავი ქონების ნებისმიერ საკითხში. | Our team is ready to help you with any real estate matter.',
    url: 'https://valore.ge/contact',
    siteName: 'Valore Real Estate',
    locale: 'ka_GE',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://valore.ge/pictures/fbcontact.PNG',
        width: 1200,
        height: 630,
        alt: 'Valore Real Estate — კონტაქტი',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'კონტაქტი | Valore Real Estate',
    description:
      'დაგვიკავშირდით Valore-ის გუნდს — ბინის ყიდვა, გაყიდვა ან გაქირავება.',
    images: ['https://valore.ge/pictures/fbcontact.PNG'],
  },
}

export default function ContactPage() {
  return (
    <Contact />
  )
}