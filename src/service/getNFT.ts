export async function getNFTs(address: string, alchemy: any) {
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