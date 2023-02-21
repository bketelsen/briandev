import { NextSeo } from 'next-seo';
import { Card } from '@/components/Card'
import { Bookmark } from '@/components/Bookmark'
import { getAllLiam } from '@/lib/getAllLiam'
import { formatMonthYear, formatDate } from '@/lib/formatDate'
import siteMeta from '@/data/siteMeta'
import liamsJourney from '@/images/liam/liamsjourney.png'
import Image from 'next/future/image'
import { Container } from '@/components/Container'

function Article({ article }) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title href={`/liam/${article.slug}`}>
                    {article.title}
                </Card.Title>
                <Card.Eyebrow
                    as="time"
                    dateTime={article.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(article.date)}
                </Card.Eyebrow>
                <Card.Description>{article.description}</Card.Description>
                <Card.Cta>Read update</Card.Cta>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={article.date}
                className="mt-1 hidden md:block"
            >
                {formatMonthYear(article.date)}
            </Card.Eyebrow>
        </article>
    )
}

export default function ArticlesIndex({ articles }) {
    const headline = 'Updates on Liam’s journey with Muenke Syndrome'
    return (
        <>
    <NextSeo
      title="Articles - Brian Ketelsen"
      description={siteMeta.description}
      canonical="https://brian.dev/liam"
      openGraph={{
        url: 'https://brian.dev/liam',
        images: [
          {
            url: `https://og.brian.dev/api/og?title=Liam&desc=${headline}&imgUrl=https://brian.dev/fixed/images/IMG_7808.png`,
            width: 1200,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        siteName: 'brian.dev',
      }}
    />
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={liamsJourney}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            Liam’s Journey - Living with Muenke Syndrome
                        </h1>
                        <div className="mt-6 space-y-7 text-lg text-zinc-600 dark:text-zinc-400">
                            <div className="lg:order-first lg:row-span-2">

                                <div className="mt-6 space-y-7 text-lg prose dark:prose-invert text-zinc-600 dark:text-zinc-400">
                                    <p>
                                    Liam was born on May 14, 2021. After an ultrasound, x-ray and CT scan, Liam was diagnosed with <a href="https://www.mayoclinic.org/diseases-conditions/craniosynostosis/symptoms-causes/syc-20354513">bicoronal craniosynostosis</a> at one month old. We didn’t know his craniosynostosis was caused by <a href="https://www.seattlechildrens.org/conditions/muenke-syndrome/">Muenke Syndrome</a> until Liam was six months old. 
                                     Muenke Syndrome is characterized by craniosynostosis (the premature fusion of one or more skull sutures), hearing loss and developmental delays. 
                                     Soon after the diagnosis, we met with our pediatric plastic surgeon and neurosurgeon to discuss how they were going to correct Liam’s craniosynostosis. 
                                     The biggest concern with any craniosynostosis diagnosis is the lack of room for a child’s brain to grow. It can eventually cause seizures, developmental delays and other complications including death.
                                    </p>

                                </div>
                            </div>
                            <div className="flex max-w-3xl flex-col space-y-16">
                                {articles.map((article) => (
                                    <Article key={article.slug} article={article} />
                                ))}
                            </div>

                        </div>

                    </div>

                </div>
                <div className="mt-8">

                    <Bookmark
                        image="/fixed/images/amazon.jpg"
                        href="https://www.amazon.com/hz/wishlist/ls/RX5BWOO4424G?ref_=wl_share"
                        title="Liam's Amazon Wishlist"
                    >
                        Send Liam some cheer from his Amazon Wishlist, specifically curated for his unique needs.
                    </Bookmark>
                </div>
            </Container>

        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            articles: (await (await getAllLiam()).reverse()).map(({ component, ...meta }) => meta),
        },
    }
}
