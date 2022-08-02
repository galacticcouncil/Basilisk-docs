---
id: howto_democracy_referenda
title: 参与公投
---

import useBaseUrl from '@docusaurus/useBaseUrl';

这篇文章，提供了如何参与公投的分步指南: **[公投投票](#vote)** 和 **[发起公投](#propose)**。

在您决定参与民主治理前，我们强烈建议您阅读 *学习/民主* 部分的 **[公投](/learn_democracy_referenda)**。在那里，您会发现一些关于公投机制的重要细节。

## 公投投票 {#vote}

您可以使用 **[Polkassembly](#vote-polkassembly)** 或直接从 **[Polkadot/apps](#vote-polkajs)** 在 Basilisk 公投中投票。

### 使用 Polkassembly 进行投票 {#vote-polkassembly}

要查看所有正在进行和过去的公投，请浏览 **[Basilisk Polkassembly 页面](https://basilisk.polkassembly.network/)**。如果您是第一次使用 Polkassembly，请单击 `Register` （注册）（右上角）并连接您的钱包。如果您已经注册，请确保您的钱包已连接，否则请通过 `Login` （登录）进行登录。

点击 **[此处](https://basilisk.polkassembly.network/referenda)**，查看所有正在进行和过去的公民投票。

点击一个活跃的公投，可以看到它的详细信息，投票人数，以及投票模块。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_democracy_referenda/polkassembly-vote.jpg')} />
</div>

如欲投票，请点击 `Vote` （投票），并提供以下资料:
* **Vote with account**（用于投票的账户） - 选择投票账户。
* **Lock balance**（锁定额度） - 这是您愿意锁定的支持公投的 BSX 令牌数量。
* **Vote lock**（投票锁定） - 这是决定 **[您投票权重](/learn_democracy_referenda#referenda-votes-weighing)** 的系数。

之后，点击 `Nay`（反对） 或 `Aye`（赞成）投票，并签署交易。

### 使用 Polkadot/apps 投票 {#vote-polkajs}

您可以在 Polkadot/apps 中，通过导航 **[*Governance（治理）> Democracy（民主权利）*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/democracy)**看到所有开放投票的公投。

要在公投中投票，点击它旁边的 `Vote`（投票）按钮。

在弹窗中填写如下信息：

* **Vote value**（投票价值） - 这是你愿意锁定的支持公投的 BSX 令牌数量。
* **Conviction multiplier**（信心系数） - 这是决定 **[您投票权重](/learn_democracy_referenda#referenda-votes-weighing)** 的系数。

之后，点击 `Vote Nay`（反对） 或 `Vote Aye`（赞成）投票，并签署交易。

## 发起公投 {#propose}

你可以通过 Polkadot/app 发起新的公投。该过程包括两个步骤： [提交原像](#propose-01) 和 [提交链上议案](#propose-02)。

### 01 提交原像 {#propose-01}

提交原像，访问 Polkadot/apps 并导航到 **[*Governance（治理）> Democracy（民主权利）*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/democracy)**。

点击 `Submit preimage`（提交原像）后，您应该可以看到如下弹窗：

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_democracy_referenda/polkajs-preimage.jpg')} />
</div>

在上面显示的字段中填写信息，最重要的参数是：
* 发送议案的帐户
* 议案领域
* 议案操作

在上面的例子中，议案领域是 *balances*（余额），而操作则是将令牌从一个帐户转移到另一个帐户的 *forceTransfer*（强制转账）。

在提交原像和签署交易之前，请确保复制原像哈希，下一步要用到它。

### 02 提交议案 {#propose-02}

如欲提交公投议案，请访问 Polkadot/apps 中的 **[*Governance（治理）> Democracy（民主权利）*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/democracy)**。

点击 `Submit proposal`（提交议案）后，您会看到如下弹窗:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_democracy_referenda/polkajs-proposal.jpg')} />
</div>

输入上一步的原像哈希，以及您愿意为该议案存储的令牌数量。

在链上提交议案并签署交易后，您的议案应该出现在提议的公投列表中。

:::caution
在每一轮投票中，得票（*附议*）最高的议案进入投票环节。随着公投数量的增长，不能保证您的议案会获得足够的支持以进入投票。没有撤回公投议案的选项，这意味着您的资金可能会锁定更长的一段时间。

恶意的公投议案将受到惩罚。Basilisk 议会和技术委员会，有权取消任何恶意提出的公投。后果是，存放的令牌将被烧毁。
:::
