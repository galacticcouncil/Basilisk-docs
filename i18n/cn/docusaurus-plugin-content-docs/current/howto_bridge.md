---
id: howto_bridge
title: 桥接令牌
---

import useBaseUrl from '@docusaurus/useBaseUrl';

如果您想 **交易 BSX**，或为一些 Basilisk XYK 池 **提供流动性**，您可能希望将令牌桥接或脱离 Basilisk 链。您可以使用 XCM - Kusama 的 cross-messaging 协议来实现。

目前，Basilisk XCM 转账支持以下令牌：
* BSX
* aUSD
* KSM

要对上面列出的资产进行 XCM 转账，可以使用 **[Karura 桥](#karura)**。

## 使用 Karura 桥 {#karura}

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_bridge/ausd.jpg')} />
</div>

### 步骤 1: 导航至 Karura 桥页面

[https://apps.karura.network/bridge](https://apps.karura.network/bridge)

### 步骤 2: 连接您的账户

点击 `Connect Account` **(上图中 1)**，连接到您的 Dotsama 钱包。 

如果您还没有 BSX 帐户，请按照 **[本指南](/create_account)** 创建一个。

### 步骤 3: 桥接令牌

* 选择您想要桥接令牌的 `Origin Chain`（来源链） **（2）**，以及将接收令牌的 `Destination Chain`（目的链）**（2）**。
* 选择您想要桥接的令牌 **（3）**，并输入金额。
* 点击 `Transfer` **（4）**，使用 Kusama 钱包应用程序签署交易。

```
Examples:

Alice 想把 KSM 从 Kusama 桥接到 Basilisk 链。为此，Alice 将选择:
* Origin Chain: Kusama
* Destination Chain: Basilisk
* Token: KSM

Bob 想把 BSX 从 Basilisk 桥接到 Karura 。为此，Bob 将选择:
* Origin Chain: Basilisk
* Destination Chain: Karura
* Token: BSX
```

恭喜您！您刚刚使用了 Karura 桥，将令牌桥接到 Basilisk。
