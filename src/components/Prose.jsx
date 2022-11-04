import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        'pt-6 prose prose-lg text-xl max-w-none dark:prose-invert ',
        // headings
        // lead
        // links
        // link underline
        // pre
        // hr
        'dark:prose-hr:border-zinc-800'
      )}
      {...props}
    />
  )
}
