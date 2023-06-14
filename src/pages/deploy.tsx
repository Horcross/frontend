import { useRouter } from "next/router"
import { useContractWrite, usePrepareContractWrite, useContractRead } from "wagmi"
import ABI from "../services/contract-abi.json"

export default function Page(props: any) {
  const router = useRouter()
  const openseaURL = "https://opensea.io/assets/goerli/" + router.query.contractAddress + "/" + router.query.tokenId
  
  const { config } = usePrepareContractWrite({
    address: "0x759C748311F1b4BDb3E7D7C2B61E32818AE68d97",
    abi: ABI,
    chainId: 11155111,
    functionName: 'createAccount(address,uint256,address,uint256,uint256,bytes)',
    args: [
      '0x759C748311F1b4BDb3E7D7C2B61E32818AE68d97',
      11155111,
      router.query.contractAddress,
      Number(router.query.tokenId),
      20,
      '0x'
    ],
    enabled: true
  })
  const { write } = useContractWrite(config)

  const { data } = useContractRead({
    address: "0x759C748311F1b4BDb3E7D7C2B61E32818AE68d97",
    abi: ABI,
    chainId: 11155111,
    functionName: 'account(address,uint256,address,uint256,uint256)',
    args: [
      '0x759C748311F1b4BDb3E7D7C2B61E32818AE68d97',
      11155111,
      router.query.contractAddress,
      Number(router.query.tokenId),
      10,
    ],
  })

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid-cols-6 gap-x-8 py-24 sm:px-4 md:grid lg:px-0">
        <div className="relative col-span-3 rounded-xl">
          {/* {router.query.imageURL && typeof(router.query.imageURL) === 'string '&&<img src={router.query.imageURL} /> } */}
          <a href={openseaURL}>
          <img className="aspect-square rounded-xl object-cover cursor-pointer" src={router.query.imageURL as string} alt="111" />
          </a>
        </div>
        <div className="col-span-3 rounded-xl bg-white p-6">
          <div className="flex items-center ">
            <div className="flex">
              <button  onClick={()=>{ write?.() }} className="hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
                Deploy 6551 Account
              </button>
              <button className="ml-5 hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
                Get Avalanche Address
              </button>
              <button className="ml-5 hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
                Get Mumbai Address
              </button>
            </div>
          </div>
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
