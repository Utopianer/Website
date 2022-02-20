import Container from 'components/Container'

export default function Uses() {
  return (
    <Container
      title="Uses"
      description="Here's tech and tools that I'm using everyday."
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="w-full text-gray-800 dark:text-gray-200">
          <h2 className="mb-3 text-xl">Work setup</h2>
          <ul className="ml-3 list-disc list-inside">
            <li>Macbook Pro 14'</li>
            <li>Macbook Air 13'</li>
            <li>Logitech G304</li>
            <li>LG Monitor 22'</li>
          </ul>
        </div>
      </article>
    </Container>
  )
}
