// integration of Web3 into React, including Onboard initialization and hooks to connect and disconnect the wallet.
import { init, useConnectWallet } from "@web3-onboard/react"

// specific implementation of an injected wallet for Onboard. It provides support for detecting and connecting injected wallets.
import injectedModule from "@web3-onboard/injected-wallets"

// library use to interact with the Ethereum blockchain. It provides a variety of functionalities, including creating and manipulating smart contracts, sending transactions, interacting with the blockchain
import { ethers } from "ethers"

// Get  free API key at https://explorer.blocknative.com/?signup=true

// apiKey -> API key used to connect Blocknative service
// Required for Transaction Notifications and Transaction Preview
const apiKey = process.env.REACT_APP_API_KEY_BN

const injected = injectedModule()

// infuraKey -> API key used to connect Infura service
const infuraKey = process.env.INFURA_KEY

//rpcUrl: RPC stands for "Remote Procedure Call" + rpcUrl is the URL of the RPC endpoint of an Ethereum node. This endpoint is used to send RPC requests to the node, such as obtaining information about the
// state of the blockchain, sending transactions, reading data from smart contracts and other things
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

// init function is called with a configuration object that includes the apiKey,
// a list of supported wallets (in this case, just the injected wallet), and a list
// of supported chains, where each chain is defined by an ID, token, label and a RPC URL
// initialize Onboard
init({
  apiKey,
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl,
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl: "https://mainnet.base.org",
    },
  ],
})

function App() {
  // use the use Connect Wallet hook to manage the wallet connection state
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  // create an ethers provider
  let ethersProvider

  if (wallet) {
    // if using ethers v6 this is:
    ethersProvider = new ethers.BrowserProvider(wallet.provider, "any")
    // ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any")
  }

  return (
    <div>
      <button disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())}>
        {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"}
      </button>
    </div>
  )
}
// This code configures Onboard for use with an injected wallet (such as MetaMask) and a connection to the Ethereum network using Infura

export default App
