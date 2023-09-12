import { NextSeo } from 'next-seo';
import  siteMeta from '@/data/siteMeta'
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
      title="Uses - Brian Ketelsen"
      description={siteMeta.description}
      canonical="https://brian.dev/uses"
      openGraph={{
        url: 'https://brian.dev/uses',
        images: [
          {
            url: `https://og.brian.dev/api/og?title=Uses&desc=Things I use every day to get my work done.`,
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
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, M1 Max, 64GB RAM (2021)">
              I don&apos;t know how Apple makes such a tiny laptop so fast and responsive, no matter what load I put on it.
            </Tool>
            <Tool title="Dell XPS 8950">
              12th Generation i7 with oodles of memory and 4TB of NVMe drives running Bluefin Linux.
            </Tool>
            <Tool title="Moonlander Keyboard">
              I had terrible RSI problems until I switched to the Moonlander and the Apple Magic Trackpad.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              It even works on Linux. Who knew?
            </Tool>

          </ToolsSection>

        </div>
      </SimpleLayout>
    </>
  )
}
