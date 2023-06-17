export default function DeployNFT(props: any) {
  return (
    <div className="relative col-span-3 rounded-xl">
      {/* {router.query.imageURL && typeof(router.query.imageURL) === 'string '&&<img src={router.query.imageURL} /> } */}
      <div className="overflow-hidden rounded-xl">
        <a href={props.openseaURL} target="_blank" rel="noreferrer">
          <img className="hover:scale-105 transition-all duration-500 aspect-square rounded-xl object-cover cursor-pointer" src={props.imageURL as string} alt="111" />
        </a>
      </div>
      <div className="flex flex-row items-center justify-between mt-8">
        <a href={props.openseaURL} target="_blank" rel="noreferrer">
          <span className="mr-4 text-2xl font-bold tracking-wide">{props.name}</span>
        </a>
        <a href={props.openseaURL} target="_blank" rel="noreferrer">
          <img src="opensea.svg" className="mb-2 h-9 w-9"/>
        </a>
      </div>
    </div>
  )
}
