// initialize and configure Web3Onboard + Web3OnboardProvider is a provider component
// that will provide Web3Onboard state to all descendant components. init is a function that initializes Web3Onboard with the provided settings
import { Web3OnboardProvider as OnboardProvider, init } from "@web3-onboard/react"

// represents an injected web3 wallet like Metamask
import injectedModule from "@web3-onboard/injected-wallets"

// setting up an Ethereum chain called "Sepolia". We are defining an object with the properties id, token, label and rpcUrl + This object is
// then added to the chain list
const ethereumSepolia = {
  id: 11155111,
  token: "ETH",
  label: "Sepolia",
  rpcUrl: "https://rpc.sepolia.org/",
}

const polygonMainnet = {
  id: "0x89",
  token: "MATIC",
  label: "Polygon",
  rpcUrl: "https://matic-mainnet.chainstacklabs.com",
}
const baseMainnet = {
  id: "0x2105",
  token: "ETH",
  label: "Base",
  rpcUrl: "https://mainnet.base.org",
}
const celoMainnet = {
  id: "0xa4ec",
  token: "ETH",
  label: "Celo",
  rpcUrl: "https://1rpc.io/celo",
}

const chains = [ethereumSepolia, polygonMainnet, baseMainnet, celoMainnet]

// configuring the list of wallets that Web3Onboard will support (MetaMask)
const wallets = [injectedModule()]

// initializing Web3Onboard with the settings I provided. Pass the supported wallets, configured chains and application metadata
const web3Onboard = init({
  wallets,
  chains,
  appMetadata: {
    name: "Web3-Onboard Demo",
    icon: "<svg>App Icon</svg>",
    description: "A demo of Web3-Onboard.",
  },
})

interface Props {
  children: React.ReactNode
}

const Web3Onboard: React.FC<Props> = ({ children }) => {
  return <OnboardProvider web3Onboard={web3Onboard}>{children}</OnboardProvider>
}

export default Web3Onboard
