import { writeContract, prepareWriteContract } from '@wagmi/core'
import { ERC6551RegistryAddresses, ChainId } from './contract-address'
import ABI from '../contract-abi/crossChain.json'

export async function deployContractAccount(chainName: string, nftAddress: string, tokenId: number) {
  let chainId = 0
  let contractAddress = ''
  if (chainName === 'Goerli') {
    chainId = ChainId.Goerli
    contractAddress = ERC6551RegistryAddresses.Goerli
  }
  else if (chainName === 'Polygon Mumbai') {
    chainId = ChainId.Mumbai
    contractAddress = ERC6551RegistryAddresses.Mumbai
  }
  const config = await prepareWriteContract({
    address: contractAddress as `0x${string}`,
    abi: ABI,
    chainId: chainId,
    functionName: 'createAccount(address,uint256,address,uint256,uint256,bytes)',
    args: [
      contractAddress,
      chainId,
      nftAddress,
      tokenId,
      10,
      '0x'
    ],
  })
  await writeContract(config)
}