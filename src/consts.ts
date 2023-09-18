const works = [
  {
    title: 'ShoppyFree',
    description:
      'Next.js-based e-commerce platform packed with feature-rich functionalities.',
    technologies: ['NEXT.JS', 'MONGO DB', 'STRAPI', 'MICRO', 'TAILWIND'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/shoppyfree_otpfco',
    url: 'https://shoppyfree.vercel.app/'
  },
  {
    title: 'ChatVerse',
    description:
      'Real-time chat web application developed in Next.js for seamless communication.',
    technologies: ['NEXT.JS', 'TYPESCRIPT', 'MONGO DB', 'PRISMA', 'PUSHER', 'TAILWIND'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/chatverse_z3khjp',
    url: 'https://chat-verse-azure.vercel.app/'
  },
  {
    title: 'JobsTracker',
    description: 'Infojobs hackathon finalist, a tool to gather job position information effectively.',
    technologies: ['NEXT.JS', 'REACT.JS', 'TAILWIND'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/jobstracker_mlpo6y',
    url: 'https://infojobs-tracker.vercel.app/'
  },
  {
    title: 'Xkcd comics',
    description:
      'Explore scraped XKCD comics effortlessly on this interactive web platform.',
    technologies: ['NEXT.JS', 'TAILWIND', 'NEXT UI', 'ALGOLIA'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/xkcd_v2wluj',
    url: 'https://xkcd-app-taupe.vercel.app/'
  },
  {
    title: 'Notes app',
    description:
      'User-friendly note-taking web app powered by MongoDB for data storage.',
    technologies: [
      'REACT.JS',
      'NODE.JS',
      'MONGO BD',
      'JEST/CYPRESS',
      'TAILWIND'
    ],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/notesapp_gm3tjr',
    url: 'https://notes-app-dpgcode.up.railway.app/'
  },
  {
    title: 'Weather app',
    description:
      'Stay informed about weather conditions with this Svelte-powered web application.',
    technologies: ['SVELTE KIT', 'SVELTE'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/weatherapp_mjkftd',
    url: 'https://weather-app-dpg.vercel.app/'
  },
  {
    title: 'Gifree',
    description:
      'Enjoy a user-friendly GIF platform with user profiles and favoriting features.',
    technologies: ['REACT.JS', 'TYPESCRIPT', 'DENO'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/gifree_iohqen',
    url: 'https://gi-free.vercel.app/'
  }
]

const moreWorks = [
  {
    title: 'Cleanbg',
    description: 'Quickly remove image backgrounds with our app.',
    picture:
      'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_180,q_100,w_320/v1687790918/works/portfolio/moreworks/cleanbg_g6f1dy',
    url: 'https://clean-bg.vercel.app/',
    tech: ['Svelte', 'Cloudinary', 'Tailwind']
  },
  {
    title: 'WriteRight',
    description: 'English text correction app powered by AI.',
    picture:
      'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_180,q_100,w_320/v1687790918/works/portfolio/moreworks/writeright_kj6jaj',
    url: 'https://github.com/DPG-Code/write-right',
    tech: ['Astro', 'Svelte', 'Cohere AI', 'Tailwind']
  },
  {
    title: 'EricLostie',
    description: 'Fangames website.',
    picture:
      'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_180,q_100,w_320/v1687790918/works/portfolio/moreworks/ericlostie_sgcigi',
    url: 'https://ericlostie.vercel.app/',
    tech: ['Astro', 'Tailwind']
  },
  {
    title: 'Freegames',
    description:
      'Discover your next favorite game - my project is a comprehensive search engine for free video games across all platforms.',
    picture:
      'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_180,q_100,w_320/v1687790918/works/portfolio/moreworks/freegames_zo2aid',
    url: 'https://dpg-games.netlify.app/',
    tech: ['React.JS', 'Wouter', 'Vite']
  }
]

const MEDIA_BUTTONS = [
  {
    href: 'https://github.com/DPG-Code',
    ariaLabel: 'Open my Github',
    label: 'Github',
    tabIndex: '7'
  },
  {
    href: 'https://www.linkedin.com/in/daniel-prieto-gaviria',
    ariaLabel: 'Open my Linkedin',
    label: 'LinkedIn',
    tabIndex: '8'
  },
  {
    href: 'https://www.behance.net/danielprieto7',
    ariaLabel: 'Open my Behance',
    label: 'Behance',
    tabIndex: '9'
  }
]

export { works, moreWorks, MEDIA_BUTTONS }
