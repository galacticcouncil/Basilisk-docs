---
id: build_xc_integration
title: Cross-Chain Integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Pursuing its mission to **enable permissionless liquidity for the Kusama ecosystem**, Basilisk generally **welcomes integrations** with other parachains which would like to leverage some of the functionalities that Snek has to offer.

This page provides a **step-by-step guide** that explains how to **integrate your chain and its assets** with Basilisk.

## Establishing cross-chain (XC) communication {#establishing-xc}
The Kusama ecosystem was designed with multichain interoperability support in mind from day 1. The protocol that allows two chains to exchange Cross-Consensus messages (XCM) with each other is called **Cross-Chain Message Passing (XCMP)**. While full XCMP is still under development, a stop-gap protocol called **Horizontally Relay-routed Message Passing (HRMP)** is used by parachains to establish communication channels. An HRMP channel has the same capabilities as an XCMP channel but is more demanding on resources as messages are not routed directly between parachains, but need to first pass via the relay chain.

## Onboarding assets to Basilisk {#onboarding-assets}
As Basilisk is a permissionless and decentralized protocol, anyone can propose an XC integration with another parachain. A common case for this would be to list tokens on Snek Swap or to raise liquidity with Snek LBP, but other use cases may also come to mind.

The procedure for proposing to open a channel to Basilisk consists of the following steps:

### Step 0: Spark a discussion with the community {#discussion}
Before deciding to open a new cross-chain channel, you should initiate a discussion with the broader Basilisk community. This step is important because it allows users to express interest in tokens which they would like to see trading on our platform, and to red-flag potentially toxic assets.

