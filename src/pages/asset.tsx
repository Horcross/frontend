import { Network, Alchemy } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import Nfts from "../components/nfts";
import Loading from "../components/loading";
import MintButton from "../components/mintButton";
import { useRouter } from "next/router";

export default function Asset() {
  const router = useRouter()
  const { chain } = useNetwork()
  const [loading, setLoading] = useState(true);
  const { isConnected, address } = useAccount();
  const [nfts , setNfts] = useState([{
    contractAddress: "",
    tokenId: "",
    imageURL: "",
    name: "",
  }])

  useEffect(() => {
    setLoading(true);
    getNFTs(address as string).then(() => {
      setLoading(false);
    })
  },[chain?.name])

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

  async function getNFTs(address: string) {
    const nftsForOwner = await alchemy.nft.getNftsForOwner(address);
    const nfts = [];

    // Print contract address and tokenId for each NFT:
    for (const nft of nftsForOwner.ownedNfts) {
      const response = await alchemy.nft.getNftMetadata(
        nft.contract.address,
        nft.tokenId
      );
      if (response?.rawMetadata?.image && response?.contract?.address && response?.tokenId && response?.title) {
        nfts.push({
          contractAddress: response.contract.address,
          tokenId: response.tokenId,
          imageURL: response.rawMetadata.image,
          name: response.title,
        })
      }
    }
    setNfts(nfts);
  }
  if (!isConnected) {
    router.push('/')
  }

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