---
id: product_snek_lbp
title: Snek LBP
---

**Snek LBP** (Liquidity Bootstrapping Pool) is a **permissionless Automated Market Maker (AMM)** built for the Kusama ecosystem. Its aim is to **empower young crypto projects** by allowing them to **bootstrap liquidity** and **navigate initial price discovery** while performing a **fair distribution of tokens to their communities**.

To achieve this, Snek LBP uses a **mechanism of time-based weights shifting** which exerts a **continuous downward pressure** on the price. This is being **counteracted by any buy orders**  that change the amount of tokens in the pool and drive the price up.

You can [learn more about the mechanics of an LBP](/howto_snek_lbp_mechanics) and also visit our [step-by-step guide for buying tokens in an LBP](/howto_snek_lbp_buy).

## Raising liquidity with Snek LBP
Raising early liquidity using Snek LBP has several advantages as compared to other methods. In the first place, it is **decentralized** and **permissionless**. In the second place, Snek LBP is **more capital-efficient** than traditional XYK swap pools. Thanks to the weights mechanism, **only a fraction of liquidity** is needed to kickstart an LBP. Finally, the shifting weights create the excitement needed to navigate price discovery while distributing your tokens to the community in a fair manner.

Looking across the other avenues of token distributions, the LBP solves many of the issues which plague the other launch methods.

| Launch Method | Pros | Cons |
| --- | --- | --- |
| CEX | Increased visibility and exposure | Listing fees (for projects); Centralized |
| Whitelist to XYK | Ensures allocation for early community members | Subject to front-running bots when launching XYK; Permissioned |
| Stealth Launch | Ensures “equal opportunity” to acquire token | Subject to front-running bots when launching XYK; Insiders likely contribute to front-running |

## Features of Snek LBP

### Decentralized **and permissionless**

No whitelists, hard caps, or listing requirements. There is no minimum or maximum allocation. Just choose how much you would like to distribute to your community and let the LBP magic take care of the rest.

### **Capital-efficient**

Kickstarting an LBP does not require big amounts of initial liquidity. Unlike a traditional XYK pool, the team is not required to put up 50% in value of the other token used to bootstrap liquidity. Instead, the LBP weights mechanism allows to reduce the amount of collatoral

For the projects launching a direct XYK pool, the team is required to put up 50% in value of another token (likely a stablecoin or major token like DOT or KSM). This is capital intensive for any project at the beginning. With the LBP, the team is able to reduce the amount of  collateral put up by up to 99% through programmatically magnifying the project's token.

### **Navigate price discovery**

Because there is no bot artificially sniping 50% of the pool (like direct XYK pool launches) right from the get-go, participants have a chance to buy the token at the price point he/she thinks is acceptable. If they think the price is too high/low during the LBP, they can sell back/buy into the LBP, helping regulate the price.

### **More fair to humans**

There is no incentive to front-run because the price is intentionally set higher and slowly declines if there is no demand. The average Joe is able to have a chance to buy the token during the LBP without having to FOMO in at the beginning and competing in gas wars. The downward price pressure also acts as a whale deterrent and allows for a longer window for more people to participate.

### Unique repayment mechanism

In addition to the general LBP features, our Snek LBP product also allows creators to dynamically adjust fees received from the LBP. This allows the team to determine: 1) The amount of fees collected (at start and during LBP), and 2) The location of fee accrual (single or multi-wallet). This allows team to ensure launch costs are recuperated while setting aside part of the funds to seed the XYK pool after LBP. 

With our unique repayment mechanism, LBP creators are also able to potentially tap into the BSX treasury to borrow funds for the initial seed liquidity for their LBP. The borrowed funds would automatically first be repaid to the BSX treasury during the course of the LBP period. Once fully repaid, the team would then begin accruing the remaining fees earned.
