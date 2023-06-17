import { useContractRead, useContractWrite, usePrepareContractWrite, useContractEvent } from "wagmi"
import { Network, Alchemy } from "alchemy-sdk";
import ABI from "../contract-abi/Mumbai.json"
import Loading from "./loading";
import { useEffect, useState } from "react";

export default function DeployButton(props: any) {

  const apiConfig = {
    apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Replace with your API key
    network: Network.MATIC_MUMBAI, // Replace with your network
  };
  const alchemy = new Alchemy(apiConfig);
  
  const [deployed, setDeployed] = useState(false)
  useEffect(() => {
    isDeployed()
  })

  async function isDeployed() {
    let response = await alchemy.core.getCode(data as string);
    if (response === "0x") {
      setDeployed(false)
    }
    else {
      setDeployed(true)
    }
  }

  const { config } = usePrepareContractWrite({
    address: "0xed8C508FbC6bD8bE3dC56fd638acbd9489CCf3e0",
    abi: ABI,
    chainId: 80001,
    functionName: 'createAccount(address,uint256,address,uint256,uint256,bytes)',
    args: [
      '0xed8C508FbC6bD8bE3dC56fd638acbd9489CCf3e0',
      80001,
      props.contractAddress,
      Number(props.tokenId),
      10,
      '0x'
    ],
    enabled: true
  })
  const { write } = useContractWrite(config)

  let { data } = useContractRead({
    address: "0xed8C508FbC6bD8bE3dC56fd638acbd9489CCf3e0",
    abi: ABI,
    chainId: 80001,
    functionName: 'account(address,uint256,address,uint256,uint256)',
    args: [
      '0xed8C508FbC6bD8bE3dC56fd638acbd9489CCf3e0',
      80001,
      props.contractAddress,
      Number(props.tokenId),
      10,
    ],
  })

  function shortAddress(data: string) {
    if (typeof data !== "string") return "input is not string"
    return data.slice(0, 6) + "..." + data.slice(data.length - 4, data.length)
  }

  return (
    <div className="flex items-center justify-between">
      <a href={"https://mumbai.polygonscan.com/address/"+data} target="_blank" rel="noreferrer">
        <div className="flex cursor-pointer items-center gap-2 rounded-full bg-[#f2f2f2] p-1 px-2 text-[#8e8e8e] transition hover:scale-105 hover:bg-black/10">
          <span className="text-xs font-bold tracking-wide lg:text-base">{shortAddress(data as string)}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
          </svg>
        </div>
      </a>
      <div className="flex">
        {deployed ? (
          <button  onClick={()=>{ write?.() }} className="hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
            use Account
        </button>
        ) : (
          <button  onClick={()=>{ write?.() }} className="hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
            Deploy Account
          </button>
        )}
        {/* <button  onClick={()=>{ write?.() }} className="hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
          Deploy Account
        </button> */}
      </div>
    </div>
  )
}
