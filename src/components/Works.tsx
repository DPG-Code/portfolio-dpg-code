import { useState,useEffect } from 'react'
import { IconView,LeftArrow,RightArrow } from './Icons.tsx'
import { works } from '../consts.ts'

export default function Works() {
  const [position,setPosition] = useState(0)
  const [project,setProject] = useState(works[position])

  const prevProject = () => {
    if (position > 0) setPosition((pos) => pos - 1)
    else setPosition((pos) => works.length - 1)
  }

  const nextProject = () => {
    if (position !== works.length - 1) setPosition((pos) => pos + 1)
    else setPosition(0)
  }

  useEffect(() => {
    setProject(works[position])
  },[position])

  return (
    <section
      id='works'
      className='flex flex-col   sm:py-16   lg:py-24   2xl:py-36'
    >
      <h2 className='my-16 w-full z-40 font-bold text-center text-3xl text-[#FFFFFF] lg:text-5xl   2xl:text-7xl'>
        Works
        <span className='text-[#f3d335]'>.</span>
      </h2>
      <article className='flex flex-col'>
        <div className='px-6 w-full h-screen min-h-[780px] bg-[#F3D335] flex flex-col items-center justify-center gap-12 relative   sm:min-h-[960px] sm:px-16   lg:px-24   2xl:px-36'>
          <header className='w-full flex flex-col items-center justify-center gap-12   sm:flex-row sm:justify-between sm:gap-12   2xl:gap-24'>
            <section className='w-full text-[#0D0D0D] flex flex-col gap-4   sm:w-1/2 sm:justify-center   lg:gap-6 lg:max-w-[500px]   2xl:gap-8 2xl:max-w-[700px]'>
              <header>
                <h3 className='mb-4 font-extrabold text-5xl relative   lg:mb-5 lg:text-6xl   2xl:mb-7 2xl:text-8xl'>
                  {project.title}
                </h3>
                <p className='Inter-Italic font-normal text-sm opacity-80   lg:text-2xl   2xl:text-3xl'>
                  {project.description}
                </p>
              </header>
              <ul className='font-semibold text-xs flex flex-wrap gap-x-2 gap-y-1   lg:text-lg   2xl:text-xl'>
                {project.technologies.map((tech,index) =>
                  index + 1 < project.technologies.length ? (
                    <li
                      key={tech}
                      className='flex items-center justify-center gap-x-2'
                    >
                      {tech}
                      <div className='w-1 h-1 bg-[#0D0D0D] rounded-full   lg:w-2 lg:h-2'></div>
                    </li>
                  ) : (
                    <li key={tech}>{tech}</li>
                  )
                )}
              </ul>
              <IconView
                url={project.url}
                name={project.title.toUpperCase()}
                weigth='bold'
              />
            </section>
            <aside className='flex items-center justify-center   sm:w-1/2 sm:justify-end'>
              <a
                className='w-full flex items-center justify-end'
                href={project.url}
                target='_blank'
              >
                <img
                  className='transition-fade w-72 h-auto drop-shadow-2xl hover:scale-105   lg:w-full lg:aspect-video'
                  width='820'
                  height='460'
                  src={project.img}
                  alt={project.title}
                />
              </a>
            </aside>
          </header>
          <footer className='w-full flex justify-center   sm:justify-start'>
            <span className='text-[#F3D335] titleEffect font-extrabold text-7xl   lg:text-9xl   2xl:text-[156px]'>
              {position < 10 && '0'}
              {position + 1}
            </span>
          </footer>
          <div className='w-full flex items-center justify-center gap-6 text-[#0D0D0D]   xl:gap-12'>
            <button
              id='prev-project'
              aria-label='View previous project'
              onClick={prevProject}
            >
              <LeftArrow />
            </button>
            <button
              id='next-project'
              aria-label='View next project'
              onClick={nextProject}
            >
              <RightArrow />
            </button>
          </div>
        </div>
      </article>
    </section>
  )
}
