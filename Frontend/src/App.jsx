import './App.css'
import {
  ThirdwebProvider,
  ConnectWallet,
  Web3Button,
} from "@thirdweb-dev/react";
import counterABI from './abi';
import Counter from './counter';
import Caller from './caller';
import { clientId, contractAddress, relayerUrl } from './utils';


function App() {
  return (
    <>
      <ThirdwebProvider
        activeChain="mumbai"
        clientId={clientId}
        sdkOptions={{
          gasless: {
            openzeppelin: {
              relayerUrl: relayerUrl,
            },
          },
        }}
        desiredChainId={80001}
      >
        <div className='flex-items'>
          <h2>Gasless Dapp</h2>
          <ConnectWallet />
        </div>
        <p>
          <Caller />
        </p>
        <div className="card">
          <Counter />
          <div className='flex-items btn-group'>
            <Web3Button
              contractAddress={contractAddress}
              contractAbi={counterABI}
              action={(contract) =>
                contract.call("increment")
              }
              onSuccess={() => alert("Number Increased by 1!")}
              onError={() => alert("Something went wrong")}
            >
              Increment
            </Web3Button>
            <Web3Button
              contractAddress={contractAddress}
              contractAbi={counterABI}
              action={(contract) =>
                contract.call("decrement")
              }
              onSuccess={() => alert("Number decreased by 1!")}
              onError={() => alert("Something went wrong")}
            >
              Decrement
            </Web3Button>
          </div>
        </div>
      </ThirdwebProvider>
    </>
  )
}

export default App
