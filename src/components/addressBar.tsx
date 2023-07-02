import { addressBar } from "../type/type"
export default function AddressBar(props: addressBar) {

  return (
    <div>
      <a href={props.url} target="_blank" rel="noreferrer">
        <div className="flex cursor-pointer items-center gap-2 rounded-full bg-[#f2f2f2] p-1 px-2 text-[#8e8e8e] transition hover:scale-105 hover:bg-black/10">
          <span className="text-xs font-bold tracking-wide lg:text-base">
            {props.address}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            ></path>
          </svg>
        </div>
      </a>
    </div>
  )
}
