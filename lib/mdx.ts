import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

const root = process.cwd()

export const getFiles = async () => {
  return fs.readdirSync(path.join(root, 'content', 'snippets'))
}

export const getFileBySlug = async (slug: string) => {
  const source = fs.readFileSync(
    path.join(root, 'content', 'snippets', `${slug}.mdx`),
    'utf8'
  )

  const parsedFile = matter(source)

  const data = parsedFile.data
  const content = parsedFile.content

  const mdxSource = await serialize(content)

  const result = {
    mdxSource,
    frontMatter: {
      ...data
    }
  }

  return result
}

export const getAllFilesFrontMatter = async () => {
  const files = fs.readdirSync(path.join(root, 'content', 'snippets'))

  const posts = files
    .map((postSlug: string) => {
      const source = fs.readFileSync(
        path.join(root, 'content', 'snippets', postSlug),
        'utf8'
      )
      const parsedFile = matter(source)

      return parsedFile.data
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}
