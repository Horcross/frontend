import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import Nfts from "../components/nfts";
import Loading from "../components/loading";
import MintButton from "../components/mintButton";
import { useRouter } from "next/router";
import { getNFTs } from "../service/getNFT";

export default function Page() {
  const router = useRouter()
  const { chain } = useNetwork()
  const [loading, setLoading] = useState(true);
  const { address } = useAccount();
  const [nfts , setNfts] = useState([{
    contractAddress: "",
    tokenId: "",
    imageURL: "",
    name: "",
  }])

  useEffect(() => {
    setLoading(true);
    getNFTs(address as string, chain?.name as string).then((data) => {
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