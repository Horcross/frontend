export default function NFT(props: any) {
  return (
    <div className="w-4/5">    
      <img className="h-full rounded-lg cursor-pointer filter" src={ props.imageURL } alt="image description"/>
    </div>
  )
}
