import { useRouter } from "next/router"
import BigNFT from "../components/bigNFT"

export default function Page(props: any) {
  const router = useRouter()
  return (
    <div>
      <h1>{router.query.tokenId}</h1>
      <h1>{router.query.contractAddress}</h1>
      <h1>{router.query.imageURL}</h1>
      <BigNFT/>
    </div>
  )
}
