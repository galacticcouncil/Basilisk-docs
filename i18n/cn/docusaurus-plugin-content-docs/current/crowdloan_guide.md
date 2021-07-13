---
id: crowdloan_guide
title: 参与众贷
---

import useBaseUrl from '@docusaurus/useBaseUrl';

本文通过专门的 **[众贷页面](https://loan.bsx.fi)** ，指导您完成参与 **[Basilisk 众贷](/basilisk_crowdloan)** 的过程。

## 前提条件 {#requirements}

要使用专用的众贷页面参与，您需要有一个 **[Polkadot.js 钱包](https://polkadot.js.org/extension/)** ，且持有您想要质押的 KSM 令牌。

:::caution

不可能使用硬件钱包参与众贷。目前的硬件钱包，不支持 Kusama 众贷模块。  

:::

## 00 众贷界面 {#00-crowdloan-ui}

要访问 Basilisk 众贷界面，请访问 https://loan.bsx.fi 。  

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/crowdloan-guide/chart.png')}  />
</div>

中间的图表提供了有关平行链插槽正在进行拍卖的信息。 绿线表示 Basilisk 筹集的 KSM 令牌数量，黄线对应 Basilisk 的主要竞争对手筹集的 KSM 令牌数量。 水平红线标志着目标平行链拍卖结束期的开始。所有这些信息都与确定您将获得的 [BSX 奖励和 HDX 奖金](/basilisk_crowdloan) 金额相关。

## 01 选择地址 {#01-select-address}

首先，点击 *change your account* （更改您的帐户）并选择持有您 KSM 令牌的地址。  

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/crowdloan-guide/select-account.png')}  />
</div>

## 02 输入您的 KSM 贡献 {#02-enter-ksm-contribution}

下一步，您可以输入您想贡献的 KSM 数量。在此之后，您将看到一个关于奖励的预测:

* **Minimum BSX Received** - 您期望从您的贡献中收到 BSX 令牌的最低金额。只有在拍卖成功的情况下，众贷结束后才能确定确切的金额。

* **Current BSX Received** - 在当前拍卖条件下您将收到多少 BSX 的 **粗略** 估计。 这个估计可能不可靠。

* **Current HDX Received** - 因贡献而将收到的 HDX 奖金数额。

如果你想了解更多关于奖励计算背后的机制，请参考 **[Basilisk 众贷](/basilisk_crowdloan)** 这篇文章 。

## 03 提交您的贡献 {#03-submit}

要完成该过程，请单击 *Contribute*（贡献）并使用持有 KSM 令牌的帐户签署交易。

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/crowdloan-guide/sign-submit.png')}  />
</div>
