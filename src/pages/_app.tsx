import { ConnectKitProvider } from 'connectkit'
import Navbar from '../components/navbar'
import { WagmiConfig } from 'wagmi'
import Footer from '../components/footer'
import '../styles/globals.css'
import { client } from '../wagmi'
import { AppProps } from 'next/app'

function App({Component, pageProps}: AppProps) {
  return (
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <div className='min-h-screen flex flex-col'>
            <Navbar />
              <Component { ...pageProps}></Component>
            <Footer/>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    )
}
export default App
