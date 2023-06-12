import { Button, Grid, TextField } from "@mui/material"
import { prepareWriteContract, writeContract } from '@wagmi/core'
import { useState } from "react"
import { SlasherCard } from "../components/Card/SlasherCard"
import { useStEvmosContractAddressHook } from "../hooks/useContractAddress.hook"

function Page(address:any) {
    return (
        <Grid sx={{
            m: 0,
        }} container rowSpacing={4}>
            <Grid container item justifyContent={'center'}>
                <SlasherCard />
            </Grid>
        </Grid>
    )
}

export default Page