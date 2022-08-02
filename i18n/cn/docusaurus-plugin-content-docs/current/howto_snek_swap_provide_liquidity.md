---
id: howto_snek_swap_provide_liquidity
title: 提供流动性
---

import useBaseUrl from '@docusaurus/useBaseUrl';

在这一页，你会找到在 Snek Swap（XYK）池 **成为流动性提供者的分步指南**。提供流动性，您会从池中交易产生的费用中 **赚取回报**。

本指南，涵盖了 **[添加](#add)** 和 **[撤回](#withdraw)** 流动性两个流程。

在决定成为流动性提供者前，鼓励您访问 **[Snek Swap](/product_snek_swap)** 产品页面，**深入了解** XYK 池的功能和注意事项。

## 添加流动性 {#add}

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_xyk/lp-add-screen.jpg')} />
</div>

### 步骤 0: 桥接令牌 {#add-0-bridge}

在您为 BSX 和 aUSD 或 KSM 池提供流动性前，首先需要 **将这些非本地资产** 连接到 Basilisk 链。为此，您可以使用 **[Karura 桥](https://apps.karura.network/bridge)**。

桥，也可以用来将 BSX、aUSD 或 KSM 从 Basilisk 链转移到 Karura 或 Kusama。

要了解 Kusama 链间令牌转移的分步指导，请访问我们的 **[桥接指南](/howto_bridge)**。

### 步骤 1: 导航至 Basilisk 池页面 {#add-1-navigate}

[https://app.basilisk.cloud/#/pools](https://app.basilisk.cloud/#/pools)

### 步骤 2: 连接您的账户 {#add-2-connect}

点击 `Connect Account` **（上图中 1）**，连接到 Basilisk 钱包。

### 步骤 3: 选择令牌添加流动性 {#add-3-add-liquidity}

确保切换选中 `Add` 页面。

选择令牌对 **（2）** 和您希望贡献的流动性金额 **（3）**。然后，点击 `Add Liquidity` **（4）**，使用钱包应用程序签署交易。

请注意，您必须同时持有两个令牌以提供流动性。如果您还没有令牌，可在 Basilisk XYK 上购买。

---

## 撤回流动性 {#withdraw}

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_xyk/lp-remove-screen.jpg')} />
</div>


### 步骤 1: 导航至 Basilisk 池页面 {#withdraw-1-navigate}

[https://app.basilisk.cloud/#/pools](https://app.basilisk.cloud/#/pools)

### 步骤 2: 连接您的账户 {#withdraw-2-navigate}

点击 `Connect Account` **（上图中 1）**，连接到 Basilisk 钱包。

### 步骤 3: 选择令牌撤回流动性 {#withdraw-1-withdraw-liquidity}

连接钱包后，切换到 `Remove` **（2）**。

选择您想要从 **（3）** 中移除流动性的令牌对。之后，输入您要撤回的 LP 份额令牌数量 **（4）**。

点击 `Remove Liquidity` **（5）**，使用您的钱包应用程序签署交易。
