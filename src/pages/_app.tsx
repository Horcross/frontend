import { ConnectKitProvider } from 'connectkit'
import Navbar from '../components/navbar'
import { WagmiConfig, useAccount } from 'wagmi'
import Footer from '../components/footer'
import '../styles/globals.css'
import { client } from '../wagmi'
import { AppProps } from 'next/app'
import Alert from '../components/alert'
// import Head from 'next/head'
// import Link from 'next/link'

function App({Component, pageProps}: AppProps) {
  const { isConnected } = useAccount();
  return (
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <div>
            <div className='min-h-screen flex flex-col'>
              <Navbar />
                {isConnected ? <Component { ...pageProps}></Component> : <div className="flex-grow"><Alert /></div>}
              <Footer/>
            </div>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    )
}
export default App
