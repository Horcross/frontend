import { Network, Alchemy } from "alchemy-sdk";

export async function detect6551(chainName: string, data: string): Promise<string> {
  let apiConfig = {}
  if (chainName === 'Goerli') {
    apiConfig = {
      apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Replace with your API key
      network: Network.ETH_GOERLI, // Replace with your network
    };
  }
  else if (chainName === 'Polygon Mumbai') {
    apiConfig = {
      apiKey: "eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc", // Replace with your API key
      network: Network.MATIC_MUMBAI, // Replace with your network
    };
  }
  const alchemy = new Alchemy(apiConfig)
  const response = await alchemy.core.getCode(data as string)
  return response 
} 