import { useAccount, useContractRead, useBalance } from "wagmi"
import { useStEvmosContractAddressHook } from "./useContractAddress.hook"
import { stakerABI } from "../contracts/staker"
import { formatted } from "../utils/ether-big-number"

export function useCurrentStakedBalance() {
  const stEvmosAddresses = useStEvmosContractAddressHook()
  const { address } = useAccount()
  const { data: balance } = useContractRead({
    address: stEvmosAddresses,
    abi: stakerABI,
    functionName: 'balanceOf',
    args: [address]
  })
  return balance ? formatted(balance).toString() : 0
}

export function useCurrentEvmosBalance() {
  const { address } = useAccount()
  const { data, isError, isLoading } = useBalance({
    address: address,
  })

  return data ? data?.formatted.toString() : null
}