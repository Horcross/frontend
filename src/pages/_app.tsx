//'use client';
import { ConnectKitProvider, ConnectKitButton } from 'connectkit'
import Navbar from '../components/navbar'
import { WagmiConfig, useAccount, useNetwork } from 'wagmi'
import Asset from '../components/asset'
import Footer from '../components/footer'
import '../styles/globals.css'
import { client } from '../wagmi'

function App() {
  const { isConnected, address } = useAccount()
  const { chain } = useNetwork()
  // console.log(chain?.network)
  // console.log(chains)
  // console.log(address)
  return (
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <div className='min-h-screen flex flex-col'>
            <Navbar />
            {isConnected && <Asset ownerAddr={address} />}
            <Footer/>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    )
}
export default App
