import { NextSeo } from 'next-seo'
import siteMeta from '@/data/siteMeta'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <NextSeo
        title="Uses - Aubrey Zulu"
        description={siteMeta.description}
        canonical="https://aubreyzulu.com/uses"
        openGraph={{
          url: 'https://aubreyzulu.com/uses',
          images: [
            {
              url: `https://og.aubreyzulu.com/api/og?title=Uses&desc=Things I use every day to get my work done.`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'aubreyzulu.com',
        }}
      />
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="Nobody requested, however, here are the tools I use for software development, productivity, or to trick myself into feeling productive when I'm actually procrastinating. Below is a comprehensive list of my favorite items."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, M1 , 16GB RAM (2021)">
              I don&apos;t know how Apple makes such a tiny laptop so fast and
              responsive, no matter what load I put on it.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
