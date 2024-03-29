---
id: product_snek_swap
title: Snek Swap
---

Snek Swap 是为 Kusama 生态系统构建的 **[AMM](#intro)**，可以让用户使用所谓的 **[XYK 池](#xyk)** 以非授权的方式交易令牌。通过 Snek Swap，用户可以交易令牌，或成为 **[流动性提供者](#lp)**，并从产生的交易费用中赚取回报。

如果您正在寻找分步操作方法，请查看我们关于 **[交易](/howto_snek_swap_trade)** 和 **[提供流动性](/howto_snek_swap_provide_liquidity)** 的指南。

## AMM 简介 {#intro}

为更好了解自动做市商（AMM）和它的工作原理，我们应首先了解一个核心的东西：订单簿。

### 订单簿 {#intro-order-book}

订单簿，提供了一种由中心化交易所部署、促进两种资产间交易的机制。 用户可以在交易所管理的电子列表中，下达买入或卖出订单。 这个所谓的订单簿中的订单，是按价格水平组织的，并随着需求变化和订单匹配而逐步完成。

在中心化背景下，订单簿的局限性显而易见。由于需要一个中介来“保存”订单簿并促进订单匹配过程，这就产生了对该中央机构的依赖。

中央机构需要得到参与者信任，才可以对交易具有控制权。目前，在加密市场出现大流量和大波动时，停止交易或流动性下降的事故，并不罕见。此外，中央机构也控制了新可交易资产的添加许可权。这意味着，所有这一切都要依赖于操控订单簿的同一个权威机构的批准。

### AMM {#intro-amm}

自动做市商（AMM）是 DeFi 行业解决订单簿集中运营的一个方案。 AMM 提供了一种去中心化、无需许可的令牌交易方式，不受中央机构控制。

AMM 由拥有基础交易资产可用流动性的流动性池组成。 这种流动性由用户，即所谓的“流动性提供者”提供，他们这样做，是希望从池中交易费用中获得回报。

在 AMM 模式下，任何用户都可以在给定的交易池上执行买入或卖出指令。一笔交易的价格，是由一种确定性算法当场确定的，该算法兼顾了交易资产的流动性，以及能够左右特定 AMM 实施的其他因素。

在 Basilisk，我们实施了最常用的 AMM 模型 - XYK，它提供了交换功能。在不久的将来，我们将实施流动性引导池（LBP），通过允许自主引导初始流动性、导航价格发现和实现公平的令牌分配，为早期项目提供支持。

## Snek Swap 工作机制（XYK） {#xyk}

Snek Swap 是使用所谓的 XYK AMM 这种最常用的 AMM 模型建立的，用于促进从一个资产到另一个资产的互换。一个 XYK 池通常由一对可交易令牌组成，`X` 和 `Y`。两种资产之间的关系，用所谓的 `乘积系数` 公式来表示，这也是 XYK 这个名字的由来:

`x * y = k`

一个实际的例子，将有助于理解 XYK 机制。假设推出了一个新池，持有 `100 个 X 令牌` 和 `100 个 Y 令牌` 。在这个例子中，乘积系数是 `k = 10000`。

现在，假设 Bob 想通过存入 `一定数量的 Y 令牌` 来执行一项交易，以获得 `1 个 X 令牌`。乘积系数公式告诉我们，为了在交易后保持池的平衡，应该有多少 Y 令牌:

`Y_新 = (k / X_新) = 10000/99 = 101.01`

换句话说，Bob 只有在他存入足够的令牌使得 `Y = 101.01` ，他才可以提取 `1 个 X 令牌`。这意味着 Bob 需要覆盖旧状态（Y = 100） 和新状态（Y = 101.01）之间的差异，从而产生 `1.01 个 Y 令牌` 。这就是交换的价格。

## 提供流动性 {#lp}

由于 AMM 的去中心化方式，任何人都可以通过存储每个基础代币的同等价值换取 LP 份额，成为池的流动性提供者（LP）。

流动性提供者，根据他们挑选提供流动性的流动性池发生的交易活动，获得提供这种流动性的费用。

### 无常损失（IL）

流动性提供者面临的风险，被称为无常损失（或叫发散损失）。

这个风险，是由 AMM 流动性池中持有的令牌和钱包中持有令牌二者间的价值差异造成的。

流动性池，由多个令牌（通常是两个）组合在一个池中形成。当池内的令牌，在价格上发生分歧时，IL 发生。差异越大，池流动性提供者的负收益风险就越大。

这种风险被称为 *无常性*，因为只有当您从池中取出令牌时，损失才会实现。如果池中令牌的相对价格回到您当初存放时的原始状态，损失将最小化或消除。

从您取出令牌的那一刻起，损失就变成了 *永久性*，这将会减少您的收入，有时甚至会抹去您的全部利润份额。

因此，流动性提供者需要权衡，是作为 LP 获得费用和奖励呢，还是仅仅将令牌放在钱包中。
