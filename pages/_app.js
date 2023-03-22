import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Mumbai}
      chainRpc = {{
        [ChainId.Mumbai]: 'https://matic.getblock.io/993c3d68-4f07-47ef-8a0b-1e0e5672151b/testnet/'
      }}
      >
      <ThemeProvider>
    <Component {...pageProps} />    
      </ThemeProvider>
    
      </ThirdwebProvider>
)
    }

export default MyApp
