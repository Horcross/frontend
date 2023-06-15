import { BiIdCard } from "react-icons/bi";
import { useRouter } from "next/router";
export default function NFT(props: any) {
  const router = useRouter();
  function handleClick() {
    router.push({
      pathname: '/deploy',
      query: { 
        contractAddress: props.contractAddress,
        tokenId: props.tokenId,
        imageURL: props.imageURL,
        name: props.name,
      }
    });
  }
  return (
    <div className="col-span-1 mx-5 mt-4 mb-8" onClick={handleClick}>
      <div className="relative rounded-xl transition duration-430 hover:scale-105">
        <img className="aspect-square rounded-xl object-cover" src={ props.imageURL } alt="image description"/>
        <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl bg-white/50 opacity-0 backdrop-blur-sm transition hover:opacity-100">
          <BiIdCard className="text-black rounded-xl w-10 h-auto"/>
          <span className="font-mono text-black font-bold text-xl tracking-widest ntialiased">
            view account
          </span>
        </div>
      </div>
    </div>
  )
}

