import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import {Bookmark} from '@/components/Bookmark'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LiamLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  return (
    <>
    <NextSeo
      title={meta.title}
      description={meta.description}
      canonical={`https://brian.dev${router.pathname}`}
      openGraph={{
        url: `https://brian.dev${router.pathname}`,
        images: [
          {
            url: `https://og.brian.dev/api/og?title=${meta.title}&desc=${meta.description}&imgUrl=https://brian.dev/fixed/images/IMG_7808.png`,
            width: 1200,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        siteName: 'brian.dev',
      }}
    />
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to Liam"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-lg text-zinc-500 dark:text-zinc-200"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-500 dark:bg-zinc-200" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
            <Bookmark
                    image="/fixed/images/amazon.jpg"
                    href="https://www.amazon.com/hz/wishlist/ls/RX5BWOO4424G?ref_=wl_share"
                    title="Liam's Amazon Wishlist"
                >
                    Send Liam some cheer from his Amazon Wishlist, specifically curated for his unique needs.
                </Bookmark>
          </div>
        </div>
      </Container>
    </>
  )
}
