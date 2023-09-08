const works = [
  {
    title: 'ShoppyFree',
    description:
      'Shop with speed and ease on our Next.js-powered ecommerce site. Find what you need and buy it fast!',
    technologies: ['NEXT.JS', 'MONGO DB', 'STRAPI', 'MICRO', 'TAILWIND'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/shoppyfree_xymwpk',
    url: 'https://shoppyfree.vercel.app/'
  },
  {
    title: 'JobsTracker',
    description: 'Finalist project in the Infojobs Hackathon.',
    technologies: ['NEXT.JS', 'REACT.JS', 'TAILWIND'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/jobstracker_kjyzcl',
    url: 'https://infojobs-tracker.vercel.app/'
  },
  {
    title: 'Xkcd comics',
    description:
      'Get ready to chuckle - this project lets you browse and read xkcd comics with ease and enjoyment.',
    technologies: ['NEXT.JS', 'TAILWIND', 'NEXT UI', 'ALGOLIA'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/xkcd_w6ppjn',
    url: 'https://xkcd-app-taupe.vercel.app/'
  },
  {
    title: 'Notes app',
    description:
      'Stay organized and productive - my app is a sleek and intuitive notes app for all your needs.',
    technologies: [
      'REACT.JS',
      'NODE.JS',
      'MONGO BD',
      'JEST/CYPRESS',
      'TAILWIND'
    ],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/notes_idcfau',
    url: 'https://notes-app-dpgcode.up.railway.app/'
  },
  {
    title: 'Weather app',
    description:
      'Experience the power of Svelte - my project delivers a fast and seamless weather app, built with cutting-edge technology.',
    technologies: ['SVELTE KIT', 'SVELTE'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/weather_deyk7l',
    url: 'https://weather-app-dpg.vercel.app/'
  },
  {
    title: 'Gifree',
    description:
      'Find the perfect gif - my project is a user-friendly website that lets you search, share and download gifs with ease.',
    technologies: ['REACT.JS', 'TYPESCRIPT', 'DENO'],
    img: 'https://res.cloudinary.com/dhpxqwsym/image/upload/c_fill,h_240,q_100,w_384/v1677061650/works/portfolio/gifree_ztfjuj',
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
