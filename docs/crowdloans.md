---
id: crowdloans
title: Crowdloans
---

Crowdloans help [parachain](/parachains) candidates raise sufficient funds for winning a slot in the [parachain auctions](/parachain_auctions). This article provides a general understanding of how crowdloans work.


## How does a Crowdloan Work? {#how}

Parachain candidates can initiate a crowdloan campaign using the dedicated Kusama crowdloan module. When doing so, they set its goal (amount of KSM to be raised) as well its end date (by when). The crowdloan campaign is usually initiated before the start of the parachain auction, thereby giving the candidate sufficient time to raise funding.

Crowdloan backers support the parachain candidate of their choice by locking a certain amount of KSM which will be used to place a bid in the parachain auction. The KSM remains locked until one of the following unlocking events has been triggered:

* Candidate wins a parachain slot: After the duration of the parachain slot has expired (48 weeks for Basilisk)
* Candidate does not win a parachain slot: Once the crowdloan goal has been reached or the crowdloan campaign has expired

While crowdloan backers do receive back their funds in full once the unlocking event has been triggered, participating at a crowdloan still bears the so-called **opportunity costs**. These reflect the benefits that were missed by locking KSM tokens for a given period as opposed to investing them in another way. For example, instead of locking KSM tokens for 1 year, users could decide to stake their KSM which would bring them 10-15% rewards. In this example, the 10-15% rewards represent the opportunity costs of participating at a crowdloan.
