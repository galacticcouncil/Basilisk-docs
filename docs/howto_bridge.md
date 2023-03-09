---
id: howto_bridge
title: Bridge Tokens
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you want to **trade BSX**, or **provide liquidity** for some of the Basilisk XYK pools, you may want to bridge tokens into the Basilisk chain, or out of it. You can do so using XCM - Kusama’s cross-messaging protocol.

Currently, the following tokens are supported by Kusama for cross-chain transfers:
* KSM, aUSD, USDT, TNKR, XRT

To perform XCM transfers for one of the assets listed above, you can use [Basilisk's Cross-chain UI](#BasiliskXCM) or [Karura’s Bridge](#karura).

## Using Basilisk Cross-chain UI {#BasiliskXCM}

### 01 Navigate to Cross-chain Transfers
[https://app.basilisk.cloud/#/cross-chain](https://app.basilisk.cloud/#/cross-chain)
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_bridge/XCMui.jpg')} />
</div>

### 02 Connect Your Account
Click on `Connect wallet` and connect to your preferred Kusama wallet. After that, select your account.

### 03 Cross-chain Transfer

* Select the source chain and the destination chain;
* Select the asset you intend to transfer and enter the amount;
* Enter the destination address. It should automatically populate with your address on that chain, but you can also change it to another address;
* Click `Transfer` and sign the transaction using your wallet.

---

## Using Karura Bridge {#karura}
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_bridge/ausd.jpg')} />
</div>

### 01 Navigate to the Karura Bridge Page
[https://apps.karura.network/bridge](https://apps.karura.network/bridge?fromChainName=kusama&toChainName=basilisk)

### 02 Connect to Your Account

Click on `Connect Account` **(1 in image above)** and connect to your Dotsama wallet. 

If you still do not have a BSX account, please [follow this guide](https://docs.bsx.fi/create_account) to create one.

### 03 Bridge Tokens

* Select the `Origin Chain` **(2)** you want to bridge tokens from, as well as the `Destination Chain` **(2)** which will be receiving the tokens.
* Select the token you would like to bridge **(3)**, and enter the amount.
* Click `Transfer` **(4)** and sign the transaction using your Kusama wallet app.

```
Examples:

Alice wants to bridge KSM from Kusama to the Basilisk chain. To do so, Alice will select:
* Origin Chain: Kusama
* Destination Chain: Basilisk
* Token: KSM

Bob wants to bridge BSX from Basilisk to Karura. To do so, Bob will select:
* Origin Chain: Basilisk
* Destination Chain: Karura
* Token: BSX
```
