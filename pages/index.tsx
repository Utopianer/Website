import Projects from 'components/Projects'
import Timeline from 'components/Timeline'

import Container from '../components/Container'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
        <div className="flex items-center w-full mb-16">
          <div className="relative flex items-center">
            <img
              alt="sasicodes"
              height={90}
              width={90}
              src="https://metadata.ens.domains/mainnet/avatar/sasi.eth"
              className="my-auto rounded-full filter grayscale"
            />
          </div>
          <div className="flex flex-col pl-8">
            <div className="mb-1 text-4xl font-bold tracking-tight text-gray-700 md:text-5xl dark:text-gray-200">
              Sasidharan
            </div>
            <h2 className="text-gray-700 dark:text-gray-200">
              Frontend Engineer at{' '}
              <span className="font-semibold text-orange-600">HappyFox</span>
            </h2>
          </div>
        </div>
        <p className="mb-16 leading-7 tracking-wide text-gray-600 dark:text-gray-400">
          A software engineer, interested in web design, web3, user experience
          and experimenting new technologies.
        </p>
        <Projects />
        <span className="h-14" />
        <Timeline />
        <span className="h-14" />
        <Subscribe />
      </div>
    </Container>
  )
}
