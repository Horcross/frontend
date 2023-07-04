import { useRouter } from "next/router"
import { useNetwork } from "wagmi"
import { useEffect, useState } from "react"
import DeployNFT from "../components/deployNFT"
import DeployButton from "../components/deployButton"
import Divider from "../components/divider"
import AccountBar from "../components/accountBar"
import AddressBar from "../components/addressBar"
import { getNFTs } from "../service/getNFT"
import { read6551 } from "../service/readContractAccount"
import DeployAsset from "../components/deployAsset"
import { gql, useQuery } from 'urql';


export default function Page() {
  const { chain } = useNetwork()
  const router = useRouter()
  const tokenContract = router.query.contractAddress
  const tokenId = router.query.tokenId
  const TodosQuery = gql`
  query {
    receivedDatas {
      id
      _chainId
      _tokenContract
      _tokenId
      _account
    }
  }
`;

  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery as any,
  });

  const [nfts , setNfts] = useState([{
    contractAddress: "",
    tokenId: "",
    imageURL: "",
    name: "",
  }])
  const [data, setData] = useState("0x");

 
  let openseaURL = ""
  if (chain?.name === "Goerli") {
    openseaURL = "https://testnets.opensea.io/assets/goerli/" + router.query.contractAddress + "/" + router.query.tokenId 
  }
  else if (chain?.name === "Polygon Mumbai") {
    openseaURL = "https://testnets.opensea.io/assets/mumbai/" + router.query.contractAddress + "/" + router.query.tokenId
  }

  useEffect(() => {
    read6551(chain?.name as string, router.query.contractAddress as string, router.query.tokenId as any)
    .then((res) => {
      setData(res as string)
    })
    getNFTs(data, chain?.name as string).then((res) => {
      setNfts(res)
    })
  },[chain?.name, data, router.query.contractAddress, router.query.tokenId])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid-cols-6 gap-x-8 pt-24 pb-12 sm:px-4 md:grid lg:px-0">
        <DeployNFT imageURL={router.query.imageURL} name={router.query.name} openseaURL={openseaURL}/>
        <div className="col-span-3 rounded-xl bg-white p-6">
          <DeployButton contractAddress={router.query.contractAddress} tokenId={router.query.tokenId}/>
          <Divider title= {'address'}/>


          {/* <AccountBar receivedDatas={result.data}/> */}
          {
            result.data?.receivedDatas.map((event: any, index: number)=>{
              if (event._chainId === "43113" && event._tokenContract === tokenContract && event._tokenId === tokenId) {
                return (
                  <div className="flex items-center mb-8" key={index}>
                    <img className="mask mask-circle w-10 h-auto mr-5" src="avalanche.png" />
                    <AddressBar url= {"https://testnet.snowtrace.io/address/"+event._account} address= {event._account}/>
                  </div>
                )
              }
              else if (event._chainId === "80001" && event._tokenContract === tokenContract && event._tokenId === tokenId) {
                return (
                  <div className="flex items-center" key={index}>
                    <img className="mask mask-circle w-10 h-auto mr-5" src="polygon.png" />
                    <AddressBar url= {'https://mumbai.polygonscan.com/address/'+event._account} address= {event._account}/>
                  </div>
                )
              }
              else return null
            })
          }

          <Divider title= {'Asset'}/>
          <DeployAsset nfts= {nfts}/>
        </div>
      </div>
    </div>
  )
}
