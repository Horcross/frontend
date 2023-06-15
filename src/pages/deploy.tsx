import { useRouter } from "next/router"
import { useContractWrite, usePrepareContractWrite, useContractRead } from "wagmi"
import ABI from "../contract-abi/contract-abi.json"

export default function Page(props: any) {
  const router = useRouter()
  const openseaURL = "https://testnets.opensea.io/assets/mumbai/" + router.query.contractAddress + "/" + router.query.tokenId
  
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
      10,
      '0x'
    ],
    enabled: true
  })
  const { write } = useContractWrite(config)

  let { data } = useContractRead({
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

  function shortAddress(data: string) {
    return data.slice(0, 6) + "..." + data.slice(data.length - 4, data.length)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid-cols-6 gap-x-8 py-24 sm:px-4 md:grid lg:px-0">
        <div className="relative col-span-3 rounded-xl">
          {/* {router.query.imageURL && typeof(router.query.imageURL) === 'string '&&<img src={router.query.imageURL} /> } */}
          <div className="overflow-hidden rounded-xl">
            <a href={openseaURL} target="_blank" rel="noreferrer">
              <img className="hover:scale-105 transition-all duration-500 aspect-square rounded-xl object-cover cursor-pointer" src={router.query.imageURL as string} alt="111" />
            </a>
          </div>
        </div>
        <div className="col-span-3 rounded-xl bg-white p-6">
          <div className="flex items-center justify-between">
            <a href="" target="_blank" rel="noreferer nofollow">
              <div className="flex cursor-pointer items-center gap-2 rounded-full bg-[#f2f2f2] p-1 px-2 text-[#8e8e8e] transition hover:scale-105 hover:bg-black/10">
                <span className="text-xs font-bold tracking-wide lg:text-base">asdfasd</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                </svg>
              </div>
            </a>
            <div className="flex">
              <button  onClick={()=>{ write?.() }} className="hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
                Deploy Account
              </button>
              {/* <button className="ml-5 hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
                Get Avalanche Address
              </button>
              <button className="ml-5 hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
                Get Mumbai Address
              </button> */}
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
