import Head from "next/head"

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>STARTER_CHANGE_ME</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Poppins:wght@300;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </Head>

      <main className="">
        <h1 className="">
          Welcome to <a href="https://nextjs.org">Next.js!</a>p
        </h1>

        <span class="material-icons">donut_small</span>
        <span class="material-icons-outlined">donut_small</span>
        <span class="material-icons-two-tone">donut_small</span>
        <span class="material-icons-round">donut_small</span>
        <span class="material-icons-sharp">donut_small</span>
      </main>

      <footer className="">
        <a
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          STARTER_CHANGE_ME
        </a>
      </footer>
    </div>
  )
}

export default Home
