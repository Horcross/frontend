import AddressBar from "./addressBar"

export default function AccountBar(props: any) {
 
  return (    
    <div>
      {
        props.receivedDatas.map((event: any, index: number)=>{
          if (event._chainId === 43113 || event._chainId === "43113") {
            return (
              <div className="flex items-center" key={index}>
                <img className="mask mask-circle w-10 h-auto" src="avalanche.png" />
                <AddressBar url= {"asdfasdfsdf"} address= {event._account}/>
              </div>
            )
          }
          else if (event._chainId === 80001 || event._chainId === "80001") {
            return (
              <div className="flex items-center" key={index}>
                <img className="mask mask-circle w-10 h-auto" src="polygon.png" />
                <AddressBar url= {"asdfasdfsdf"} address= {event._account}/>
              </div>
            )
          }
          else return null
        })
      }
    </div>
    
  )
}
