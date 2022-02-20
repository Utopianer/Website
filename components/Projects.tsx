import React from 'react'

import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <>
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-gray-700 md:text-4xl dark:text-gray-200">
        Projects
      </h3>
      <div className="grid w-full gap-6 md:grid-cols-2">
        <ProjectCard
          title="Generative Art Collection"
          description="Completely on-chain random NFTs."
          gradient="from-[#D8B4FE]/20 to-[#818CF8]/20"
          href="https://gorilla-gang.vercel.app"
          images={[
            'https://cloudflare-ipfs.com/ipfs/QmXc7DmhUczBp1252wY5kGPve5Ajwseve7oYasHSPkAjY1'
          ]}
        />
        <ProjectCard
          title="Lag and Log"
          description="Knowledge sharing platform."
          images={[
            'https://cloudflare-ipfs.com/ipfs/QmVxeCAdaq6dLJZnR9CheEjxFgGad8rxt9CSd3ecnqE2Ym',
            'https://cloudflare-ipfs.com/ipfs/QmPU4Lsqp5UpVQTCDfWyxQAMkzk13QNYNUSb9Z1vDfGxVa'
          ]}
          href="https://lagandlog.com"
          gradient="from-[#FDE68A]/20 via-[#FCA5A5]/20 to-[#FECACA]/20"
        />
      </div>
    </>
  )
}

export default Projects
