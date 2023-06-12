import { BigNumber } from "ethers"

const groth16 = require('snarkjs').groth16

export async function exportSolidity({ proof, publicSignals }: any) {
  const rawCallData: string = await groth16.exportSolidityCallData(proof, publicSignals);
  const tokens = rawCallData
    .replace(/["[\]\s]/g, "")
    .split(",")
    .map(BigNumber.from);
  const [a1, a2, b1, b2, b3, b4, c1, c2, ...inputs] = tokens;
  const a: [BigNumber, BigNumber] = [a1, a2] ;
  const b: [[BigNumber, BigNumber], [BigNumber, BigNumber]] = [
    [b1, b2],
    [b3, b4],
  ]
  const c: [BigNumber, BigNumber] = [c1, c2]
  return [
    a, b, c, inputs
  ]
}

export async function generateProof(
  value: any,
  filePathWASM: string = './slash.wasm',
  filePathZKEY: string = './slash.zkey',
) {

  const { proof, publicSignals } = await groth16.fullProve(
    value,
    filePathWASM,
    filePathZKEY
  )
  const solidityProof = await exportSolidity({ proof, publicSignals })
  return solidityProof
}
