---
id: parachain_auctions
title: Parachain Auctions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Parachain auctions provide a mechanism to distribute the available [parachain](/parachains) slots in Kusama to the most appropriate candidates. This article introduces parachain auctions by exploring two questions: Why do we have parachain auctions, and how do they work?

## Why? {#why}

Kusama and Polkadot are only able to support a limited number of parachains which are connected to their relay chain at the same time. The long-term goal for Polkadot is 100 parachains, while Kusama is kicking off the party with 5 parachains in the first round and another 5 to follow shortly thereafter.

Against this background, parachain auctions were introduced as a market-efficient instrument for dealing with the scarcity by distributing the available slots to the most appropriate parachain candidates.


## How do Parachain Auctions work? {#how}

Parachain slots are offered on an one-by-one basis in separate auctions which have the duration of 1 week. During this timeframe, candidate projects can bid on a parachain slot of their desired duration. The available slots are divided into lease periods of 6 weeks. The maximum duration of a parachain slot is 48 weeks (8 * 6 weeks). Below, you can see the auctions schedule for the first 5 Kusama slots.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/parachain-auctions/ksm-schedule.jpg')}  />
</div>

The winner of the auction is the parachain candidate that has offered the **highest amount of KSM to be locked up** for the duration of the parachain slot at the closing moment of the auction. However, this might not be very straight-forward because Kusama uses the so-called **candle auction mechanism** in which the closing moment of the auction is **initially unknown**.

As illustrated by the image below, the candle auctions consist of a starting period (1 day 21 hours) and an ending period (5 days). Candidates are able to bring out their bids at any moment, however the official auction closing moment is determined at the very end by picking a random moment somewhere within the ending period of 5 days. The candidate with the highest bid at that specific moment is the winner of the parachain slot.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/parachain-auctions/auction-mechanism.jpg')}  />
</div>

The rationale behind this auction mechanism is to prevent auction sniping while promoting a more accurate price discovery. For crowdloan backers, it has an important implication: Support the [Basilisk crowdloan](/basilisk_crowdloan) by locking your KSM early rather than late. This way, you make sure that your contribution is counted towards the winning bid of Basilisk.
