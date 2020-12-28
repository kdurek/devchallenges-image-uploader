import { useState } from "react"

const CardUpload = ({ uploadFile }) => {
  const [dragOverState, setDragOverState] = useState(false)

  const dropHandler = (e) => {
    setDragOverState(false)
    e.stopPropagation()
    e.preventDefault()

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (
          e.dataTransfer.items[i].kind == "file" &&
          e.dataTransfer.items[i].type.match("^image/")
        ) {
          const file = e.dataTransfer.items[i].getAsFile()
          uploadFile(file)
        }
      }
    }
  }
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="font-pop font-medium text-lg text-gray-c4F4F4F">
        Upload your image
      </h1>
      <p className="font-pop font-medium text-xs text-gray-c828282">
        File should be JPG, JPEG, PNG...
      </p>
      <div
        onDrop={(e) => dropHandler(e)}
        onDragLeave={() => setDragOverState(false)}
        onDragEnter={() => setDragOverState(true)}
        onDragOver={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
        className="group px-16 py-10 rounded-xl border border-dashed border-blue-c97BEF4 bg-gray-cF6F7FB"
      >
        <div className="flex flex-col items-center justify-center gap-10 pointer-events-none select-none">
          <img
            src="/upload.svg"
            alt="upload"
            className={`
              w-full transition-all transform ${
                dragOverState ? "scale-100" : "scale-75"
              }`}
          />
          <p className="font-pop font-medium text-xs text-gray-cBDBDBD">
            Drag & Drop your image here
          </p>
        </div>
      </div>
      <p className="font-pop font-medium text-xs text-gray-cBDBDBD">Or</p>
      <button className="px-4 py-2 rounded-lg bg-blue-c2F80ED font-pop font-medium text-xs text-white">
        Choose a file
      </button>
    </div>
  )
}

export default CardUpload
