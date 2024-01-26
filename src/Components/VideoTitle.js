
const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screeen aspect-video pt-[10%] px-24 absolute text-white ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6  text-lg w-1/4">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black  p-3 px-10 text-xl  rounded-md hover:bg-opacity-70">Play</button>
        <button className="bg-gray-500 text-black  mx-2 p-3 px-10 text-xl bg-opacity-50 rounded-md">More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
