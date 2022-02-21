import Container from 'components/Container'
import MDXComponents from 'components/mdx/MDXComponents'
import { getFileBySlug, getFiles } from 'lib/mdx'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'
import { SnippetType } from 'types'

const Snippet = ({ snippet }: { snippet: SnippetType }) => {
  const { isFallback } = useRouter()

  if (isFallback || !snippet) {
    return <div>Loading...</div>
  }

  return (
    <Container {...snippet.frontMatter}>
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-semibold text-gray-800 md:text-4xl dark:text-gray-200">
          {snippet.frontMatter.title}
        </h1>
        <div className="w-full mt-4 text-gray-800 max-w-none dark:text-gray-200">
          <MDXRemote
            {...snippet.mdxSource}
            components={{
              ...MDXComponents
            }}
          />
        </div>
      </article>
    </Container>
  )
}

export default Snippet

export const getStaticPaths: GetStaticPaths = async () => {
  const snippets = await getFiles()

  return {
    paths: snippets.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const snippet = await getFileBySlug(params!.slug as string)
    return { props: { snippet } }
  } catch (error) {
    console.log(error)
    return { notFound: true }
  }
}
