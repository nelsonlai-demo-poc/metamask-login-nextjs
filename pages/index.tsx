import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'

declare global {
  interface Window {
    ethereum: any;
  }
}

const getWeb3 = (): Web3 => {
  return new Web3(window.ethereum)
}

const Home: NextPage = () => {

  const signMessage = async () => {
    const web3 = new Web3(window.ethereum)
    const msg = "Please sign this message to verify your address.\nIt will not cost you any gas.\n\nAddress:0xbB8A534dF861EEbe1e61E74982344f2496993583\n\nNonce:\nONRhfKsUOH"
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const sig = await web3.eth.personal.sign(msg, accounts[0], "")
    console.log(sig)
  }

  React.useEffect(() => {
    signMessage()
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
