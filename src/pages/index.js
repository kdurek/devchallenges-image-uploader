import { useState } from "react"

import Head from "next/head"
import CardSuccess from "../components/CardSuccess"
import CardUpload from "../components/CardUpload"
import Loader from "../components/Loader"

const Home = ({ firebase }) => {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [link, setLink] = useState("")

  const uploadFile = (file) => {
    const storageRef = firebase.storage().ref(`image-uploader/` + file.name)

    const uploadTask = storageRef.put(file)

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setUploading(true)
        setProgress(progress)
      },
      function (error) {
        // Handle unsuccessful uploads
      },
      function () {
        // Handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          setLink(downloadURL)
          setUploading(false)
          setUploaded(true)
        })
      }
    )
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-cFAFAFB">
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
        {!uploading && !uploaded && <CardUpload uploadFile={uploadFile} />}
        {uploading && !uploaded && <Loader progress={progress} />}
        {!uploading && uploaded && <CardSuccess link={link} />}
      </main>
    </div>
  )
}

export default Home
