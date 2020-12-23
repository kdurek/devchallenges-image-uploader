const CardSuccess = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-green-c219653 text-6xl material-icons">
        check_circle
      </span>
      <h1 className="font-pop font-medium text-lg text-gray-c4F4F4F">
        Uploaded Successfully!
      </h1>
      <div className="w-full rounded-xl">
        <img src="image.svg" alt="XD" className="w-full" />
      </div>
      <div className="p-0.5 w-full flex justify-between rounded-lg border border-gray-cE0E0E0 bg-gray-cF6F8FB">
        <input
          readOnly
          value="XD"
          className="pl-2 bg-transparent focus:outline-none"
        />
        <button className="px-4 py-2 rounded-lg bg-blue-c2F80ED font-pop font-medium text-xs text-white focus:outline-none">
          Copy Link
        </button>
      </div>
    </div>
  )
}

export default CardSuccess
