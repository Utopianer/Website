import Container from 'components/Container'
import SnippetCard from 'components/SnippetCard'
import { getAllFilesFrontMatter } from 'helpers/mdx'
import React from 'react'
import { FrontMatter } from 'types'

interface Props {
  snippets: FrontMatter[]
}

const Index = (props: Props) => {
  const { snippets } = props

  return (
    <Container
      title="Snippets"
      description="Code snippets with detailed walkthrough and without unwanted theory."
    >
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {snippets.map((snippet, idx) => (
            <SnippetCard
              key={idx}
              title={snippet.title}
              description={snippet.description}
              slug={snippet.slug}
              gradient="from-[#FDE68A]/10 via-[#FCA5A5]/20 to-[#FECACA]/20"
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Index

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter()
  return { props: { snippets } }
}
