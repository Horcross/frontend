import { useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi"
import ABI from "../contract-abi/contract-abi.json"

export default function DeployButton(props: any) {
  const { config } = usePrepareContractWrite({
    address: "0x759C748311F1b4BDb3E7D7C2B61E32818AE68d97",
    abi: ABI,
    chainId: 11155111,
    functionName: 'createAccount(address,uint256,address,uint256,uint256,bytes)',
    args: [
      '0x759C748311F1b4BDb3E7D7C2B61E32818AE68d97',
      11155111,
      props.contractAddress,
      Number(props.tokenId),
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
      props.contractAddress,
      Number(props.tokenId),
      10,
    ],
  })
  return (
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
      </div>
    </div>
  )
}
