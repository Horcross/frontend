import { useAccount, useNetwork } from "wagmi"
import { mintNFT } from "../service/mintNFT"

export default function MintButton() {
  const { chain } = useNetwork()
  const { address } = useAccount()
  
  return (
    <div>
      <button onClick={()=>{
        mintNFT(address as `0x${string}`, chain?.name as string)
      }} className="mt-10 ml-5 hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
        Mint
      </button>
    </div>
  )
}
