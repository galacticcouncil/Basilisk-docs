---
id: howto_bridge
title: Bridge Tokens
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you want to **trade BSX**, or **provide liquidity** for some of the Basilisk XYK pools, you may want to bridge tokens into the Basilisk chain, or out of it. You can do so using XCM - Kusama’s cross-messaging protocol.

Currently, the following tokens are supported by Basilisk for XCM transfers:
* BSX
* aUSD
* KSM

To perform XCM transfers for one of the assets listed above, you can use [Karura’s Bridge](#karura).

## Using Karura Bridge {#karura}
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_bridge/ausd.jpg')} />
</div>

### Step 1: Navigate to the Karura Bridge Page
[https://apps.karura.network/bridge](https://apps.karura.network/bridge)

### Step 2: Connect to Your Account

Click on `Connect Account` **(1 in image above)** and connect to your Dotsama wallet. 

If you still do not have a BSX account, please [follow this guide](https://docs.bsx.fi/create_account) to create one.

### Step 3: Bridge Tokens

* Select the `Origin Chain` you want to bridge tokens from, as well as the `Destination Chain` which will be receiving the tokens.
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

Congratulations! You have just used the Karura Bridge to bridge tokens to Basilisk.
