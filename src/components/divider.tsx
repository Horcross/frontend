import { divider } from "../type/type";
export default function Divider(props: divider) {
  return (
    <div className="flex gap-x-4 mb-5">
      <p className="w-fit py-4 text-left font-mono text-xl uppercase text-gray-400 lg:whitespace-nowrap">
        {props.title}
      </p>
      <div className="hidden w-full grid-cols-1 grid-rows-2 divide-y divide-[#8c8c8c]/30 lg:grid">
        <div className="w-full"></div>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
