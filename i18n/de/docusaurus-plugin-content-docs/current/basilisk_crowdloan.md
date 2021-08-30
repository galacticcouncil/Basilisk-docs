---
id: basilisk_crowdloan
title: Basilisk Crowdloan
---

The [Basilisk crowdloan](https://basiliskfi.substack.com/p/the-snek-is-back) for the Kusama parachain auctions is now live! You can support Basilisk by participating in our crowdloan campaign and pledging some amount of KSM tokens which will be locked up for the duration of the parachain slot. In return, you will be granted **generous BSX rewards plus an HDX bonus** to cover your opportunity costs. Once the parachain slot has expired, you will receive your KSM tokens back in full. The same applies to the unlikely scenario that Basilisk does not manage to win a parachain slot within the crowdloan campaign deadline stated hereunder.

You can participate directly by visiting our [crowdloan page](https://loan.bsx.fi). You can also check out our [step-by-step crowdloan guide](/crowdloan_guide) which will guide you through the process. Alternatively, you can participate in the Basilisk crowdloan using [Fearless Wallet](https://fearlesswallet.io/#) or [Kraken](https://www.kraken.com/learn/parachain-auctions).

In this post you will find the general details of the Basilisk crowdloan as well as more detailed information on how the rewards mechanism works. If you are a newcomer who is interested in learning more about the project, you can check out some of the materian under `Learn` which will help you understand [parachains](/parachains), [parachain auctions](/parachain_auctions) and [crowdloans](/crowdloans).

## Crowdloan Details {#crowdloan-details}

* Visit: https://loan.bsx.fi/
* Start: **31 August 2021**
* Parachain slot duration: **48 weeks**
* Target parachain slot: **#6 - #10**
* Crowdloan cap: **222,222 KSM**
* Total BSX rewards: **15,000,000,000 BSX (15% of total supply)**
* HDX rewards: **56,873,469 HDX (max)**
* Vesting period: BSX rewards and HDX bonuses are distributed linearly. The distribution will start once the Basilisk LBP event has been concluded (~2 weeks after the parachain slot is won) and will continue until 1 week before the parachain slot expires.
* Crowdloan campaign deadline: 09 October 2021

## Rewards Mechanism {#rewards-mechanism}

All community supporters are rewarded for participating in the crowdloan after Basilisk has secured a parachain slot. The available rewards consist of BSX and HDX tokens which are distributed at a different rate depending on the state of the crowdloan at the time of the contribution. The rewards mechanism has been designed with the best interest of the Basilisk stakeholders in mind. The aim is to not overpay for the parachain slot, thereby minimizing the opportunity costs for backers and maximizing the potential future upside. Below, you will find the BSX and HDX rewards mechanisms explained.


### BSX Rewards {#bsx-rewards}
The amount of BSX rewards which will be received by each participant can only be determined at the end of the crowdloan campaign after Basilisk has secured a parachain slot. The calculation of the rewards consists of two steps.

In the first place, all KSM contributions are weighed using a rewards multiplier. The multiplier has a float **value between 1 and 0** depending on the point in time when the contribution was made. A rewards multiplier of **1.0** applies to all KSM which was **pledged before the winning auction has started closing** (auction #6: Sept 3rd around 09.00 GMT). After that, the multiplier begins to linearly decrease until it has reached **0 at the closing time of the auction** (auction #6: September 8th around 09.00 GMT)**. If the total pledged KSM is not sufficient for winning a slot in auction #6, then the following **auction #7 will become the new target auction**. Accordingly, the multiplier for all KSM which was pledged during the previous auction #4 will be reset to 1 (the contributors will receive full HDX rewards).

After the weighted KSM contributions have been established using the procedure described above, the exact amount of individual rewards is calculated. The amount of rewards is determined in accordance with the proportion of the weighted individual contribution in relation to all weighted KSM contributions, as shown in the following formula:

```
rewards = (weighted_indivudial_contribution / total_weighted_contributions) * crowdloan_cap
```

While we cannot determine the exact amount of rewards until the parachain slot has actually been won, it is possible to calculate the minimum amount of BSX rewards for any given contribution. This can be done under the assumptions that the crowdloan would manage to reach its maximum cap of 200.000 KSM, and that all contributions would have the highest rewards multiplier of 1,0. This, of course, is a highly unlikely scenario but it allows us to indicate in the Crowdloan UI the minimum amount of BSX tokens that contributors can expect in return for their KSM.

### HDX Bonus {#hdx-bonus}

To further incentivize timely support, all crowdloan backers will receive additional HDX bonus covering **5-30% of the opportunity costs** of their KSM contribution. For a lockup period of ~11 months, these opportunity costs are currently estimated at **13.75%** (based on a 15% APY for KSM staking).

Also here, the exact percentage of the opportunity costs which will be covered is determined by the state of the crowdloan at the moment when the KSM contribution is made. The HDX bonus multiplier will be at its **maximum of 0.3** while Basilisk is lagging behind its competitors for a parachain slot. Once Basilisk has become **first with a **15% lead**, the bonus multiplier will start to linearly decrease towards a **minimum of 0.05**. This minimum is reached once Basilisk is leading the race by 20% or more.

Taking above into account, the amount of the bonus (in KSM) for an individual contribution is calculated using the following formula:

```
bonus_in_KSM = contributed_KSM * opportunity_costs * bonus_multiplier
```

At the end, the bonus is converted to HDX using the last known historical price of $ 0.08059 for 1 HDX. 
