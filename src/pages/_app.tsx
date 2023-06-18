import { ConnectKitProvider } from 'connectkit'
import Navbar from '../components/navbar'
import { WagmiConfig, useAccount } from 'wagmi'
import Footer from '../components/footer'
import '../styles/globals.css'
import { client } from '../wagmi'
import { AppProps } from 'next/app'
import Alert from '../components/alert'

function App({Component, pageProps}: AppProps) {
  const { isConnected } = useAccount();
  return (
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <div className='min-h-screen flex flex-col'>
            <Navbar />
              {isConnected ? <Component { ...pageProps}></Component> : <div className="flex-grow"><Alert /></div>}
            <Footer/>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    )
}
export default App
