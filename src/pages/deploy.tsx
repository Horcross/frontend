import { useRouter } from "next/router"
import BigNFT from "../components/bigNFT"

export default function Page(props: any) {
  const router = useRouter()
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid-cols-6 gap-x-8 py-24 sm:px-4 md:grid lg:px-0">
        <div className="relative col-span-3 rounded-xl">
          {/* {router.query.imageURL && typeof(router.query.imageURL) === 'string '&&<img src={router.query.imageURL} /> } */}
          <img className="aspect-square rounded-xl object-cover cursor-pointer" src={router.query.imageURL as string} alt="111" />
        </div>
        <div className="col-span-3 rounded-xl bg-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex">
              <button className="hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
                Deploy Account
              </button>
            </div>
          </div>
          <div className="flex gap-x-4">
            <p className="w-fit py-4 text-left font-mono text-xl uppercase text-gray-400 lg:whitespace-nowrap">
              Assets
            </p>
            <div className="hidden w-full grid-cols-1 grid-rows-2 divide-y divide-[#8c8c8c]/30 lg:grid">
              <div className="w-full"></div>
              <div className="w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
