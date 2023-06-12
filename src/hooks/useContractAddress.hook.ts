import { useNetwork } from "wagmi"
import { stEvmosAddresses, registerRelayerAddresses } from "../utils/contract-address"

export function useStEvmosContractAddressHook() {
  const { chain } = useNetwork()
  console.log("chain: ", chain)
  // @ts-ignore
  return chain !== undefined ? stEvmosAddresses[chain!.name] : ''
}

export function useRelayerContractAddressHook() {
  const { chain } = useNetwork()
  console.log("chain: ", chain)
  // @ts-ignore
  return chain !== undefined ? registerRelayerAddresses[chain!.name] : ''
}