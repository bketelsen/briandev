import { Container } from '@/components/Container'
import { Prose } from './Prose'
export function PageLayout({ meta, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {meta.title}
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          {meta.intro}
        </p>
      </header>
      <Prose className="mt-8">{children}</Prose>
    </Container>
  )
}
