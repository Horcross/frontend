import { Network, Alchemy } from "alchemy-sdk";
import ABI from "../contract-abi/Mumbai.json"

export async function detect6551(apiConfig: any, data: string): Promise<string> {
  const alchemy = new Alchemy(apiConfig)
  const response = await alchemy.core.getCode(data as string)
  return response 
} 