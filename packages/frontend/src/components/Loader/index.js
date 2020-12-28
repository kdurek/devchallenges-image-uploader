const Loader = ({ progress }) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-pop font-medium text-lg text-gray-c4F4F4F">
        Uploading...
      </h1>
      <div className="overflow-hidden w-full h-2 rounded-lg bg-gray-cF2F2F2">
        <div
          style={{ width: `${progress}%` }}
          className="h-2 rounded-lg bg-blue-c2F80ED transition-all"
        ></div>
      </div>
    </div>
  )
}

export default Loader
