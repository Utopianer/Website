import Container from 'components/Container'
import Tooltip from 'components/Tooltip'
import { USES_APPS, USES_BOOKMARKS } from 'helpers/constants'

export default function Uses() {
  return (
    <Container
      title="Uses"
      description="Some of my favourite websites, apps and tools."
    >
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="mb-10">
          <h3 className="mb-6 text-2xl font-semibold tracking-tight text-gray-700 dark:text-gray-200 md:text-3xl">
            Stack
          </h3>
          <div className="flex flex-wrap gap-5">
            {USES_APPS.map((app, idx) => (
              <Tooltip key={idx} content={app.name}>
                <span>
                  <img
                    height={35}
                    width={35}
                    className="bg-gray-100 rounded-lg dark:bg-gray-800"
                    src={app.image}
                    alt=""
                    draggable={false}
                  />
                </span>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="w-full text-gray-800 dark:text-gray-200">
          <h3 className="mb-6 text-2xl font-semibold tracking-tight text-gray-700 dark:text-gray-200 md:text-3xl">
            Bookmarks
          </h3>
          <ul className="ml-3 space-y-2 list-disc list-inside">
            {USES_BOOKMARKS.map(({ link, name }, idx) => (
              <li key={idx}>
                <a
                  href={link}
                  className="transition-all ease-in hover:border-orange-300 hover:duration-300 hover:border-b-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
