import { ConnectKitProvider } from 'connectkit'
import Navbar from '../components/navbar'
import { WagmiConfig, useAccount } from 'wagmi'
import Footer from '../components/footer'
import '../styles/globals.css'
import { client } from '../wagmi'
import { AppProps } from 'next/app'
import Alert from '../components/alert'
import NextHead from 'next/head'
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const APIURL = "https://api.studio.thegraph.com/query/49227/crosschain/v0.0.1"
const qlclient = new Client({
  url: APIURL,
  exchanges: [cacheExchange, fetchExchange],
});

function App({Component, pageProps}: AppProps) {
  const { isConnected } = useAccount();
  return (
    <Provider value={qlclient}>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <NextHead>
            <title>Horcross</title>
            <link rel="icon" href="./favicon.ico" />
          </NextHead>
          <div className='min-h-screen flex flex-col'>
            <Navbar />
              {isConnected ? <Component { ...pageProps}></Component> : <div className="flex-grow"><Alert /></div>}
            <Footer/>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    </Provider>
    )
}
export default App
