import { useRouter } from "next/router"
import DeployNFT from "../components/deployNFT"
import DeployButton from "../components/deployButton"

export default function Page(props: any) {
  const router = useRouter()
  const openseaURL = "https://testnets.opensea.io/assets/mumbai/" + router.query.contractAddress + "/" + router.query.tokenId

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid-cols-6 gap-x-8 pt-24 pb-12 sm:px-4 md:grid lg:px-0">
        <DeployNFT imageURL={router.query.imageURL} name={router.query.name} openseaURL={openseaURL}/>
        <div className="col-span-3 rounded-xl bg-white p-6">
          <DeployButton contractAddress={router.query.contractAddress} tokenId={router.query.tokenId}/>
          <div className="flex gap-x-4">
            <p className="w-fit py-4 text-left font-mono text-xl uppercase text-gray-400 lg:whitespace-nowrap">
              address
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
