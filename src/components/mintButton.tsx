import { useContractWrite, usePrepareContractWrite, useAccount } from "wagmi"
import { useState } from "react" 
import ABI from "../contract-abi/ERC721.json"
export default function MintButton() {

  const randomInt = (n: number): number => {
    return Math.floor(Math.random() * n);
  }

  const [randomNumber, setRandomNumber] = useState(randomInt(10000))
  function random() {
    setRandomNumber(randomInt(10000))
  }
  const { address } = useAccount()

  const { config } = usePrepareContractWrite({
    address: "0xca3Ccd71b2A2f8A37D2e746a829496053B937721",
    abi: ABI,
    chainId: 80001,
    functionName: 'mint(address,uint256)',
    args: [
      address,
      randomNumber
    ],
    enabled: true
  })

  const { write: mint } = useContractWrite(config)

  return (
    <div>
      <button onClick={()=>{
        random()
        mint?.()
      }} className="mt-10 ml-5 hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
        mint
      </button>
    </div>
  )
}
