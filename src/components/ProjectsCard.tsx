import { useState } from 'react'
import { motion } from 'framer-motion'
import { works } from '../consts.ts'
import { Technologies } from './Technologies.tsx'
import type { TechnologieType } from '../types'

export default function WorksCard() {
  const [project,setProject] = useState(works[0])
  const [animationKey,setAnimationKey] = useState(0)

  const prevProject = () => {
    if (works.indexOf(project) > 0) setProject(works[works.indexOf(project) - 1])
    else setProject(works[works.length - 1])
    setAnimationKey(animationKey + 1)
  }

  const nextProject = () => {
    if (works.indexOf(project) === works.length - 1) setProject(works[0])
    else setProject(works[works.indexOf(project) + 1])
    setAnimationKey(animationKey + 1)
  }

  return (
    <article className='project-card p-2 flex flex-col overflow-hidden rounded-[32px] xl:p-3 xl:rounded-[36px]'>
      <div className='glare-card'></div>
      <div className='project-card-content p-6 py-12 w-full flex flex-col items-center justify-center gap-2 rounded-[24px] xl:p-12 xl:gap-0 2xl:p-16'>
        <div className='glare-content'></div>
        <motion.header
          className='w-full flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between sm:gap-0'
          key={animationKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <section className='w-full text-white flex flex-col gap-6 sm:w-2/5 sm:justify-center lg:gap-6 2xl:gap-8 2xl:w-1/2'>
            <header>
              <h3 className='mb-4 font-bold text-2xl relative lg:mb-5 lg:text-4xl 2xl:mb-7 2xl:text-7xl'>
                {project.title.toUpperCase()}
              </h3>
              <p className='max-w-[280px] font-normal text-xs text-neutral-400 lg:max-w-[620px] lg:text-lg 2xl:text-3xl'>
                {project.description}
              </p>
            </header>
            <ul className='font-bold text-[10px] flex flex-wrap gap-x-3 gap-y-1 lg:text-lg lg:gap-x-6 lg:gap-y-2 2xl:text-xl'>
              {project.technologies.map((tech,index) =>
                <li
                  key={tech}
                  className='tooltip flex items-center justify-center gap-x-2'
                >
                  <Technologies icon={tech as TechnologieType} />
                  <span className="tooltiptext">{tech}</span>
                </li>
              )}
            </ul>
            <a
              href={project.url}
              target='_blank'
              className='icon-work max-w-max text-[#a3a3a3] hover:text-white font-medium text-xs flex items-center justify-start gap-3 transition lg:text-xl lg:gap-4 2xl:text-2xl'
            >
              <p>OPEN PROJECT</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-4 h-4 2xl:w-8 2xl:h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </a>
          </section>
          <motion.img
            className='w-full h-auto max-w-[960px] aspect-video drop-shadow-2xl sm:w-3/5 sm:justify-end 2xl:w-1/2'
            src={project.img}
            alt={project.title}
            key={animationKey}
            initial={{ x: '100%',opacity: 0 }}
            animate={{ x: 0,opacity: 1 }}
            exit={{ x: '-100%',opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.header>
        <footer className='mb-6 w-full flex justify-center sm:justify-start xl:mb-0'>
          <motion.span
            className='text-transparent titleEffect font-extrabold text-7xl lg:text-9xl 2xl:text-[172px]'
            key={animationKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {works.indexOf(project) < 10 && '0'}
            {works.indexOf(project) + 1}
          </motion.span>
        </footer>
        <div className='w-full flex items-center justify-center gap-6 text-neutral-500 xl:gap-12'>
          <button
            id='prev-project'
            data-testid='prev-project'
            aria-label='View previous project'
            onClick={prevProject}
            className='hover:text-white hover:scale-110 transition'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='w-10 h-10 lg:w-12 lg:h-12 2xl:w-20 2xl:h-20'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
          <button
            id='next-project'
            data-testid='next-project'
            aria-label='View next project'
            onClick={nextProject}
            className='hover:text-white hover:scale-110 transition'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='w-10 h-10 lg:w-12 lg:h-12 2xl:w-20 2xl:h-20'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
