import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type SnippetType = {
  frontMatter: FrontMatter
  mdxSource: MDXRemoteSerializeResult
}
export type FrontMatter = {
  title: string
  summary: string
  date: string
  slug: string
  image: string
}
