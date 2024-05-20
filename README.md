# Web3-Onboard Demo

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

Welcome to the Web3-Onboard Demo project! This project demonstrates the integration of Web3-Onboard into a Next.js application, enabling users to connect their web3 wallets, interact with different blockchain networks, and view their account balances.

## Features

- Wallet Connection: Supports connecting and disconnecting web3 wallets like MetaMask;
- Multi-Chain Support: Pre-configured with multiple blockchain networks (Ethereum Sepolia, Polygon Mainnet, Base Mainnet, Celo Mainnet); 
- Balance Fetching: Displays the connected wallet's balance;
- Dynamic UI: Updates the UI based on the connection status and account information.

## Configuration

The application uses environment variables for API keys required for connecting to blockchain services. Create a .env file in the root of the project and add the following:

REACT_APP_API_KEY_BN=your-blocknative-api-key
INFURA_KEY=your-infura-api-key


## Usage

The main components and their functionalities are as follows:

- Web3Onboard Initialization: Initializes Web3Onboard with supported wallets and chains.
- Wallet Connection Button: A button that allows users to connect or disconnect their wallets.
- Account Information Display: Shows the connected address and its balance.

## Dependencies

Key dependencies used in this project:

- @web3-onboard/react: Web3-Onboard library for wallet management;
- @web3-onboard/injected-wallets: Module to support injected wallets like MetaMask;
- ethers: Library for interacting with the Ethereum blockchain; 
react, react-dom: React library for building the user interface;
- next: Framework for server-side rendering and static site generation.
