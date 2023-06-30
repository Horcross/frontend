import { useNetwork } from "wagmi";
import { useEffect, useState } from "react";
import { detect6551 } from "../service/isContractAccount";
import { read6551 } from "../service/readContractAccount";
import { deployContractAccount } from "../service/deployContractAccount";

export default function DeployButton(props: any) {
  const { chain } = useNetwork();
  let scanner = "";
  if (chain?.name === "Goerli") {
    scanner = "https://goerli.etherscan.io/address/";
  } else if (chain?.name === "Polygon Mumbai") {
    scanner = "https://mumbai.polygonscan.com/address/";
  }

  const [deployed, setDeployed] = useState(false);
  const [data, setData] = useState("0x");
  useEffect(() => {
    read6551(chain?.name as string, props.contractAddress, props.tokenId)
    .then((res) => {
        setData(res as string);
      }
    );

    detect6551(chain?.name as string, data as string)
    .then((res) => {
      setDeployed(res !== "0x");
    });
  });

  function shortAddress(data: string) {
    if (typeof data !== "string") return " ";
    return data.slice(0, 6) + "..." + data.slice(data.length - 4, data.length);
  }

  return (
    <div className="flex items-center justify-between">
      <a href={scanner + data} target="_blank" rel="noreferrer">
        <div className="flex cursor-pointer items-center gap-2 rounded-full bg-[#f2f2f2] p-1 px-2 text-[#8e8e8e] transition hover:scale-105 hover:bg-black/10">
          <span className="text-xs font-bold tracking-wide lg:text-base">
            {shortAddress(data as string)}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            ></path>
          </svg>
        </div>
      </a>
      <div className="flex">
        {deployed ? (
          <button className="hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
            use Account
          </button>
        ) : (
          <button
            onClick={() => {
              deployContractAccount(
                chain?.name as string,
                props.contractAddress,
                props.tokenId
              );
            }}
            className="hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block"
          >
            Deploy Account
          </button>
        )}
      </div>
    </div>
  );
}
