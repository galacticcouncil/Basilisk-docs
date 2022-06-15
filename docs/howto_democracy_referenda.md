---
id: howto_democracy_referenda
title: Participate in Referenda
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This post provides a step-by-step guide on how to participate in referenda: [vote in a referendum](#vote) and [propose a referendum](#propose).

Before you decide to participate in democracy, we strongly encourage you to read through the [referenda knowledge article](/learn_democracy_referenda) in the Learn / Democracy section. There you will find some important details on the mechanics behind referenda.

## Vote in a Referendum {#vote}
You can vote in Basilisk referenda either by using [Polkassembly](#vote-polkassembly) or directly from [Polkadot/apps](#vote-polkajs).

### Vote using Polkassembly {#vote-polkassembly}
To see all active and past referenda, navigate to the [Basilisk Polkassembly page](https://basilisk.polkassembly.network/). If this is the first time you use Polkassembly, click on `Register` (top right corner) and connect your wallet. If you are already registered, make sure you that your wallet is connected, otherwise do so via `Login`.

To see all active and past referenda, click on [Referenda](https://basilisk.polkassembly.network/referenda).

Click on an active referendum to see its details, the voting turnout, as well as the voting module.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_democracy_referenda/polkassembly-vote.jpg')} />
</div>

To cast your vote, click on `Vote` and provide the following information:
* **Vote with account** - select the voting account.
* **Lock balance** - this is the amount of BSX tokens you are willing to lock in support of the referendum.
* **Vote lock** - this is the multiplier which co-determines the [weight of your vote](/learn_democracy_referenda#referenda-votes-weighing).

After that, bring out your vote by clicking on *Nay* (No) or *Aye* (Yes) and sign the transaction.

### Vote using Polkadot/apps {#vote-polkajs}
You can see all referenda which are open for voting by navigating to [*Governance > Democracy*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/democracy) in Polkadot/apps.

To vote in a referendum, click on the *Vote* button next to it.

In the popup, fill in the following information:

* **Vote value** - this is the amount of BSX tokens you are willing to lock in support of the referendum.
* **Conviction multiplier** - this is the multiplier which co-determines the [weight of your vote](/learn_democracy_referenda#referenda-votes-weighing).

After that, bring out your vote by clicking on *Vote Nay* (No) or *Vote Aye* (Yes) and sign the transaction.

## Propose a Referendum {#propose}
You can propose a new referendum via Polkadot/apps. The process consists of two steps - [submitting a preimage](#propose-01), and [submitting the proposal on-chain](#propose-02).

### 01 Submit preimage {#propose-01}
To submit the preimage, visit Polkadot/apps and navigate to [*Governance > Democracy*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/democracy).

After clicking on *Submit preimage*, you should see the following popup:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_democracy_referenda/polkajs-preimage.jpg')} />
</div>

Fill in the information in the fields show above. The most important parameters are:
* Account from which the proposal is sent
* Proposal area
* Proposed action

In the example above, the proposal area is *balances*, and the action is *forceTransfer* of tokens from one account to another.

Before submitting the preimage and signing the transaction, please make sure to copy the preimage hash. You will need it for the next step.

### 02 Submit proposal {#propose-02}
To submit the referendum proposal, visit [*Governance > Democracy*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/democracy) in Polkadot/apps.

After clicking on *Submit proposal*, you should see the following popup:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_democracy_referenda/polkajs-proposal.jpg')} />
</div>

Enter the preimage hash from the previous step, and the amount of tokens you are willing to deposit for the proposal.

After submitting the proposal on-chain and signing the transaction, your proposal should appear in the list of proposed referenda.

:::caution
Every voting period, the referendum proposal with the highest backing (*seconding*) enters the voting round. As the amount of referenda grows, there is no guarantee that your proposal will ever gain sufficient seconding to enter voting. There is no option to withdraw a referendum proposal, meaning that your funds might remain locked for a longer period of time.

Malicious referendum proposals are punished. The Basilisk Council and the Technical Committee have the right to cancel any referendum which was proposed in bad faith. As a result, the deposited tokens will be burnt.
:::
