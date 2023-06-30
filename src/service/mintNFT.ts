import { writeContract, prepareWriteContract } from '@wagmi/core'
import { ERC721Addresses, ChainId } from './contract-address'
import ABI from '../contract-abi/ERC721.json'

export async function mintNFT(address: string, chainName: string) {
  let chainId = 0
  let ERC721Address = ''
  if (chainName === 'Goerli') {
    chainId = ChainId.Goerli
    ERC721Address = ERC721Addresses.Goerli
  }
  else if (chainName === 'Polygon Mumbai') {
    chainId = ChainId.Mumbai
    ERC721Address = ERC721Addresses.Mumbai
  }
  const randomNumber = Math.floor(Math.random() * 1000) + 1
  const config = await prepareWriteContract({
    address: ERC721Address as `0x${string}`,
    abi: ABI,
    chainId: chainId,
    functionName: 'mint(address,uint256)',
    args: [
      address,
      randomNumber
    ],
  })
  await writeContract(config)
}