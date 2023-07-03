import { readContract } from '@wagmi/core'
import ABI from '../contract-abi/crossChain.json'
import { ERC6551RegistryAddresses, ChainId } from './contract-address'

export async function read6551 (chainName: string, nftAddress: string, tokenId: number) {
  let contractAddress = ""
  let chainId = 0
  if (chainName === 'Goerli') {
    contractAddress = ERC6551RegistryAddresses.Goerli
    chainId = ChainId.Goerli
  }
  else if (chainName === 'Polygon Mumbai') {
    contractAddress = ERC6551RegistryAddresses.Mumbai
    chainId = ChainId.Mumbai
  }

  const data = await readContract({
    address: contractAddress as `0x${string}`,
    abi: ABI,
    chainId: chainId,
    functionName: 'account(address,uint256,address,uint256,uint256)',
    args: [
      contractAddress,
      chainId,
      nftAddress,
      tokenId,
      10,
    ]
  })
  return data
}