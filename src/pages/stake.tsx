import { Button, Grid, TextField } from "@mui/material"
import { prepareWriteContract, writeContract } from '@wagmi/core'
import { useState } from "react"
import { StakeCard } from "../components/Card/StakeCard"
import { useStEvmosContractAddressHook } from "../hooks/useContractAddress.hook"

function Page(address:any) {
    return (
        <Grid sx={{
            m: 0,
        }} container rowSpacing={4}>
            <Grid container item justifyContent={'center'}>
                <StakeCard />
            </Grid>
        </Grid>
    )
}

export default Page