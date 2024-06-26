/* eslint-disable react/no-unescaped-entities */
import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/aubrey-head.jpg'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Aubrey Zulu"
        description={siteMeta.description}
        canonical="https://aubreyzulu.com/about"
        openGraph={{
          url: 'https://aubreyzulu.com/about',
          images: [
            {
              url: `https://og.aubreyzulu.com/api/og?title=About&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'aubreyzulu.com',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi, I'm Aubrey, a dedicated Software Engineer passionate about
              crafting elegant solutions in multiple programming languages.
            </h1>
            <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
                In the dynamic and ever-evolving realm of technology, I have
                found my niche at the crossroads of innovation, creativity, and
                purpose. As a seasoned software engineer, my journey is woven
                with a rich tapestry of projects that reflect both my depth of
                knowledge and my breadth of experience. I pride myself on
                mastering diverse technologies, from the intricate dance of
                React's reactivity to the structured elegance of Python and C#'s
                logic.
              </p>
              <p>
                For me, every line of code tells a story. Each function and
                algorithm is a chapter in a larger narrative of solving
                real-world challenges, optimizing user experiences, and pushing
                the boundaries of what's possible. Beyond the code, I cherish
                the collaborative spirit of this industry. I believe in the
                power of diverse teams, where each member brings a unique
                perspective, and together, we craft digital masterpieces.
              </p>
              <p>
                "Exploring my portfolio will reveal a combination of technical
                expertise, strategic thinking, and a commitment to excellence.
                Whether you're here to collaborate, learn, or simply explore,
                you'll witness the passion and dedication that drive every
                project I undertake."
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              {/* <SocialLink href={siteMeta.author.mastodon} icon={MastodonIcon} className="mt-4">
                Follow on Mastodon
              </SocialLink> */}
              <SocialLink
                href={siteMeta.author.instagram}
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href={siteMeta.author.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={siteMeta.author.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
