import Head from "next/head"
import CardSuccess from "../../components/CardSuccess"
import CardUpload from "../../components/CardUpload"
import Loader from "../../components/Loader"

const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-cFAFAFB">
      <Head>
        <title>Image Uploader</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </Head>

      <main className="p-8 w-96 rounded-xl shadow-md bg-white">
        {/* <CardUpload /> */}
        {/* <Loader /> */}
        {/* <CardSuccess /> */}
      </main>
    </div>
  )
}

export default Home
