import { useNetwork } from "wagmi";
import { useEffect, useState } from "react";
import { detect6551 } from "../service/isContractAccount";
import { read6551 } from "../service/readContractAccount";
import { deployContractAccount } from "../service/deployContractAccount";
import GetAccountButton from "./getAccountButton";
import AddressBar from "./addressBar";

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
      <AddressBar url= {scanner + data} address= {shortAddress(data)} />
      <div className="flex">
        {deployed ? (
          // <button className="hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
          //   get Account
          // </button>
          <GetAccountButton nftContractAddress = {props.contractAddress} tokenId = {props.tokenId} />
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
