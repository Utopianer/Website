import React from 'react'

import ProjectCard from './ProjectCard'

const HelperProjects = () => {
  return (
    <>
      <h3 className="mb-10 text-2xl font-semibold tracking-tight text-gray-700 md:text-4xl dark:text-gray-200">
        Helpers
      </h3>
      <div className="grid w-full gap-6 md:grid-cols-2">
        <ProjectCard
          title="Burner wallet"
          description="Disposable temporary ethereum wallets for quick transfers, deployments, etc."
          gradient="dark:from-gray-800/40 dark:to-gray-800 from-gray-200/40 to-gray-200"
          href="https://wallet.sasi.codes"
        />
        <ProjectCard
          title="IPFS uploader"
          description="Easily upload all types of images to IPFS via browser."
          gradient="dark:from-gray-800/40 dark:to-gray-800 from-gray-200/40 to-gray-200"
          href="https://ipfs.sasi.codes"
        />
      </div>
    </>
  )
}

export default HelperProjects
