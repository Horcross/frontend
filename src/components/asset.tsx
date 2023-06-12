import { Network, Alchemy } from "alchemy-sdk";
import { useEffect, useState } from "react";
import NFT from "./nft";

export default function Asset(props: any) {
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const settings = {
  apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
  };
  const alchemy = new Alchemy(settings);
  const ownerAddr = props.ownerAddr;

  const [nfts , setNfts] = useState<string[]>([])

  useEffect(() => {
    getNFTs();
  })

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
    setNfts(nfts);
    }
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-20">Your NFTs</h1>
      <div className="flex justify-center">
        <div className="divider w-1/2"></div>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-items-center mt-20">
      {nfts.map((nft, index) => {
        return (
          <NFT imageURL={nft} key={index}/>
        )
      })}
      </div>
    </div>
  )
}