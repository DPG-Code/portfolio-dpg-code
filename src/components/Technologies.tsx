import type { TechnologieType } from "../types"

const ICON_TECH = {
  nextjs: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
        <path d="M15 12v-3"></path>
      </svg>
    )
  },
  reactjs: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
        <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
        <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
        <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
        <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
        <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
        <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
      </svg>
    )
  },
  typescript: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path>
        <path d="M9 12h4"></path>
        <path d="M11 12v6"></path>
        <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path>
      </svg>
    )
  },
  tailwind: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
      </svg>
    )
  },
  nodejs: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path>
        <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path>
      </svg>
    )
  },
  mongodb: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 3v19"></path>
        <path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z"></path>
      </svg>
    )
  },
  supabase: () => {
    return (
      <svg className="w-4 h-4 lg:w-6 lg:h-6 2xl:w-10 2xl:h-10" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" />
      </svg>
    )
  },
  cypress: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19.48 17.007a9 9 0 1 0 -7.48 3.993c.896 0 1.691 -.573 1.974 -1.423l3.526 -10.577"></path>
        <path d="M13.5 9l2 6"></path>
        <path d="M10.764 9.411a3 3 0 1 0 -.023 5.19"></path>
      </svg>
    )
  },
  prisma: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4.186 16.202l3.615 5.313c.265 .39 .754 .57 1.215 .447l10.166 -2.718a1.086 1.086 0 0 0 .713 -1.511l-7.505 -15.483a.448 .448 0 0 0 -.787 -.033l-7.453 12.838a1.07 1.07 0 0 0 .037 1.147z"></path>
        <path d="M8.5 22l3.5 -20"></path>
      </svg>
    )
  },
  algolia: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15.5 11c-.414 -1.477 -1.886 -2.5 -3.5 -2.5a3.47 3.47 0 0 0 -3.5 3.5a3.47 3.47 0 0 0 3.5 3.5c.974 0 1.861 -.357 2.5 -1l4.5 4.5v-15h-7c-4.386 0 -8 3.582 -8 8s3.614 8 8 8a7.577 7.577 0 0 0 2.998 -.614"></path>
      </svg>
    )
  },
  pusher: () => {
    return (
      <svg className="w-5 h-5 lg:w-7 lg:h-7 2xl:w-11 2xl:h-11" viewBox="0 0 24 24" strokeWidth={1.2} fill="currentColor">
        <path d="M12 23.966v-6.017a.035.035 0 01.018-.03l7.732-4.465a.035.035 0 00.018-.031v-1.711a.036.036 0 00-.054-.031l-7.66 4.423a.036.036 0 01-.054-.031V14.36a.036.036 0 01.018-.03l7.732-4.465a.037.037 0 00.018-.031V8.124a.036.036 0 00-.053-.031l-7.661 4.423a.036.036 0 01-.054-.031v-1.711a.035.035 0 01.018-.031L19.75 6.28a.036.036 0 00.018-.03V4.514a.076.076 0 00-.035-.062L12.036.01a.07.07 0 00-.072 0L10.5.855a.036.036 0 000 .062l7.661 4.423a.036.036 0 010 .062l-1.464.845a.076.076 0 01-.072 0L8.929 1.804a.076.076 0 00-.076 0l-1.46.844a.036.036 0 000 .062l7.66 4.424a.036.036 0 010 .062l-1.464.845a.076.076 0 01-.076 0L5.821 3.597a.076.076 0 00-.076 0l-1.513.876v15.05a.035.035 0 00.018.03l1.482.856a.036.036 0 00.053-.03V5.432a.036.036 0 01.054-.031l1.482.856a.036.036 0 01.018.03v15.029a.036.036 0 00.018.03l1.482.857a.036.036 0 00.054-.032V7.227a.036.036 0 01.054-.031l1.481.855a.036.036 0 01.019.031v15.029a.037.037 0 00.017.03l1.486.856a.036.036 0 00.05-.031z" />
      </svg>
    )
  },
  stripe: () => {
    return (
      <svg className="w-4 h-4 lg:w-6 lg:h-6 2xl:w-10 2xl:h-10" viewBox="0 0 24 24" strokeWidth={1.2} fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
      </svg>
    )
  },
  sentry: () => {
    return (
      <svg className="w-4 h-4 lg:w-6 lg:h-6 2xl:w-10 2xl:h-10" viewBox="0 0 24 24" strokeWidth={1.2} fill="currentColor">
        <path d="M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 018.53 12.811h-2.221A13.301 13.301 0 005.784 9.814l-2.926 5.06a7.65 7.65 0 014.435 5.848H2.194a.365.365 0 01-.298-.534l1.413-2.402a5.16 5.16 0 00-1.614-.913L.296 19.275a2.182 2.182 0 00.812 2.999 2.24 2.24 0 001.086.288h6.983a9.322 9.322 0 00-3.845-8.318l1.11-1.922a11.47 11.47 0 014.95 10.24h5.915a17.242 17.242 0 00-7.885-15.28l2.244-3.845a.37.37 0 01.504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 01-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 001.922-3.31z" />
      </svg>
    )
  },
  express: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} fill="currentColor">
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
      </svg>
    )
  },
  mongoose: () => {
    return (
      <svg className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-12 2xl:h-12" viewBox="0 0 24 24" strokeWidth={1.2} fill="currentColor">
        <path d="M14.014 7.37a9.162 9.162 0 00-.808.025c-.218.017-.434.072-.65.11.229.118.456.213.68.315.225.103.436.232.629.387-.253-.097-.499-.208-.752-.298a8.046 8.046 0 00-1.624-.421c-.273-.037-.546-.073-.819.005-.276.078-.354.18-.38.458-.04.46.098.887.281 1.298a4.432 4.432 0 001.185 1.573 4.56 4.56 0 001.305.787c.136.053.274.103.411.155l-.009.032c-.263-.072-.532-.126-.787-.22a4.14 4.14 0 01-1.222-.73 4.16 4.16 0 01-1.007-1.22 3.43 3.43 0 01-.43-1.609l-.012.005C4.891 7.488.402 11.595.035 11.94l-.034.014c-.002.005 0 .01.003.016L0 11.974l.005-.002c.004.008.01.016.013.024.087-.019.173-.042.26-.054l.069-.01c.324-.115.655-.205.997-.253.484-.069.985-.159 1.48-.156.468.002.943.074 1.402.153.129.022.255.052.38.087.335.075.65.21.933.391l.06.03c.403.19.758.47 1.038.811.052.057.141.116.187.178.096.114.142.236.303.363v-1.737h2.01l.939 1.733.942-1.733h2.07v3.357l.343-.226s.375-1 2.116-1.14l1.996-.064c-.308-.637-.307-.637-.159-.83.147-.19 1.28-.314 1.48-.433l2.912-.588c.007-.022.015.012.03.007.072-.022.147-.037.25-.061l.66-.16c.042-.025.093-.034.14-.05.308-.107.577-.245.726-.573.145-.319.339-.616.41-.967.022-.111.003-.208-.078-.288a.734.734 0 00-.35-.171c-.421-.173-.84-.35-1.264-.513-.261-.101-.529-.185-.795-.27a30.574 30.574 0 00-.794-.243c-.244-.072-.49-.138-.736-.205-.24-.066-.48-.133-.72-.192-.282-.07-.565-.13-.847-.195-.215-.05-.428-.102-.644-.146-.234-.047-.47-.089-.706-.13-.302-.053-.602-.112-.905-.153-.366-.05-.734-.082-1.101-.125-.345-.04-.691-.065-1.038-.07zm-3.303.767a.154.154 0 01.056.007c.42.13.83.277 1.216.491.365.203.695.45.979.756.012.013.02.028.036.05l-.645-.293-.021.026.37.551-.022.022a1.986 1.986 0 00-.665-.322l-.02.02.633.74-.416-.136-.017.02c.163.27.376.505.58.775-.354-.2-.665-.42-.956-.669a4.488 4.488 0 01-1.01-1.185c-.107-.19-.201-.385-.222-.606a.468.468 0 01.011-.15.123.123 0 01.113-.097zm5.424.668c.154.002.311-.006.464.015.278.037.555.092.832.14.158.027.317.052.474.086.297.064.594.133.89.2.196.046.392.092.587.14l-.329.161c-.365.027-.731.055-1.097.057a3.268 3.268 0 01-.675-.074c-.28-.058-.514-.196-.652-.466-.02-.04-.09-.063-.14-.078-.18-.054-.362-.1-.544-.168.063-.005.126-.014.19-.013zm3.223 2.635l.005.02c-.08.022-.16.042-.239.067-.455.14-.916.266-1.363.428-.28.101-.544.25-.81.388-.233.119-.315.322-.287.575.019.162.04.324.055.488a1.786 1.786 0 01-.288-.701c-.035-.169.058-.273.18-.365.238-.178.496-.318.777-.41.35-.117.702-.233 1.059-.325.251-.065.513-.09.77-.133.048-.008.094-.021.141-.032zM9.141 13.955v2.676h1.869l.064-.066v-2.61l-.97 1.495z" />
      </svg>
    )
  },
  testinglibrary: () => {
    return (
      <svg className="w-4 h-4 lg:w-6 lg:h-6 2xl:w-10 2xl:h-10" viewBox="0 0 24 24" strokeWidth={1.2} fill="currentColor">
        <path d="M23.447 9.756c.028.05.053.113.078.186-.028-.06-.047-.129-.078-.186.592 2.304-1.95 5.003-5.13 4.239h.001c4.596-3.01 2.332-6.772.19-8.58-1.762-1.49-.721-1.95.021-1.95.237 0 .443.046.519.121l-.005-.004.006.004c-.018-1.433-5.066-1.11-.65 3.494 2.268 2.365-.408 7.596-3.596 3.618a.974.974 0 01-.071-.113c.515-.214.937-.795.937-1.753a2.383 2.383 0 00-.197-.986c.368-.75.707-1.647.707-2.77 0-2.684-1.742-5.076-4.18-5.076s-4.18 2.392-4.18 5.076c0 1.123.339 2.02.707 2.771a2.374 2.374 0 00-.197.988c0 .958.421 1.54.937 1.753a.985.985 0 01-.072.113C6.006 14.679 3.33 9.447 5.598 7.083c4.417-4.604-.633-4.926-.651-3.494l.008-.004c.078-.074.28-.12.515-.12.742 0 1.783.46.021 1.95-2.133 1.8-4.383 5.538.139 8.542.018.013.03.027.049.04-3.176.764-5.714-1.928-5.131-4.232l.004-.01c-.001.002-.002.005-.004.006l.001-.003-.003.007c-1.174 1.61-.606 5.779 3.778 6.168.019.003.035.009.054.012-4.36 1-3.048 7.02.021 6.056L4.388 22l.016-.003C2.27 21.652 2.11 19 3.176 18.087c1.172-1.006 2.519-.137 5.302-.932l.03-.004c-.03 2.446 2.352 3.76 1.103 5.16-1.316 1.473-3.112-.1-2.858-1.55l.006-.029-.004.008v-.004l-.004.012C5.65 22.598 7.044 24 8.61 24c.899 0 1.855-.462 2.429-1.567 1.214-2.337-2.385-6.432.96-6.432 3.344 0-.255 4.095.959 6.432.574 1.105 1.53 1.567 2.43 1.567 1.571 0 2.97-1.411 1.85-3.268l.005.021-.006-.017c.276 1.457-1.533 3.057-2.855 1.575-1.244-1.404 1.131-2.718 1.106-5.163 2.806.812 4.157-.072 5.334.94 1.066.911.906 3.564-1.228 3.91h.007c3.07.958 4.377-5.054.018-6.057l.005-.001c4.44-.362 5.009-4.573 3.822-6.184zm-20.238.39C3.072 7.9 5.019 6.073 5.62 5.565c.838-.707 1.165-1.272.998-1.727a.809.809 0 00-.656-.512 1.411 1.411 0 00-.573.03c.169-.082.365-.13.574-.13.475 0 .866.223.995.569.117.313.12 1.007-1.174 2.133-2.047 1.783-2.213 3.922-1.685 5.33.458 1.223 1.47 2.014 2.58 2.014.177 0 .355-.02.533-.057-.54.46-1.16.61-1.412.656-1.494-1.045-2.512-2.419-2.591-3.727zm5.208 6.873c-1.135.302-2.295.319-3.038.323-.924.006-1.655.01-2.333.593-.617.528-.873 1.594-.609 2.536.091.325.19.656.426.857.178.153.482.37.787.522l-.016-.004c.019.01.033.023.052.033-.993-.212-1.572-1.18-1.642-2.134-.088-1.205.602-2.728 2.832-3.055.354-.052.728-.083 1.101-.114.91-.076 1.85-.155 2.497-.54-.024.38-.046.788-.057.983zm.25-2.684c-.65.998-1.936 1.153-3.07 1.29-.32.038-.613.083-.883.138l-.356-.024c-1.801-.156-3.141-1.006-3.775-2.396a4.068 4.068 0 01-.353-2.055s.038-.376.108-.77c-.087 1.095.207 2.138.88 2.997a4.649 4.649 0 003.636 1.762c1.33 0 2.588-.59 3.545-1.663.33-.37.478-.398.516-.398.128.186.019.708-.247 1.119zm6.372-5.503c0 1.347-1.527 1.347-1.527 0s1.527-1.347 1.527 0zM13.234 3.34c0 .741-1.235.741-1.235 0 0-.74 1.235-.74 1.235 0zm-.258 8.156c0 .749-.06 1.356-.133 1.356s-.126-.605-.125-1.355c0-.75.062-1.356.133-1.356.07 0 .128.606.125 1.355zm-.952-1.614c.056 0 .1.73.1 1.631s-.044 1.631-.1 1.631-.1-.73-.1-1.63c0-.902.045-1.632.1-1.632zm-.193-8.21c0 .511-.849.511-.849 0s.85-.506.85 0zm-.587 4.22c0-.354.587-.351.587 0 0 .354-.587.354-.587 0zm.046 5.622c0 .768-.064 1.39-.137 1.39-.073 0-.132-.622-.131-1.389s.064-1.389.138-1.389c.074 0 .132.62.13 1.388zm0-7.495c0 .51-.849.51-.849 0s.849-.51.849 0zm-1.147-1.234c0 .353-.587.353-.587 0s.587-.353.587 0zm-.08 2.508c0 .255-.425.255-.425 0 0-.256.424-.256.424 0zm-1.1 3.54c0-1.347 1.528-1.347 1.528 0s-1.528 1.347-1.528 0zm5.327 9.088c-.078.74-.273 1.38-.446 1.946-.347 1.138-.622 2.036.242 3.002.363.407.829.622 1.346.622.64 0 1.278-.34 1.664-.889a1.97 1.97 0 00.325-.844c.017.16.026.31.015.417a1.623 1.623 0 01-.197.646c-.336.595-1.063.98-1.85.98-.95 0-1.77-.532-2.253-1.459-.481-.927-.132-2.214.177-3.35.302-1.115.564-2.077.104-2.678-.263-.345-.727-.512-1.417-.512-.691 0-1.155.167-1.418.512-.46.6-.198 1.563.104 2.678.309 1.136.658 2.423.177 3.35-.482.927-1.303 1.459-2.252 1.459-.788 0-1.515-.385-1.851-.98a1.623 1.623 0 01-.182-1.058c.048.296.142.582.323.84.387.547 1.025.888 1.665.888.518 0 .984-.215 1.348-.622.862-.966.588-1.862.24-2.998-.173-.567-.369-1.21-.445-1.95-.1-.966.119-1.827.6-2.36.399-.441.967-.666 1.69-.666s1.293.224 1.69.665c.48.533.7 1.393.6 2.36zm3.029-4.647c1.11 0 2.122-.79 2.579-2.014.526-1.408.36-3.547-1.69-5.33-1.295-1.127-1.292-1.82-1.175-2.134.13-.345.52-.569.994-.569.193 0 .372.045.532.115l.011.004a1.466 1.466 0 00-.533-.018.809.809 0 00-.656.512c-.166.455.16 1.02.998 1.728.6.507 2.548 2.334 2.411 4.578-.08 1.308-1.097 2.682-2.591 3.727a3.072 3.072 0 01-1.412-.656c.177.038.356.057.532.057zm4.635 6.469c-.07.956-.65 1.922-1.645 2.134.015-.008.028-.018.042-.027.305-.153.608-.368.785-.52.235-.202.335-.533.426-.858.264-.942.008-2.008-.609-2.536-.678-.582-1.409-.587-2.333-.593-.743-.004-1.903-.021-3.04-.323-.01-.196-.03-.602-.054-.983.647.386 1.589.465 2.5.542.373.031.744.062 1.097.113 2.23.327 2.919 1.848 2.83 3.05zm-2.666-3.979c-.271-.056-.565-.1-.886-.14-1.135-.136-2.421-.291-3.07-1.29-.268-.41-.38-.93-.292-1.09a.145.145 0 01.048-.009c.09 0 .238.073.511.379.957 1.073 2.217 1.663 3.546 1.663 1.414 0 2.774-.66 3.637-1.763.672-.858.965-1.9.88-2.994.07.393.107.77.107.77a4.068 4.068 0 01-.353 2.054c-.634 1.39-1.974 2.24-3.775 2.396l-.353.024zm-9.69-7.495a.236.236 0 01.11.221.236.236 0 11-.47 0 .235.235 0 01.36-.221zm4.295.443a.235.235 0 01-.11-.222.235.235 0 11.469 0 .236.236 0 01-.359.222z" />
      </svg>
    )
  }
}

export const Technologies = ({ icon }: { icon: TechnologieType }) => {
  const IconComponent = ICON_TECH[icon]

  return <IconComponent />
}