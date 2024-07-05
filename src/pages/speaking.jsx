import { NextSeo } from 'next-seo';
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import  siteMeta from '@/data/siteMeta'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
    <NextSeo
      title="Speaking - Brian Ketelsen"
      description={siteMeta.description}
      canonical="https://brian.dev/speaking"
      openGraph={{
        url: 'https://brian.dev/speaking',
        images: [
          {
            url: `https://og.brian.dev/api/og?title=Speaking&desc=I’ve spoken at events all around the world and been interviewed for many podcasts.`,
            width: 1200,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        siteName: 'brian.dev',
      }}
    />
      <SimpleLayout
        title="I’ve spoken at events all around the world and been interviewed for many podcasts."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
          <Appearance
              href="https://www.youtube.com/watch?v=MzTcsI6tn-0"
              title="Code Like the Go Team"
              description="Tips, tricks, and best practices for writing Go code that's idiomatic, readable, and maintainable."
              event="GopherCon Russia 2018"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=mxlJqrVSalY"
              title="Bringing Go to the Enterprise"
              description="In this talk I'll share my unique experiences as a trainer and author bringing Go to enterprise companies. We'll talk about what works well, what needs improvement, and what we can do as a community to foster Go adoption in more companies. In 2016 I quit my job and set out to train the world on how to use Go and Kubernetes. Over the course of the last 18 months I've learned a lot of things about Go, and I want to share them with you in this talk."
              event="Golang UK Conference 2017"
              cta="Watch video"
            />

          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://popcast-d9f7b6dc.simplecast.com/episodes/episode-76-go-roadhouse-with-microsofts-brian-ketelsen"
              title="

              Episode 76 - GO Roadhouse with Microsoft's Brian Ketelsen"
              description="Go, Guitars, Roadhouse, and so much more with Dan Papandrea."
              event="The POPCAST, July 7, 2021"
              cta="Listen to podcast"
            />

          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
