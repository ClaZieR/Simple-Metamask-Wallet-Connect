
import './App.css';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { getWeb3Provider } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function App() {

 const { account, activate, deactivate, library } = useWeb3React()
 const RPCCON = async () => new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545");


  const [walletstatus,setWalletstatus] = useState("Connect");


  const walletHandler = async () => {
    const selectedNetWorks = [56, 97, 137, 43114, 2, 3, 4, 42, 1]
    const injCon = new InjectedConnector({supportedChainIds : selectedNetWorks})
    await activate(injCon)
//    console.log(injCon)
  }
  

  return(
  <div className="App">
    <h1>Wallet Address : {account}</h1>
    <button onClick={walletHandler}>{walletstatus}</button>
     {console.log(walletstatus)}
  </div>
  );
}

export default App;
