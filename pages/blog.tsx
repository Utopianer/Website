import BlogPost, { Log } from 'components/BlogPost'
import Container from 'components/Container'

export default function Blog({ posts }: { posts: Log[] }) {
  return (
    <Container
      title="Blog"
      description="Thoughts on the software, programming and tech."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 md:text-4xl dark:text-gray-200">
          All Posts
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          {`${posts.length} logs found`}
        </p>
        {posts.map((post) => (
          <BlogPost key={post.slug} {...post} />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  let response = await fetch(process.env.LGLG_MY_LOGS as string)
  const posts = await response.json()
  return {
    props: { posts },
    revalidate: 86400 //  1 day
  }
}
