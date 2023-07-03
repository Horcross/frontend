import { Network, Alchemy } from "alchemy-sdk";


export async function getNFTs(address: string, chainName: string) {
  let settings = {};
  if (chainName === "Polygon Mumbai") {
    settings = {
      apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Alchemy API Key.
      network: Network.MATIC_MUMBAI, // network.
    };
  }
  else if (chainName === "Goerli") {
    settings = {
      apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Alchemy API Key.
      network: Network.ETH_GOERLI, // network.
    };
  }
  const alchemy = new Alchemy(settings);

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
    return nfts;
  }