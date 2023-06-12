//'use client';
import { ConnectKitProvider, ConnectKitButton } from 'connectkit'
import Navbar from '../components/navbar'
import { WagmiConfig, useAccount, useNetwork } from 'wagmi'
import Asset from '../components/asset'
import '../styles/globals.css'
import { client } from '../wagmi'

function App() {
  const { isConnected, address } = useAccount()
  const { chain, chains } = useNetwork()
  // console.log(chain?.network)
  // console.log(chains)
  // console.log(address)
  return (
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <Navbar />
          {isConnected && chain?.name==='Ethereum' && <Asset ownerAddr={address} network={chain.name} />}
          {isConnected && chain?.name==='Goerli' && <Asset ownerAddr={address} network={chain.name} />}
        </ConnectKitProvider>
      </WagmiConfig>
    )
}
export default App
