import logoAmazon from '@/images/logos/aws.svg'
import BongoHive from '@/images/logos/BongoHive.svg'
import Duniya from '@/images/logos/Duniya.svg'
import Lassod from '@/images/logos/Lassod.svg'
import Oyoyo from '@/images/logos/OYOYO.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'
import Lumenalta from '@/images/logos/Lumenalta.svg'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'
const siteMeta = {
  title: 'Aubrey Zulu',
  description:
    'Aubrey Zulu is a developer advocate, keynote speaker, author, and open source practitioner.',
  copyright: 'Aubrey Zulu, CC-BY-SA',
  author: {
    name: 'Aubrey Zulu',
    email: 'me@aubreydarious@gmail.com',
    twitter: 'https://twitter.com/_AubreyZulu',
    instagram: 'https://instagram.com/aubreyzulus',
    github: 'https://github.com/aubreyzulu',
    linkedin: 'https://linkedin.com/in/aubreyzulu',
  },
  siteUrl: 'https://aubreyzulu.com',
}
export const resume = [
  {
    company: 'BongoHive',
    title: 'Technical Lead Developer',
    logo: BongoHive,
    start: '2023',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Lassod',
    title: 'Backend Software Engineer',
    logo: Lassod,
    start: '2022',
    end: '2024',
  },
  {
    company: 'Lumenalta (formerly Clevertech)',
    title: 'Front End Developer',
    logo: Lumenalta,
    start: '2024',
    end: '2024',
  },
  {
    company: 'BongoHive',
    title: 'Software Developer',
    logo: BongoHive,
    start: '2020',
    end: '2023',
  },
]
export const projects = [
  {
    name: 'OYOYO Events',
    description:
      'Oyoyo Events is an AI-powered event management platform designed to simplify and enhance the event planning experience. It connects event planners, vendors, and attendees, offering tools to optimize event layouts, streamline coordination, and facilitate secure transactions. The platform helps attendees discover and register for events, while vendors can showcase their services and manage their profiles. It aims to minimize planning time, reduce costs, and provide extensive exposure for vendors, creating seamless and memorable event experiences.',
    link: { href: 'https://oyoyoapp.com', label: 'oyoyoapp.com' },
    logo: Oyoyo,
  },
  {
    name: 'Duniya Health Care',
    description:
      'Duniya Health Care is a platform designed to help retail pharmacies in Africa source medicines from trusted wholesalers. It offers a one-stop shop for purchasing from various wholesalers and manufacturers, ensuring free and timely delivery of orders. The service aims to prevent stock-outs and supports both urban and rural pharmacies by providing efficient and reliable logistics. Duniya Health Care is committed to enhancing primary healthcare accessibility across Africa',
    link: {
      href: 'https://duniyahealthcare.com/',
      label: 'Duniya Health Care',
    },
    logo: Duniya,
  },
]

export default siteMeta
