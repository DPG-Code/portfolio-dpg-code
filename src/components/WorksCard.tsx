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
    <article className='flex flex-col overflow-hidden'>
      <div className='px-6 w-full h-screen min-h-[780px] bg-[#F3D335] flex flex-col items-center justify-center gap-12 relative   sm:min-h-[960px] sm:px-16   lg:px-24   2xl:px-36'>
        <motion.header
          className='w-full flex flex-col items-center justify-center gap-12   sm:flex-row sm:justify-between sm:gap-12   2xl:gap-24'
          key={animationKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <section className='w-full text-[#0D0D0D] flex flex-col gap-6   sm:w-1/2 sm:justify-center   lg:gap-6 lg:max-w-[500px]   2xl:gap-8 2xl:max-w-[700px]'>
            <header>
              <h3 className='mb-4 font-black text-4xl relative   lg:mb-5 lg:text-5xl   2xl:mb-7 2xl:text-[5rem]'>
                {project.title.toUpperCase()}
              </h3>
              <p className='max-w-[280px] font-semibold text-sm opacity-80   lg:max-w-[620px] lg:text-2xl   2xl:text-3xl'>
                {project.description}
              </p>
            </header>
            <ul className='font-bold text-[10px] flex flex-wrap gap-x-3 gap-y-1   lg:text-lg lg:gap-x-6 lg:gap-y-2   2xl:text-xl'>
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
              className='icon-work font-bold text-base flex items-center justify-start gap-2   lg:text-2xl lg:gap-4   2xl:text-3xl'
            >
              OPEN PROJECT
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-5 h-5   2xl:w-8 2xl:h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </a>
          </section>
          <aside className='flex items-center justify-center   sm:w-1/2 sm:justify-end'>
            <a
              className='w-full flex items-center justify-center hover:scale-105 transition duration-200'
              href={project.url}
              target='_blank'
            >
              <motion.img
                className='w-72 h-auto drop-shadow-2xl  lg:w-full lg:aspect-video'
                width='820'
                height='460'
                src={project.img}
                alt={project.title}
                key={animationKey}
                initial={{ x: '100%',opacity: 0 }}
                animate={{ x: 0,opacity: 1 }}
                exit={{ x: '-100%',opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </a>
          </aside>
        </motion.header>
        <footer className='w-full flex justify-center   sm:justify-start'>
          <motion.span
            className='text-[#F3D335] titleEffect font-extrabold text-7xl   lg:text-9xl   2xl:text-[156px]'
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
        <div className='w-full flex items-center justify-center gap-6 text-[#0D0D0D]   xl:gap-12'>
          <button
            id='prev-project'
            data-testid='prev-project'
            aria-label='View previous project'
            onClick={prevProject}
            className='hover:scale-110 transition'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='w-10 h-10   lg:w-12 lg:h-12   2xl:w-16 2xl:h-16'
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
            className='hover:scale-110 transition'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='w-10 h-10   lg:w-12 lg:h-12   2xl:w-16 2xl:h-16'
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
