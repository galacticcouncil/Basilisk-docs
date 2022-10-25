---
id: product_snek_swap
title: Snek Swap
---

Snek Swap is an [AMM](#intro) built for the Kusama ecosystem which enables users to trade tokens in a decentralized and permissionless manner using so-called [XYK pools](#xyk). With Snake Swap, users can trade tokens or become a [liquidity provider](#lp) and earn rewards from the generated trading fees.

If you are looking for step-by-step guides, please check out our guides on [swapping tokens](/howto_snek_swap_trade) and on [providing liquidity](/howto_snek_swap_provide_liquidity).

## A short intro into AMMs {#intro}

In order to better understand Automated Market Makers (AMMs) and how they work, we should first take a look at their centralized counterpart: Order Books.

### Order Books {#intro-order-book}

Order Books provide a mechanism deployed by centralized exchanges to facilitate trading between two assets. Users can place a Buy or Sell order in an electronic list managed by the exchange. The orders in this so-called Order Book are organized by price level and progressively filled as demand shifts and orders are being matched.

The limitations of Order Books become apparent against the background of their centralized nature. The need for an intermediary to “keep” the Order Books and to facilitate the process of order matching creates a dependency on this central authority.

The central authority has control over the trading and needs to be trusted by the participants. Currently in crypto, in moments of substantial volume traffic and volatility, halting of trading or degradated liquidity is not an uncommon mishap. Furthermore, the process of adding new tradable assets is permissioned; meaning that, it is dependent upon the approval by the same authority which operates the Order Book.

### AMMs {#intro-amm}

Automated Market Makers (AMMs) is the answer by the DeFi industry to centrally operated Order Books. AMMs provide a decentralized, permissionless way of trading tokens without the need to subdue oneself to a central authority of control.

AMMs consist of liquidity pools that hold the available liquidity of the underlying tradable assets. This liquidity is provided by users (the so-called “liquidity providers”) who are incentivized to do so by the prospect of earning rewards from the fees generated by trades in the pool.

In the case of AMMs, any user can execute a Buy or Sell order on top of a given trading pool. The price of a trade is determined on the spot by a deterministic algorithm which takes as input the relationship between the liquidity of the traded assets, together with other factors which depend on the particular AMM implementation in question.

At Basilisk, we have an implementation of the the most commonly used AMM model - XYK, which provides swap functionality. In the nearest future, we will deliver our implementation of Liquidity Bootstrapping Pools (LBP) which empowers early-staged projects by allowing them to autonomously bootstrap initial liquidity, navigate price discovery and achieve a fair token distribution.

## Mechanics of Snek Swap (XYK) {#xyk}

Snek Swap is built using the so-called XYK AMM model which is the most common AMM used to facilitate swaps from one asset to another. An XYK pool typically consists of a pair of tradable tokens, `X` and `Y`. The relationship between the two assets is expressed by the so-called “constant product” formula, which is also where the name "XYK" comes from:

`x * y = k`

A practical example would be helpful to understand the XYK mechanics. Imagine that a new pool is launched holding `100 tokens of X` and `100 tokens of Y`. In this example, the constant product would be `k = 10000`.

Now imagine that Bob wants to perform a trade to obtain `1 token of X` by depositing `some amount tokens of Y`. The constant product formula tells us how much `tokens of Y` there should be in order to keep the pool in balance after the trade:

`Y_new = (k / X_new) = 10000/99 = 101.01`

In other words, Bob can withdraw `1 token of X` under the condition that he deposits enough tokens to bring the amount of `Y = 101.01`. This means that Bob needs to cover the difference between the old state (Y = 100) and the new state (Y = 101.01), resulting in `1.01 tokens of Y`. This is the price of the swap.

### Slippage {#slippage}

When a trade is executed, users may experience a common side-effect of the XYK AMM known as `slippage`. This is the difference between the expected price of a trade and the price when the trade is actually executed.

Slippage is determined by the amount of liquidity available within each trading pool. If there is a low amount of liquidity provided to a certain pair of assets, then the slippage percentage when transacting with big orders will be higher.

The table below demonstrates the effect of slippage on the trading price. Using the previous example of a pool containing `100 tokens of X` and `100 tokens of Y`, we can see how the price for `1 token of X` increases as the order grows.

| Token X (Out) | Token Y (In) | Price per X (in Y) |
| :---: | :---: | :---: |
| 1 | 1.01 | 1.01 |
| 5 | 5.26 | 1.05 |
| 10 | 11.11 | 1.11 |
| 20 | 25  | 1.25 |
| 50 | 100 | 2 |

Note that in Snek Swap, you can set the amount of Slippage you are willing to incur for any trade. This helps the user avoid any unfavorable trades out of their expectations.

## Providing Liquidity {#lp}

Thanks to the decentralized manner of an AMM, anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for an LP share.

LPs are rewarded with fees for providing this liquidity based on the trading activity experienced by this individual liquidity pool that they have selected to LP for.

### Impermanent Loss (IL) {#impermanent-loss}

A risk faced by LPs is called Impermanent loss (or divergence loss).

This is the risk of the difference in value between holding tokens in an AMM liquidity pool and holding them in your wallet.

Liquidity pools consist of multiple tokens (usually two) paired together in a pool. IL occurs when the tokens inside the pool diverge in price. The greater the divergence, the greater the risk of negative returns for the pool's LPs.

The risk is referred to as "impermanent" because the loss is only realized when you withdraw your tokens from the pool. If the relative prices of tokens in the pool return to their original state when you deposited tokens, the loss is minimized or eliminated.

The losses become *permanent* the moment you withdraw your tokens, reducing your earnings and sometimes wiping out your entire share of profits. 

As such, LPs need to weigh the fees and rewards earned from being a LP versus simply holding your tokens in your wallet.