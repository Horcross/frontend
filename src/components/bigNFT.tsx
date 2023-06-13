export default function BigNFT(props: any) {
  return (
    <div>
      <div className="col-span-1 mx-5 mt-4 mb-8">
      <div className="relative rounded-xl">
        <img className="aspect-square rounded-xl object-cover" src={ props.imageURL } alt="image description"/>
        <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl bg-white/50 opacity-0 backdrop-blur-sm transition hover:opacity-100">
          <span className="font-mono text-black font-bold text-xl tracking-widest ntialiased">
            view account
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}
