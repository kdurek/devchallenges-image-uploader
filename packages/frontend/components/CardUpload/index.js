const CardUpload = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="font-pop font-medium text-lg text-gray-c4F4F4F">
        Upload your image
      </h1>
      <p className="font-pop font-medium text-xs text-gray-c828282">
        File should be Jpeg, Png,...
      </p>
      <div className="px-16 py-10 rounded-xl border border-dashed border-blue-c97BEF4 bg-gray-cF6F7FB">
        <div className="flex flex-col items-center justify-center gap-10">
          <img src="image.svg" alt="upload" />
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
