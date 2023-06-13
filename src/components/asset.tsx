import { Network, Alchemy } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { useNetwork, useAccount } from "wagmi";
import NFT from "./nft";

export default function Asset(props: any) {
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const { chain } = useNetwork()
  const [nfts , setNfts] = useState([{
    contractAddress: "",
    tokenId: "",
    imageURL: ""
  }])

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
    const nfts = [];

    // Print contract address and tokenId for each NFT:
    for (const nft of nftsForOwner.ownedNfts) {
      const response = await alchemy.nft.getNftMetadata(
        nft.contract.address,
        nft.tokenId
      );
      if (response?.rawMetadata?.image && response?.contract?.address && response?.tokenId) {
        nfts.push({
          contractAddress: response.contract.address,
          tokenId: response.tokenId,
          imageURL: response.rawMetadata.image
        })
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
          if (nft.imageURL.startsWith("ipfs")) {
            const nftUrl = convertToHttpsIpfsUrl(nft.imageURL);
            return (
              <NFT imageURL={nftUrl} key={index} contractAddress={nft.contractAddress} tokenId={nft.tokenId} />  
            )
          }
          return (
            <NFT imageURL={nft.imageURL} key={index} contractAddress={nft.contractAddress} tokenId={nft.tokenId} />
          )
        })}
      </div>
    </div>
  )
}