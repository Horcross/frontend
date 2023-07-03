function convertToHttpsIpfsUrl(ipfsUrl: string): string {
  const ipfsHash = ipfsUrl.replace("ipfs://", "");
  const convertedUrl = `https://ipfs.io/ipfs/${ipfsHash}`;
  return convertedUrl;
}

export default function DeployAsset(props: any) {
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center mt-3.5 mx-1">
      {props.nfts.map((nft: any, index: any) => {
        if (nft.imageURL.startsWith("ipfs")) {
          const nftUrl = convertToHttpsIpfsUrl(nft.imageURL);
          return (
            <div className="col-span-1 mx-5 mt-4 mb-8 cursor-pointer" key= {index}>
              <div className="relative rounded-xl transition duration-430 hover:scale-105">
                <img className="aspect-square rounded-xl object-cover" src={nftUrl} alt="image description"/>
              </div>
            </div>
          );
        }
        return (
          <div className="col-span-1 mx-5 mt-4 mb-8 cursor-pointer" key= {index}>
            <div className="relative rounded-xl transition duration-430 hover:scale-105">
              <img className="aspect-square rounded-xl object-cover" src={nft.imageURL} alt="image description"/>
              </div>
          </div>
        );
      })}
    </div>
  );
}
