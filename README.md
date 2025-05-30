# Metis Ninjas DApp V2 Overview

This is a React-based decentralized application (DApp) built for interacting with the Metis Ninjas NFT smart contract. It supports wallet connection, NFT minting, and viewing key site content.

## Main Structure

### `src/App.js`
- Root component that manages routing and layout structure.
- Integrates views and connects UI to contract interactions.

### `src/index.js`
- ReactDOM entry point for rendering the application.

## Components Overview

### `components/ConnectWallet.js`
Handles MetaMask connection and displays wallet status.

### `components/Card.js`
UI component for displaying NFT-related visuals or minting options.

### `components/Styleddivs.js`
Holds styled components used across the UI.

## Views Overview

### `views/Mint.js`
Minting logic and UI with hooks into `interact.js` and smart contract ABI.

### `views/Hero.js`, `About.js`, `Footer.js`, `Header.js`, `Slider.js`
UI content for various landing page sections.

## Utilities

### `utils/interact.js`
Contains logic to connect to the blockchain, fetch wallet address, and call contract methods.

### `utils/contract-abi.json`
Smart contract ABI required for web3 interactions.

### `utils/store/`
React context and reducers for managing global wallet state.

## Styles & Assets

### `styles/custom.css`
Custom CSS styling for the entire app.

### `font/CircularStd-Medium.*`
Web font assets used for the site's typography.

## Dependencies

From `package.json`:
- `react`, `web3`, `redux`, `styled-components`, `react-router-dom`


-----
![Azoria Logo](https://azoria.au/assets/logos/Logo-Dark-Blue-Outline.png)

**Azoria** provide's custom software and development solutions to cryptocurrency projects and alike. Including but not limited to:

- Frontend Web Design
- Custom Bot Setup's
- Web & Email Hosting.
- Technical Advice.
- Hosting Setup.

*Flick us an [email](mailto://contact@azoria.au) today for more info or with any questions you may have!*

-----
#### Minting dApp for [Metis Ninjas](metis.ninja)

Written from create-react-app using react-bootstrap, redux and web3.

See [Contracts](https://github.com/exp0logy/metis-ninjas-contracts) for more info.