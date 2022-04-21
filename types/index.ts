import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type SnippetType = {
  frontMatter: FrontMatter
  mdxSource: MDXRemoteSerializeResult
}
export type FrontMatter = {
  title: string
  description: string
  date: string
  slug: string
  image: string
}
export type NFTType = {
  permalink: string
  metadata: {
    name: string
    image_url: string
    animation_url: string
  }
}
export type PoapType = {
  event: {
    name: string
    image_url: string
  }
}
