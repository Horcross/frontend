import NFT from "./nft";

function convertToHttpsIpfsUrl(ipfsUrl: string): string {
  const ipfsHash = ipfsUrl.replace("ipfs://", "");
  const convertedUrl = `https://ipfs.io/ipfs/${ipfsHash}`;
  return convertedUrl;
}

export default function Nfts(props: any) {
  return (
    <div className="grid grid-cols-4 gap-4 justify-items-center mt-3.5 mx-3">
      {props.nfts.map((nft: any, index: any) => {
        if (nft.imageURL.startsWith("ipfs")) {
          const nftUrl = convertToHttpsIpfsUrl(nft.imageURL);
          return (
            <NFT
              imageURL={nftUrl}
              key={index}
              contractAddress={nft.contractAddress}
              tokenId={nft.tokenId}
              name={nft.name}
            />
          );
        }
        return (
          <NFT
            imageURL={nft.imageURL}
            key={index}
            contractAddress={nft.contractAddress}
            tokenId={nft.tokenId}
            name={nft.name}
          />
        );
      })}
    </div>
  );
}
