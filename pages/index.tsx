import HelperProjects from 'components/HelperProjects'
import ChevronRightIcon from 'components/icons/ChevronRight'
import Projects from 'components/Projects'
import Timeline from 'components/Timeline'
import Link from 'next/link'

import Container from '../components/Container'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
        <div className="flex items-center w-full mb-10">
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

        <p className="mb-10 leading-7 tracking-wide text-gray-600 dark:text-gray-400">
          A product developer, passionate about
          <span className="mx-1 text-transparent transition-all duration-500 bg-gradient-to-tr from-purple-400 bg-clip-text to-pink-600">
            web design
          </span>
          ,
          <span className="mx-1 text-transparent transition-all duration-700 bg-gradient-to-tr to-purple-400 bg-clip-text from-pink-600">
            user experience
          </span>
          and the
          <span className="mx-1 text-transparent transition-all duration-700 bg-gradient-to-tr to-purple-400 bg-clip-text from-pink-600">
            web3
          </span>
          ecosystem.
        </p>

        <Link href="blog">
          <a className="inline-flex items-center mb-2 text-lg font-semibold tracking-tight text-gray-700 text-opacity-80 hover:text-opacity-100 dark:text-gray-200">
            Posts
            <ChevronRightIcon />
          </a>
        </Link>

        <Link href="snippets">
          <a className="inline-flex items-center mb-10 text-lg font-semibold tracking-tight text-gray-700 text-opacity-80 hover:text-opacity-100 dark:text-gray-200">
            Snippets
            <ChevronRightIcon />
          </a>
        </Link>

        <Projects />
        <span className="h-14" />
        <HelperProjects />
        <span className="h-14" />
        <Timeline />
        <span className="h-14" />
        <Subscribe />
      </div>
    </Container>
  )
}
