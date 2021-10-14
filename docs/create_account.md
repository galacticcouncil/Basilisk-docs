---
id: create_account
title: Create a new BSX Account
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The process of creating a new BSX Account consists of three simple steps.

## 01 Install Polkadot.js extension {#01-install-polkadot-js}
The Polkadot.js browser extension is used to create and manage your BSX wallet. To install it, follow [this link](https://polkadot.js.org/extension/).

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/create-account/metadata.jpg')} />
</div>

## 02 Upgrade metadata {#02-upgrade-metadata}

After installing the Polkadot.js browser extension, you need to make sure that it has been updated with the latest chain metadata. For this purpose, visit the following link and click on the `Metadata` tab. If an update is needed, you will see the button `Update metadata`. Click on it and follow the instructions.

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.basilisk.hydradx.io#/settings/metadata

## 03 Create your BSX Account {#03-create-bsx-account}

To create a new BSX address, open the Polkadot.js browser extension and click on `+` > `Create new account`. 

You will be displayed a 12-word mnemonic phrase which can be used to recover your account. Backup the seed phrase in a secure location. Click on `Next step` and fill in the following information:

* **Network**: Please select `Basilisk`
* **Descriptive name of the account**
* **Password**

Your account will be created after clicking `Add the account with the generated seed`.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/create-account/create_account.jpg')} width="350px" />
</div>

:::warning 

Make sure to back up your recovery seed phrase by storing it in a secure location. Never share it with anybody. The seed phrase can be used to gain access to your account. If you lose it or leak it, you might also lose all the funds stored in the wallet. 

:::
