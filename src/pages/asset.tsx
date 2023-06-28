import { Network, Alchemy } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import Nfts from "../components/nfts";
import Loading from "../components/loading";
import MintButton from "../components/mintButton";
import { getNFTs } from "../service/NFTapi";

export default function Page() {
  const { chain } = useNetwork()
  const [loading, setLoading] = useState(true);
  const { address } = useAccount();
  const [nfts , setNfts] = useState([{
    contractAddress: "",
    tokenId: "",
    imageURL: "",
    name: "",
  }])

  function chooseNetwork() {
    if (chain?.name === "Ethereum") {
      const settings = {
        apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Alchemy API Key.
        network: Network.ETH_MAINNET, // network.
      };
      return settings;
    }
    else if (chain?.name === "Polygon Mumbai") {
      const settings = {
        apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Alchemy API Key.
        network: Network.MATIC_MUMBAI, // network.
      };
      return settings;
    }
    else if (chain?.name === "Sepolia") {
      const settings = {
        apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Alchemy API Key.
        network: Network.ETH_SEPOLIA, // network.
      };
      return settings;
    }
    else if (chain?.name === "Goerli") {
      const settings = {
        apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Alchemy API Key.
        network: Network.ETH_GOERLI, // network.
      };
      return settings;
    }
  }
  const settings = chooseNetwork();
  const alchemy = new Alchemy(settings);

  useEffect(() => {
    setLoading(true);
    getNFTs(address as string, alchemy).then((data) => {
      setNfts(data)
      setLoading(false);  
    })
  },[chain?.name])

  // if (!isConnected) {
  //   router.push('/')
  // }

  return (
    <div>
      {loading ? <Loading /> : (
      <div className="mb-8">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-center mt-10 ml-20">My NFTs</h1>
          <MintButton/>
        </div>
        <div className="flex justify-center">
          <div className="divider w-1/2"></div>
        </div>
        <Nfts nfts={nfts} />
      </div>
      )}
    </div>
  )
}