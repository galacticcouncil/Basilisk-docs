---
id: create_account
title: 创建新 BSX 帐户
---

import useBaseUrl from '@docusaurus/useBaseUrl';

创建一个新 BSX 帐户的过程，包括三个简单的步骤。

## 01 安装 Polkadot.js 扩展程序 {#01-install-polkadot-js}

Polkadot.js 浏览器扩展程序，用于创建和管理您的 BSX 钱包。要安装它，请点击 **[此链接](https://polkadot.js.org/extension/)**。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/create-account/metadata.jpg')} />
</div>

## 02 升级元数据 {#02-upgrade-metadata}

在安装 Polkadot.js 浏览器扩展程序后，需确保它已经用最新的链元数据进行了更新。为此，请访问以下链接并单击 `Metadata` （元数据）选项卡。如果需要更新，你会看到 `Update metadata` （更新元数据）按钮。点击它，并按说明操作。

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.basilisk.hydradx.io#/settings/metadata

## 03 创建您的 BSX 账户 {#03-create-bsx-account}

要创建新的 BSX 地址，打开 Polkadot.js 浏览器扩展程序，并单击 `+` > `Create new account`。

你会看到一个 12 个单词组成的助记词，这可以用来恢复您的帐户。将种子短语备份到安全的位置，点击 `Next step`（下一步），填写以下信息:

* **Network**（网络）: 选择 `Basilisk`
* **Descriptive name of the account** （账户名）
* **Password** （密码）

点击 `Add the account with the generated seed` （用生成的种子短语添加帐户）后，您的账户将被创建。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/create-account/create_account.jpg')} width="350px" />
</div>


:::warning 

确保备份您的恢复种子短语，并存储在一个安全的位置。请不要和任何人分享！种子短语可以用来访问您的帐户，如果您的钱包丢失或泄露了种子短语，你可能会丢失钱包里的所有资产。

:::
