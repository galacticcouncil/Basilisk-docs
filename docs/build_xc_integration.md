---
id: build_xc_integration
title: Cross-Chain Integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page provides a **step-by-step guide** that explains how to **integrate your chain** and **its assets** with Basilisk.

## Establishing cross-chain (XC) communication {#establishing-xc}
Kusama ecosystem was designed with multichain interoperability support in mind from day 1. The protocol that allows two chains to exchange Cross-Consensus messages (XCM) with one another is called **Cross-Chain Message Passing** (XCMP). While full XCMP is still being under development, a stop-gap protocol called **Horizontally Relay-routed Message Passing** (HRMP) is used by parachains to establish communication channels. An HRMP channel has the same capability as an XCMP channel but is more demanding on resources as messages are not routed directly between parachains but have to go via the relay chain.

## Onboarding assets to Basilisk {#onboarding-assets}
As Basilisk is a permissionless decentralized protocol, anyone can propose a XC integration with another parachain. The use case is usually (but not limited to) the listing of tokens on SnekSwap. Chances are the proposal will be successful shall the following steps be followed: 

### Step 0: Spark a discussion and interest {#discussion}
Before any change is done to the protocol it should be discussed with the broader community if such action is what the majority commonly wants. This measure is important, especially for the preselection of tokens:
* deciding on which tokens users would like to use on the platform
* red-flagging potentially toxic assets

Create a discussion thread on [Polkassembly](https://basilisk.polkassembly.io/post/create) including these points:
 - introduction of your project
 - how it synergizes with Basilisk platform
 - tokenomics
 - any other important info
 
Optionally, to gather feedback and list tokens faster, ask our mods to create a poll on our [public Basilisk discord channel](https://discord.gg/FYrDPeES)

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
Both parachain [sovereign accounts](https://substrate.stackexchange.com/questions/1200/how-to-calculate-sovereignaccount-for-parachain/1210) must have enough funds on the relay chain to make a deposit for HRMP channels and process XCM messages

ROC tokens can be obtained from the [Element faucet](https://matrix.to/#/#rococo-faucet:matrix.org) by typing "!drip your_address"
:::

Establishing a cross-chain integration of two parachains consists of:
* creating bidirectional HRMP channels
* registering assets in the asset registry

##### 1) Parachain
Initiates a request to open the channel to Basilisk on the relay chain. This consists of:
- prepare encoded transact call that will be executed on the relay chain
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_xc_integration/rococo_hrmp_init.png')} />
</div>

_Encoded: 0x17002a0800000800000000040000_

:::note
The following actions can be performed only from root origin via governance or the sudo module of the respective chain.
:::

- send an XCM message from the parachain to the relay chain using "polkadotXcm.send" call that consists of the following [instructions](https://github.com/paritytech/xcm-format):

  - WithdrawAsset
  - BuyExecution
  - Transact (input previously prepared call here)
  - RefundSurplus
  - DepositAsset

##### 2) Basilisk
 - accept Parachain &#8594; Basilisk channel request
 - initiate opening Basilisk &#8594; Parachain channel request
 - register Parachain's native asset(s) to Basilisk asset registry
##### 3) Parachain
 - accept Basilisk &#8594; Parachain channel request on the relay chain with the following Transact call, analogically to step 1
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_xc_integration/hrmp_accept.png')} />
</div>

_Encoded: 0x17012a080000_
 - register BSX to Parachain's asset registry

##### 4) Rococo
Wait for one session after each acceptance for each channel to be opened
##### 5) Test token transfers
Before proceeding, try sending all tokens you registered back and forth from one parachain to the other, and check deposits were successful.

:::note
BSX on Rococo can be obtained from the [Basilisk discord faucet](https://discord.com/channels/844177080005951489/963084917284155452) by typing "/drip your_address"
:::

### Step 3: Integrate on Kusama network {#live}

The process is the same as in step 2 but Kusama is used as the relay chain.

:::important
Both parachain [sovereign accounts](https://substrate.stackexchange.com/questions/1200/how-to-calculate-sovereignaccount-for-parachain/1210) must have enough funds (approx. 10.1 KSM) on the relay chain to reserve a deposit for HRMP channels and process XCM messages.
:::

:::warning
Always test the encoded hash of the call is valid on the appropriate chain, sending transaction data to an incorrect relay chain might lead to a loss of funds. 
:::

##### 1) Parachain
Initiates a request to open the channel to Basilisk on the relay chain. This consists of:
- prepare encoded transact call that will be executed on the relay chain
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_xc_integration/kusama_hrmp_init.png')} />
</div>

_Encoded: 0x3c002a080000e803000000900100_

:::note
The following actions can be performed only from root origin via governance or the sudo module of the respective chain.
:::

- send an XCM message from the parachain to the relay chain using "polkadotXcm.send" call that consists of the following [instructions](https://github.com/paritytech/xcm-format):

  - WithdrawAsset
  - BuyExecution
  - Transact (input previously prepared call here)
  - RefundSurplus
  - DepositAsset

##### 2) Basilisk
 - accept Parachain &#8594; Basilisk channel request
 - initiate opening Basilisk &#8594; Parachain channel request
 - register native asset(s) to Basilisk asset registry
##### 3) Parachain
 - accept Basilisk &#8594; Parachain channel request on the relay chain with the following Transact call, analogically to step 1
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_xc_integration/hrmp_accept.png')} />
</div>

_Encoded: 0x3c012a080000_
 - register BSX to Parachain's asset registry

##### 4) Kusama
Wait for one session after each acceptance for each channel to be opened
##### 5) Test token transfers
Before proceeding, try sending all tokens you registered back and forth from one parachain to the other, and check deposits were successful.

__Congratulations! From this moment on tokens are listed and can be used freely to create pools, LPing, etc.__
