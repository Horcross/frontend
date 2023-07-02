import { useRouter } from "next/router"
import { useNetwork } from "wagmi"
import DeployNFT from "../components/deployNFT"
import DeployButton from "../components/deployButton"
import Divider from "../components/divider"
import AddressBar from "../components/addressBar"

export default function Page() {
  const { chain } = useNetwork()
  const router = useRouter()
  let openseaURL = ""
  if (chain?.name === "Goerli") {
    openseaURL = "https://testnets.opensea.io/assets/goerli/" + router.query.contractAddress + "/" + router.query.tokenId 
  }
  else if (chain?.name === "Polygon Mumbai") {
    openseaURL = "https://testnets.opensea.io/assets/mumbai/" + router.query.contractAddress + "/" + router.query.tokenId
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid-cols-6 gap-x-8 pt-24 pb-12 sm:px-4 md:grid lg:px-0">
        <DeployNFT imageURL={router.query.imageURL} name={router.query.name} openseaURL={openseaURL}/>
        <div className="col-span-3 rounded-xl bg-white p-6">
          <DeployButton contractAddress={router.query.contractAddress} tokenId={router.query.tokenId}/>
          <Divider title= {'address'}/>
          <div className="flex items-center mb-8">
            <img className="mask mask-circle w-10 h-auto mr-5" src="avalanche.png" />
            <AddressBar url= {'asdfs'} address= {'0x77813af45BC74aB209236b92CE2B6F2A51e58ee8'}/>
          </div>
          <div className="flex items-center mb-8">
            <img className="mask mask-circle w-10 h-auto mr-5" src="polygon.png" />
            <AddressBar url= {'asdfs'} address= {'0x77813af45BC74aB209236b92CE2B6F2A51e58ee8'}/>
          </div>
          <Divider title= {'Asset'}/>
        </div>
      </div>
    </div>
  )
}
