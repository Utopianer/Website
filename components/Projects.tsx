import React from 'react'

import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <>
      <h3
        id="projects"
        className="mb-10 text-2xl font-semibold tracking-tight text-gray-700 md:text-4xl dark:text-gray-200"
      >
        Projects
      </h3>
      <div className="grid w-full gap-6 md:grid-cols-2">
        <ProjectCard
          title="Lenstube"
          description="Decentralized video platform."
          className="from-[#D8B4FE]/20 to-[#818CF8]/20"
          href="https://lenstube.xyz"
          images={['QmSQQuXnoUMMj6DMWvptygJMawT34bUSTkb2YTpwL6SLu1']}
        />
        <ProjectCard
          title="Snapdraw"
          description="Draw and mint anything."
          className="from-[#D8B4FE]/20 to-[#818CF8]/20"
          href="https://mint.sasi.codes"
          images={[
            'QmdJGewR6LGVdnGXx2umVLofLJvUP5QnnctPt18hvfXXdX',
            'QmVgWpSsRXPa1jcJsKRfsbrVDuUTDR91VxfQb94yqKNnq5'
          ]}
        />
        <ProjectCard
          title="Generative Art Collection"
          description="Completely on-chain random NFTs."
          className="from-[#41AAD4]/20 to-[#41EAD4]/20"
          href="https://gorilla-gang.vercel.app"
          images={['QmXc7DmhUczBp1252wY5kGPve5Ajwseve7oYasHSPkAjY1']}
        />
        <ProjectCard
          title="Lag and Log"
          description="Knowledge sharing platform."
          images={[
            'QmVxeCAdaq6dLJZnR9CheEjxFgGad8rxt9CSd3ecnqE2Ym',
            'QmPU4Lsqp5UpVQTCDfWyxQAMkzk13QNYNUSb9Z1vDfGxVa'
          ]}
          href="https://lagandlog.com"
          className="from-[#FDE68A]/20 via-[#FCA5A5]/20 to-[#FECACA]/20"
        />
      </div>
    </>
  )
}

export default Projects
