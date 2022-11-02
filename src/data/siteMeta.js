
import logoAmazon from '@/images/logos/aws.jpg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/microsoft.jpg'
import logoXOR from '@/images/logos/xor.jpg'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'  
const siteMeta = {
    title: "Brian Ketelsen",
    description: "Brian Ketelsen is a developer advocate, keynote speaker, author, and open source practitioner.",
    copyright: "Brian Ketelsen, CC-BY-SA",
    author: {
        name: "Brian Ketelsen",
        email: "me@brian.dev",
        twitter: "https://twitter.com/bketelsen",
        instagram: "https://instagram.com/bketelsen",
        github: "https://github.com.com/bketelsen",
        linkedin: "https://linkedin.com/in/brianketelsen",
        twitch: "https://twitch.tv/bketelsen",
        youtube: "https://youtube.com/@bketelsen",
    },
    siteUrl: "https://brian.dev"
}
 export const resume = [
    {
      company: 'Amazon',
      title: 'Principal Developer Advocate',
      logo: logoAmazon,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Microsoft',
      title: 'Principal Cloud Developer Advocate',
      logo: logoMicrosoft,
      start: '2017',
      end: '2022',
    },
    {
      company: 'XOR Data Exchange',
      title: 'CIO',
      logo: logoXOR,
      start: '2014',
      end: '2016',
    },
    {
      company: 'Clarity Services, Inc.',
      title: 'COO',
      logo: logoClarity,
      start: '2008',
      end: '2014',
    },
  ]
export const projects = [
  {
    name: 'Captain Hook',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
]


export default siteMeta;