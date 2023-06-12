import { Button } from "@mui/material"
import { ConnectKitButton } from "connectkit"
import { useAccount } from "wagmi";

export function ConnectButton ({children}: any) {
  const { connector: activeConnector, isConnected } = useAccount()
  return (
    <ConnectKitButton.Custom>
        {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
          return (
            <Button 
              color={isConnected ? 'secondary' : 'primary'}
              onClick={show}
            >
              {
                isConnected ? 
                "Disconnect"
                : "Connect"
              }
            </Button>
          );
        }}
      </ConnectKitButton.Custom>
  )
}