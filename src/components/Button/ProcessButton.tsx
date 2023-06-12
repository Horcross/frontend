import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { erc20ABI, useAccount, useContractRead } from 'wagmi'
import { Button } from '@mui/material'
import { useState } from "react";
import { BigNumber } from 'ethers'
import { prepareWriteContract, writeContract, waitForTransaction} from '@wagmi/core'
import { useStEvmosContractAddressHook } from '../../hooks/useContractAddress.hook'
import { stakerABI } from "../../contracts/staker";
import { parseEther } from 'ethers/lib/utils.js';
import { ConstructionOutlined } from '@mui/icons-material';
import { LoadingDialog } from "../Dialog/LoadingDialog"


export function ProcessButton({ method, disabled, reverse, valAddress, balance }: any) {
  const [writing, setWriting] = useState(false)
  const stEvmosAddresses = useStEvmosContractAddressHook()
  const { address,  } = useAccount()

  async function stake (amount : any) {
    setWriting(true)
    const depositConfig = await prepareWriteContract({
      address: stEvmosAddresses,
      abi: stakerABI,
      functionName: 'deposit',
      overrides: {
        from: address,
        value: parseEther(amount.toString()),
      },
    })
    const {hash:depositHash} = await writeContract(depositConfig)
    await waitForTransaction({
      confirmations: 5,
      hash: depositHash,
    })

    const stakeConfig = await prepareWriteContract({
      address: stEvmosAddresses,
      abi: stakerABI,
      functionName: 'staking',
      args: [
        valAddress, 
        parseEther(amount.toString())
      ],
    })
    const {hash:stakeHash} = await writeContract(stakeConfig)
    await waitForTransaction({hash:stakeHash})
  }

  async function withdraw (amount : any) {
    setWriting(true)
    console.log(valAddress, parseEther(amount.toString()))
    // const withdrawConfig = await prepareWriteContract({
    //   address: stEvmosAddresses,
    //   abi: stakerABI,
    //   functionName: 'unstakeTokens',
    //   args: [
    //     valAddress, 
    //     parseEther(amount.toString())
    //   ],
    // })
    // const {hash:withdrawHash} = await writeContract(withdrawConfig)
    // await waitForTransaction({
    //   confirmations: 5,
    //   hash: withdrawHash,
    // })
  }
  

  return (
    <>
      {
        <Button
          variant="contained"
          disabled={writing}
          color="success"
          style={{
            textTransform: 'none',
          }}
          sx={{
            width: '120px',
          }}
          onClick={() => {
            method 
              ? stake(balance)
              .finally(() => {
                setWriting(false)
              })
              : withdraw(balance)
              .finally(() => {
                setWriting(false)
              })
          }}
        >
          Next
        </Button>
      }
      <LoadingDialog open={writing}/>
    </>
  )
}