To initiate the discussion, please [open a discussion thread on Polkassembly](https://basilisk.polkassembly.io/post/create) which touches upon the following points:
- introduction of your project
- how it plans to leverage the functionality offered by Basilisk
- tokenomics
- any other important info

After creating the thread, please post a link in **#gov-discussion** on the [Basilisk Discord](https://discord.gg/FYrDPeES).

### Step 1: Gather asset registry info {#asset-registry-info}
A chain's asset registry requires metadata about its tokens to function properly. For example, our native token BSX, would be registered as follows: 

|Field|Example|
|-------------|:-----------:|
|name|Basilisk|
|symbol|BSX|
|decimals |12|
|existential deposit |0.1 BSX|
|multilocation (Rococo)|{ parents: 1, interior: { X2: [ {Parachain: 2090}, {GeneralIndex:0} ]}}|
|multilocation (Kusama)|{ parents: 1, interior: { X2: [ {Parachain: 2090}, {GeneralIndex:0} ]}}|

Prepare this table for all the currencies you want to register.

### Step 2: Test on Rococo testnet {#rococo}
Before any cross-chain action can happen on the live chain, a dry-run has to be performed on the Rococo testnet first. Doing so prevents losing funds spent on failed proposals and ensures their smooth execution.

:::important
Both parachain [sovereign accounts](https://substrate.stackexchange.com/questions/1200/how-to-calculate-sovereignaccount-for-parachain/1210) must have enough funds on the relay chain to make a deposit for HRMP channels and to process XCM messages.

ROC tokens can be obtained from the [Element faucet](https://matrix.to/#/#rococo-faucet:matrix.org) by typing _!drip YOUR_ADDRESS_
:::

Establishing a cross-chain integration of two parachains consists of:
* creating bidirectional HRMP channels;
* registering assets in the asset registry.

##### 1) Parachain
To initiate a request for opening a channel to Basilisk on the relay chain, please follow these steps:

- prepare encoded transact call that will be executed on the relay chain:
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/build_xc_integration/rococo_hrmp_init.png')} />
</div>

 _Encoded: 0x17002a0800000800000000040000_

:::note
The following actions can be performed only from root origin via governance or the sudo module of the respective chain.
:::

- send an XCM message from the parachain to the relay chain using the _polkadotXcm.send_ call containing the following [instructions](https://github.com/paritytech/xcm-format):

  - WithdrawAsset
  - BuyExecution
  - Transact (input previously prepared call here)
  - RefundSurplus
  - DepositAsset

##### 2) Basilisk
On the Basilisk side, the following actions need to be performed:
- accept the Parachain &#8594; Basilisk channel request;
- initiate a request for opening Basilisk &#8594; Parachain channel;
- register Parachain's native asset(s) in the Basilisk asset registry.

These actions need to be performed by a member of the Basilisk team. Please contact us via a private Telegram group or, in the absence of such, reach out to us on the [Basilisk Discord](https://discord.gg/FYrDPeES).

##### 3) Parachain
 - accept Basilisk &#8594; Parachain channel request on the relay chain with the following Transact call, analogically to step 1:
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/build_xc_integration/hrmp_accept.png')} />
</div>

 _Encoded: 0x17012a080000_

 - register BSX in Parachain's asset registry.

##### 4) Rococo
Wait for one session after each acceptance for the channels to be opened.

##### 5) Test token transfers
Before proceeding, try sending each of the registered tokens back and forth from one parachain to the other, and make sure that the deposits are successful.

:::note
BSX on Rococo can be obtained from the [Basilisk discord faucet](https://discord.com/channels/844177080005951489/963084917284155452) by typing _/drip BSX_ADDRESS_
:::

### Step 3: Integrate on Kusama network {#live}
The process is the similar as in step 2, however we will be using Kusama as the relay chain.

:::important
Both parachain [sovereign accounts](https://substrate.stackexchange.com/questions/1200/how-to-calculate-sovereignaccount-for-parachain/1210) must have enough funds (approx. 10.1 KSM) on the relay chain to reserve a deposit for HRMP channels and to process the XCM messages.
:::

:::warning
Always test the encoded hash of the call is valid on the appropriate chain, sending transaction data to an incorrect relay chain may lead to a loss of funds. 
:::

##### 1) Parachain
To initiate a request for opening a channel to Basilisk on the relay chain, please follow these steps:

- prepare an encoded transact call that will be executed on the relay chain:
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/build_xc_integration/kusama_hrmp_init.png')} />
</div>

 _Encoded: 0x3c002a080000e803000000900100_

:::note
The following actions can be performed only from root origin via governance or the sudo module of the respective chain.
:::

- send an XCM message from the parachain to the relay chain using the _polkadotXcm.send_ call containing the following [instructions](https://github.com/paritytech/xcm-format):

  - WithdrawAsset
  - BuyExecution
  - Transact (input previously prepared call here)
  - RefundSurplus
  - DepositAsset

##### 2) Basilisk
On the Basilisk side, the following actions need to be performed:

- accept the Parachain &#8594; Basilisk channel request;
- initiate a request for opening Basilisk &#8594; Parachain channel;
- register Parachain's native asset(s) in the Basilisk asset registry.

In order to do so, the actions need to pass the **governance procedure** applicable at Basilisk. For this purpose, please reach out to **#gov-discussion** on the [Basilisk Discord](https://discord.gg/FYrDPeES). Please **include references** to Step 0 (governance discussion), Step 1 (Asset Registry Info for the assets which are to be registered on Basilisk) and Step 2 (testing on Rococo).

Your request will be handled by the Basilisk Council. If all the necessary information is provided, a Council member will launch a motion which, after undergoing a Council vote, will proceed as a public referendum. The Techical Committee at Basilisk will consider fast-tracking the referendum.

##### 3) Parachain
After the Basilisk referendum has been enacted, the Parachain needs to:
 
 - accept Basilisk &#8594; Parachain channel request on the relay chain with the following Transact call, analogically to step 1:
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/build_xc_integration/hrmp_accept.png')} />
</div>

 _Encoded: 0x3c012a080000_

 - register BSX to Parachain's asset registry.

##### 4) Kusama
Wait for one session after each acceptance for the channels to be opened.

##### 5) Test token transfers
Try sending each of the registered tokens back and forth from one parachain to the other, and make sure that the deposits are successful.

__Congratulations for registering your tokens on Basilisk, and a warm welcome from Snek!__
