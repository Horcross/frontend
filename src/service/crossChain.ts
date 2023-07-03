import { writeContract, prepareWriteContract, readContract } from '@wagmi/core'
import { crossChainAddress, ChainId, ERC6551RegistryAddresses } from './contract-address'
import ABI from '../contract-abi/crossChain.json'

export async function getOtherChainAccount(nftContractAddress: string, tokenId: number, chainName: string) {
  const accountABI = await getAccountABI(nftContractAddress, tokenId)
  const metadata = await getMetadata()
  let desChainId = 0
  let desContractAddress = ''
  if (chainName === 'Fuji') {
    desChainId = ChainId.Fuji
    desContractAddress = ERC6551RegistryAddresses.Fuji
  }
  else if (chainName === 'Polygon Mumbai') {
    desChainId = ChainId.Mumbai
    desContractAddress = ERC6551RegistryAddresses.Mumbai
  }

  const config = await prepareWriteContract({
    address: crossChainAddress.Goerli as `0x${string}`,
    abi: ABI,
    chainId: ChainId.Goerli,
    functionName: 'sendReadRequest(string,string,bytes,bytes)',
    args: [
      desChainId.toString(),
      desContractAddress,
      metadata,
      accountABI
    ],
  })
  await writeContract(config)
}

async function getAccountABI(nftContractAddress: string, tokenId: number) {
  const data = await readContract({
    address: crossChainAddress.Goerli as `0x${string}`,
    abi: ABI,
    chainId: ChainId.Goerli,
    functionName: 'abiPacketAccount(address,uint256,address,uint256,uint256,bytes)',
    args: [
      '0x3Fc9B93f0B4D7fD836baFe08e0aD6Ca8eB749D6b',
      5,
      nftContractAddress,
      tokenId,
      12345,
      '0x8129fc1c'
    ]
  })
  return data
}

async function getMetadata() {
  const data = await readContract({
    address: crossChainAddress.Goerli as `0x${string}`,
    abi: ABI,
    chainId: ChainId.Goerli,
    functionName: 'getRequestMetadata(uint64,uint64,uint64,uint64,uint128,uint8,bool,bytes)',
    args: [
      0, 0, 0, 0, 0, 1, true, '0x'
    ]
  })
  return data
}