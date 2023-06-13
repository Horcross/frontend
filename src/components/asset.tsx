import { Network, Alchemy } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { useNetwork, useAccount } from "wagmi";
import NFT from "./nft";

export default function Asset(props: any) {
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const { address } = useAccount()
  const { chain } = useNetwork()
  const [nfts , setNfts] = useState<string[]>([])

  useEffect(() => {
    getNFTs();
  })

  function chooseNetwork() {
    if (chain?.name === "Ethereum") {
      const settings = {
        apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Alchemy API Key.
        network: Network.ETH_MAINNET, // network.
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
  const ownerAddr = props.ownerAddr;

  async function getNFTs() {
    const nftsForOwner = await alchemy.nft.getNftsForOwner(ownerAddr);
    console.log("number of NFTs found:", nftsForOwner.totalCount);
    console.log("...");
    const nfts : string[] = [];

    // Print contract address and tokenId for each NFT:
    for (const nft of nftsForOwner.ownedNfts) {
      console.log("===");
      console.log("contract address:", nft.contract.address);
      console.log("token ID:", nft.tokenId);
      const response = await alchemy.nft.getNftMetadata(
        nft.contract.address,
        nft.tokenId
      );
      if (response?.rawMetadata?.image) {
        nfts.push(response.rawMetadata.image);  
      }
    }
    setNfts(nfts);
  }

  function convertToHttpsIpfsUrl(ipfsUrl: string): string {
    const ipfsHash = ipfsUrl.replace("ipfs://", "");
    const convertedUrl = `https://ipfs.io/ipfs/${ipfsHash}`;
    return convertedUrl;
  }
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-center mt-10">My NFTs</h1>
      <div className="flex justify-center">
        <div className="divider w-1/2"></div>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-items-center mt-3.5 mx-3">
      {nfts.map((nft, index) => {
        if (nft.startsWith("ipfs://")) {
          const nftUrl = convertToHttpsIpfsUrl(nft);
          return (
            <NFT imageURL={nftUrl} key={index}/>  
          )
        }
        return (
          <NFT imageURL={nft} key={index}/>
        )
      })}
      </div>
    </div>
  )
}