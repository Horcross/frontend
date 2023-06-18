import { BigNumber, ethers } from "ethers";


const offset = BigNumber.from(10).pow(18)
export function formatted (number: any) {
  return Number(ethers.utils.formatEther(number)).toFixed(6)
}

export function invokeFormat (number: string) {
  return ethers.utils.parseEther(number)
}