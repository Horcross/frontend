import { getOtherChainAccount } from '../service/crossChain'

export default function GetAccountButton(props: any) {
  return (
    <div className="dropdown dropdown-right dropdown-end">
      <label tabIndex={0} className="cursor-pointer m-1 hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block">
        Get account
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
      >
        <li>
          <button onClick={()=>{
            getOtherChainAccount(props.nftContractAddress, props.tokenId, 'Fuji')
          }}>Fuji</button>
        </li>
        <li>
        <button onClick={()=>{
            getOtherChainAccount(props.nftContractAddress, props.tokenId, 'Polygon Mumbai')
          }}>Mumbai</button>
        </li>
      </ul>
    </div>
  );
}
