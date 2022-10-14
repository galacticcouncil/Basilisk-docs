---
id: howto_snek_lbp_mechanics
title: LBP 机制
---

import useBaseUrl from '@docusaurus/useBaseUrl';

本文对 **流动性引导池（LBP）背后的机制** 进行了介绍。我们建议您在参加 LBP 之前仔细阅读此信息。

您还可以参考 **[Snek LBP 产品描述](https://docs.bsx.fi/cn/product_snek_lbp)** 和 **[在 LBP 中购买令牌的分步指南](https://docs.bsx.fi/cn/howto_snek_lbp_buy)**。

:::warning
本文中的信息，仅用于说明之目的。每个 LBP 都不相同，任何人都不可能提前预测价格走向。

LBP 的起始价格、权重设置和项目流动性整体利润的提高，都是影响 LBP 期间价格引导的因素。

跟风之前，请自己做好研究！
:::

## LBP 一般轨迹概述

### 开始时
LBP 事件，以预定义的起始价格开始。项目可以决定设一个不切实际的起始高价，并让权重将其压低，但实际情况并非总是如此。关于起始价，你应在投资前自己做好研究。

如果起始价格比预期估值高（出很多倍），那么在 LBP 活动一开始就购买，可能并不明智。

### LBP 活动期间
每个 LBP 活动，一般都设置运行一段特定的时间（通常 3-5 天）。通过预先编程更改池中令牌的权重，在 LBP 活动期间将开始施加下行的价格压力。这种程序性下降，在 LBP 的开始阶段，下行压力是最大的。这是因为，当令牌权重比例从 90-10 变为 89-11 时，后者供应量增加了 10%，而如果权重比例从 60-40 变为 59-41 时，则供应量仅增加 2.5%。  

因为程序化价格下行压力的存在，参与者会在价格达到他们认为的合理水平时，才会选择进入。当参与者开始从 LBP 购买时，将改变预期的价格轨迹，因为这改变了两种令牌之间的比例。此外，买入订单的规模和时间，也会影响价格。放一个非常大的订单上去，将推动价格上涨（很多），这意味着将订单分成更小的份儿，可能是一个好主意。

最终，随着下行压力减小，来自参与者的购买压力将进一步克服程序的下行压力（供应），价格将开始上涨。在这个时候，一些参与者也可能将其获得的令牌卖回给 LBP，这也会改变 LBP 的预期价格轨迹。

## 模型场景示例（解释性）

让我们看看 LBP 价格轨迹是如何根据用户行为发生变化的。请注意，以下示例和价格，仅用于说明。

### 图 1: 如果没有人购买

如果没有人购买，价格将根据下面显示的类似曲线持续下跌：

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/model_1.jpg')} />
</div>

### 图 2: 如果有人购买（小额吃单）

如果买入压力较小，但持续在 0.01 美元关口上方，曲线将如下所示：

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/model_2.jpg')} />
</div>

### 图 3: 如果有人购买（大额吃单）

如果有人以 0.005 美元的价格购买所有令牌的 1/4 ，而其他人没有购买或出售，则曲线将如下所示：

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/model_3.jpg')} />
</div>

### 图 4: 如果有人购买（尾声时出价过高）

如在 LBP 活动即将结束时出现大量的购买订单，价格可能会大幅上涨。这是因为在 LBP 结束时，权重的下行压力非常小，大量购买订单的影响就相对较大：

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/model_4.jpg')} />
</div>

## 真实的 LBP 案例

上面的抽象模型场景，应该会对理解用户订单和权重转移之间的交互，有一些帮助。

现在，让我们看几个真实的 LBP 案例：

### 案例 A

价格最初受到机器人/鲸鱼狙击，并大大高于最初的价格。随着时间推移，涨幅最终被重新加权所抵消，一旦达到更合理的价格，需求就会回升。

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/exhibit_a.jpg')} />
</div>

### 案例 B

在买家的大量需求大幅推高价格前，最初的价格并没有受到阻挠，允许下跌。鉴于 LBP 的持续时间，买家仍有很好的机会以自己可接受的价格进入。

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/exhibit_b.jpg')} />
</div>

### 案例 C: HydraDX LBP

最后，您可以看看我们在 2021 年 2 月份对 **[HydraDX LBP 的分析](https://hydradxcn.substack.com/p/lbpfx)**，该分析帮助 HydraDX 筹集了 2290 万 DAI，这是有史以来最成功的 LBP 案例之一。

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/exhibit_c.jpg')} />
</div>

