interface IconViewProps {
  url: string
  name: string
  weigth: string
}

export const SunIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='#FFFFFF'
      className='w-4 h-4 lg:w-5 lg:h-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
      />
    </svg>
  )
}

export const MoonIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='#0D0D0D'
      className='w-4 h-4 lg:w-5 lg:h-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
      />
    </svg>
  )
}

export const IconDownload = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='#F3D335'
      className='w-3 h-3   sm:w-4 sm:h-4   2xl:w-6 2xl:h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
      />
    </svg>
  )
}

export const IconView: React.FC<IconViewProps> = ({ url,name,weigth }) => {
  return (
    <a
      href={url}
      target='_blank'
      className={`icon-animation ${weigth === 'bold' ? 'font-bold' : 'font-semibold'
        } text-sm flex items-center justify-start gap-2   lg:text-2xl lg:gap-4   2xl:text-3xl`}
    >
      OPEN {name}
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
  )
}

export const LeftArrow = () => {
  return (
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
  )
}

export const RightArrow = () => {
  return (
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
  )
}
