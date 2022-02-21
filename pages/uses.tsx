import Container from 'components/Container'
import Tooltip from 'components/Tooltip'
import { USES_APPS } from 'helpers/constants'
import Image from 'next/image'

export default function Uses() {
  return (
    <Container
      title="Uses"
      description="Here's tech and tools that I'm using everyday."
    >
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="mb-10">
          <div className="flex flex-wrap gap-5">
            {USES_APPS.map((app, idx) => (
              <Tooltip key={idx} placement="top" content={app.name}>
                <span>
                  <Image
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
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-200 md:text-3xl">
            Work setup
          </h3>
          <ul className="ml-3 list-disc list-inside">
            <li>Macbook Pro 14'</li>
            <li>Macbook Air 13'</li>
            <li>Logitech G304</li>
            <li>LG Monitor 27'</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
