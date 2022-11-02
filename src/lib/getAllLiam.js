import glob from 'fast-glob'
import * as path from 'path'

async function importLiam(liamFilename) {
  let { meta, default: component } = await import(
    `../pages/liam/${liamFilename}`
  )
  return {
    slug: liamFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllLiam() {
  let liamFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/liam'),
  })

  let articles = await Promise.all(liamFilenames.map(importLiam))

  return articles.sort((a, z) => new Date(a.date) - new Date(z.date))
}
