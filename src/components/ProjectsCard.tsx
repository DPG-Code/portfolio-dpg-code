import { useState } from 'react'
import { works } from '../consts.ts'
import { Technologies } from './Technologies.tsx'
import type { TechnologieType } from '../types'

interface ProjectType {
  title: string
  description: string
  technologies: string[]
  img: string
  url: string
}

export default function WorksCard() {
  const project: ProjectType = works[0]

  return (
    <article className='project-card p-2 flex flex-col overflow-hidden rounded-[32px] xl:p-3 xl:rounded-[36px]'>
      <div className='glare-card'></div>
      <div className='project-card-content p-8 py-10 w-full flex flex-col items-center justify-center gap-6 rounded-[24px] xl:p-14 xl:gap-2 2xl:p-20'>
        <div className='glare-content'></div>
        <header
          className='w-full flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between xl:gap-2'
        >
          <section className='w-full text-white flex flex-col gap-6 sm:w-1/2 sm:justify-center lg:gap-6 2xl:gap-8'>
            <header>
              <h3 className='mb-4 font-bold text-2xl relative lg:mb-5 lg:text-3xl 2xl:mb-7 2xl:text-7xl'>
                {project.title.toUpperCase()}
              </h3>
              <p className='max-w-[280px] font-normal text-xs text-neutral-400 lg:max-w-[460px] lg:text-lg 2xl:max-w-[620px] 2xl:text-3xl'>
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
          <img
            className='w-full h-auto max-w-[960px] aspect-video drop-shadow-2xl rounded-lg sm:w-1/2 sm:justify-end xl:rounded-xl 2xl:rounded-3xl'
            src={project.img}
            alt={project.title}
          />
        </header>
        <footer className='w-full flex justify-center sm:justify-start'>
          <span
            className='text-transparent titleEffect font-extrabold text-5xl lg:text-9xl 2xl:text-[172px]'
          >
            01
          </span>
        </footer>
      </div>
    </article>
  )
}
