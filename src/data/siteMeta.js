
import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'
import logoSM from "@/images/logos/schoolmint_logo.jpeg"
import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'  
import logoCrush from '@/images/logos/CrushData.jpeg'
import logoBlush from '@/images/logos/blush.jpeg'
import logoESPN from "@/images/logos/ESPN_E_icon.svg.png"
const siteMeta = {
    title: "Christian Solis",
    description: "Christian Solis is a QA Engineer based out of Chicago.",
    copyright: "Christian Solis, CC-BY-SA",
    author: {
        name: "Christian Solis",
        email: "mail@christiansolis.me",
        twitter: "https://twitter.com/bketelsen",
        mastodon: "https://tty0.social/@bketelsen",
        instagram: "https://instagram.com/bketelsen",
        github: "https://github.com/tacoholic",
        linkedin: "https://www.linkedin.com/in/christian-solis1/",
        twitch: "https://twitch.tv/bketelsen",
        youtube: "https://youtube.com/@bketelsen",
    },
    siteUrl: ""
}
 export const resume = [
    {
      company: 'SchoolMint, Inc.',
      title: 'QA Engineer',
      logo: logoSM,
      start: '2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'CrushData, LLC. (Contract)' ,
      title: 'Support Engineer',
      logo: logoCrush,
      start: '2019',
      end: '2020',
    },
    {
      company: 'Blush Data App (Contract)',
      title: 'QA Engineer',
      logo: logoBlush,
      start: '2019',
      end: '2019',
    },
    {
      company: 'ESPN',
      title: 'Producer',
      logo: logoESPN,
      start: '2008',
      end: '2018',
    },
  ]
export const projects = [
  {
    name: 'Fleek',
    description:
      'Install and manage all the tools you need to be productive.',
    link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
    logo: logoFleek,
  },
  {
    name: 'Universal Blue',
    description:
      'Custom Operating System images based on Fedora.',
    link: { href: 'https://ublue.it', label: 'Universal Blue' },
    logo: logoUblue,
  },
  {
    name: 'Bluefin',
    description:
      'The next generation Linux workstation. Built for cloud-native, using cloud-native.',
    link: { href: 'https://projectbluefin.io', label: 'Bluefin' },
    logo: logoUblue,
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Custom commands as webhooks.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description:
      'Production-Grade Container Scheduling and Management',
    link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description:
      'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },


]


export default siteMeta;