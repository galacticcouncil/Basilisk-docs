---
id: parachain_auctions
title: 平行链拍卖
---

import useBaseUrl from '@docusaurus/useBaseUrl';

平行链拍卖提供了一种机制，可以将Kusama 中可用的 **[平行链](/parachains)** 插槽分配给最合适的候选人。本文通过探讨两个问题来介绍平行链拍卖：为什么有平行链拍卖？它们是如何运作的？

## 为什么？ {#why}

Kusama 和 Polkadot 只能支持有限数量的平行链同时连接到它们的中继链。Polkadot 的长期目标是 100 条平行链，而 Kusama 初期支持 5 条平行链，此后不久还会有 5 条平行链。

在此背景下，平行链拍卖作为市场有效工具被引入。它通过将可用插槽分配给最合适的平行链候选者来处理稀缺性。

## 平行链拍卖如何运作？ {#how}

平行链插槽在各自为期 1 周的单独拍卖中逐一提供。在此时间段内，候选项目可以竞标其所需持续时间的平行链插槽。可用插槽以6周为一个租赁期被划分。平行链插槽的最长租赁期时间为 48 周（8 * 6 周）。您可以在下方查看前 5 个 Kusama 插槽的拍卖时间表。

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/parachain-auctions/ksm-schedule.jpg')}  />
</div>

拍卖的获胜者，是在平行链插槽拍卖结束时 **锁定最高数量的 KSM** 的平行链候选者。然而，这可能不是很直接，因为 Kusama 使用所谓的 **蜡烛拍卖机制**，其中拍卖的结束时刻在 **最初是未知的**。

如下图所示，蜡烛拍卖由开始期（1 天 21 小时）和结束期（5 天）组成。候选人可以在任何时候出价，但正式拍卖结束时间是在最后确定的，在 5 天的结束期限内随机选择一个时间。在该特定时刻出价最高的候选人是平行链插槽的获胜者。

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/parachain-auctions/auction-mechanism.jpg')}  />
</div>
