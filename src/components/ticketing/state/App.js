import KeyInfo from "./keyInfo";
// import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Scanner } from "../components/scanner";
import "../styles.css";
import { initKeypom, formatLinkdropUrl } from "@keypom/core";
import { Near } from "@near-js/wallet-account";
import { BrowserLocalStorageKeyStore } from "@near-js/keystores-browser";

const NETWORK_ID = "testnet";
export async function connectNear(contractId){
  const myKeyStore = new BrowserLocalStorageKeyStore();
  const connectionConfig = {
     networkId: NETWORK_ID,
     keyStore: myKeyStore,
     nodeUrl: `https://rpc.${NETWORK_ID}.near.org`,
     walletUrl: `https://wallet.${NETWORK_ID}.near.org`,
     helperUrl: `https://helper.${NETWORK_ID}.near.org`,
     explorerUrl: `https://explorer.${NETWORK_ID}.near.org`,
  };

  const nearConnection = new Near(connectionConfig);
  await initKeypom({
      near: nearConnection,
      network: NETWORK_ID,
      keypomContractId: contractId
  });
}


let contractId;
let privKey;
let qrText;
function setup() {
  // Setting contract id, priv key and link state variables.
  const urlSplit = window.location.href.split("/");

  if (urlSplit.length > 3) {
    contractId = urlSplit[3]
    privKey = urlSplit[4]
    qrText =  `${contractId}/${privKey}`
  }

  if (contractId) {
    connectNear(contractId)
  }
}

setup()

function App() {
  //state variables
  const [curUse, setCurUse] = useState(0);
  const [pubKey, setPubKey] = useState("");
  
  const homepath = `/${contractId}/${privKey}`
  const scannerpath = `/${contractId}/scanner`

  
  
}

export default App
// ReactDOM.render(<AppRouter />, document.getElementById("root"));
