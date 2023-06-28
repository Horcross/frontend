import { useContractWrite, usePrepareContractWrite, useAccount, useNetwork } from "wagmi"
import { useState } from "react" 
import ABI from "../contract-abi/ERC721.json"
import { ERC721Addresses, ChainId } from "../service/contract-address"
export default function MintButton() {

  const randomInt = (n: number): number => {
    return Math.floor(Math.random() * n);
  }
  const [randomNumber, setRandomNumber] = useState(randomInt(10000))
  function random() {
    setRandomNumber(randomInt(10000))
  }

  const { chain } = useNetwork()
  const { address } = useAccount()
  let contractAddress = ""
  let chainId = 0

  if (chain?.name === "Goerli") {
    contractAddress = ERC721Addresses.Goerli
    chainId = ChainId.Goerli
  }
  else if (chain?.name === "Polygon Mumbai") {
    contractAddress = ERC721Addresses.Goerli
    chainId = ChainId.Mumbai
  }

  const { config } = usePrepareContractWrite({
    address: contractAddress as `0x${string}`,
    abi: ABI,
    chainId: chainId,
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
        Mint
      </button>
    </div>
  )
}
