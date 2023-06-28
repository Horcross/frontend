import { useContractRead, useContractWrite, usePrepareContractWrite, useContractEvent, useNetwork } from "wagmi"
import { Network } from "alchemy-sdk";
import ABI from "../contract-abi/Mumbai.json"
import { useEffect, useState } from "react";
import { detect6551 } from "../service/detect6551";
import { ERC6551RegistryAddresses, ChainId } from "../service/contract-address";

export default function DeployButton(props: any) {
  const { chain } = useNetwork()
  let apiConfig = {}
  let scanner = ""
  let contractAddress = ""
  let chainId = 0
  if (chain?.name === "Goerli") {
    apiConfig = {
      apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Replace with your API key
      network: Network.ETH_GOERLI, // Replace with your network
    };
    contractAddress = ERC6551RegistryAddresses.Goerli
    chainId = ChainId.Goerli
    scanner = "https://goerli.etherscan.io/address/"
  }
  else if (chain?.name === "Polygon Mumbai") {
    apiConfig = {
      apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Replace with your API key
      network: Network.MATIC_MUMBAI, // Replace with your network
    };
    contractAddress = ERC6551RegistryAddresses.Mumbai
    chainId = ChainId.Mumbai
    scanner = "https://mumbai.polygonscan.com/address/"
  }
  
  const [deployed, setDeployed] = useState(false)
  useEffect(() => {
    detect6551(apiConfig, data as string).then((res) => {
      if (res === "0x") {
        setDeployed(false)
      }
      else {
        setDeployed(true)
      }
    })
  })

  const { config } = usePrepareContractWrite({
    address: contractAddress as `0x${string}`,
    abi: ABI,
    chainId: chainId,
    functionName: 'createAccount(address,uint256,address,uint256,uint256,bytes)',
    args: [
      contractAddress,
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
    address: contractAddress as `0x${string}`,
    abi: ABI,
    chainId: chainId,
    functionName: 'account(address,uint256,address,uint256,uint256)',
    args: [
      contractAddress,
      80001,
      props.contractAddress,
      Number(props.tokenId),
      10,
    ],
  })

  function shortAddress(data: string) {
    if (typeof data !== "string") return " "
    return data.slice(0, 6) + "..." + data.slice(data.length - 4, data.length)
  }

  return (
    <div className="flex items-center justify-between">
      <a href={ scanner + data } target="_blank" rel="noreferrer">
        <div className="flex cursor-pointer items-center gap-2 rounded-full bg-[#f2f2f2] p-1 px-2 text-[#8e8e8e] transition hover:scale-105 hover:bg-black/10">
          <span className="text-xs font-bold tracking-wide lg:text-base">{shortAddress(data as string)}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
          </svg>
        </div>
      </a>
      <div className="flex">
        {deployed ? (
          <button className="hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
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
