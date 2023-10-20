import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  smartWallet,
  coinbaseWallet,
  walletConnect,
  embeddedWallet,
} from "@thirdweb-dev/react";

const smartWalletOptions = {
  factoryAddress: "YOUR_FACTORY_ADDRESS",
  gasless: true,
};


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex-items'>
        <h2>Gasless Dapp</h2>
        <ThirdwebProvider
          activeChain="mumbai"
          clientId="YOUR_CLIENT_ID"
          supportedWallets={[
            smartWallet(
              metamaskWallet({ recommended: true }),
              smartWalletOptions,
            ),
            smartWallet(
              coinbaseWallet(),
              smartWalletOptions,
            ),
            smartWallet(
              walletConnect(),
              smartWalletOptions,
            ),
          ]}
        >
          <ConnectWallet
            theme={"dark"}
            switchToActiveChain={true}
            modalSize={"wide"}
          />
        </ThirdwebProvider>
        {/* <button className='connect_btn'>Connect Wallet</button> */}
      </div>
      <p>
        Last account to change counter - 0x1b6e16403b06a51C42Ba339E356a64fE67348e92
      </p>
      <div className="card">
        <button>
          counter is {count}
        </button>
        <div className='flex-items btn-group'>
          <button onClick={() => setCount((count) => count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount((count) => count + 1)}>
            Decrement
          </button>

        </div>
      </div>
    </>
  )
}

export default App
