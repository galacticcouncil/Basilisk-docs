---
id: parachains
title: Parachains
---

One of the most distinctive features of Polkadot and Kusama is the support of parachains. Parachains are individual blockchains built on Substrate which are designed to handle specific use-cases and which are connected to the so-called relay chain (i.e. Kusama or Polkadot).

For a better understanding of parachains and their place within the network, this article examines some of their defining characteristics: [specialization](#specialization), [shared security](#shared-security), [scalability](#scalability) and [interoperability](#interoperability).


## Specialization {#specialization}

The world as we know it is built upon the concept of specialization: The process of becoming experts in a particular area or skill. Parachains bring specialization into the world of blockchain. The design of Kusama empowers parachain developers to focus on the features that make their chain unique while taking advantage of shared security and interoperability.

Basilisk's specialization is liquidity bootstrapping for new cryptoassets: With its modular design, Basilisk empowers long tail cryptoassets to bootstrap liquidity using an AMM model of their choice. From traditional XYK-pools, through weighted Liquidity Bootstrapping Pools and curves, all the way to auctions and an NFT marketplace: Basilisk has got you covered.


## Shared Security {#shared-security}

Security is one of the challenges that has been holding back the adoption of specialized layer-1 blockchain solutions. Obtaining a large and decentralized set of validators is key to the security of the network, however this goal might prove too ambitious to attain for some niche projects.

All Kusama parachains enjoy industrial-grade security which comes out of the box. They are connected to the relay chain (Kusama) and secured by its set of validators. Parachains have their own sets of collators that are responsible for maintaining a full-node of the parachain and for producing new block candidates. The produced block candidates are passed to the validators of the relay chain which verify the blocks and include them in the shared state of Kusama. As a result, parachains share the same high level of security as Kusama itself.


## Scalability {#scalability}

Despite being connected to the relay chain, parachains remain independent layer-1 blockchains that produce their own blocks. This design feature has great performance implications because it allows transactions to be processed by different chains in parallel. The capability of parallel processing underpins the infamous scalability and high throughput of the Kusama network.


## Interoperability {#interoperability}

All parachains that are connected to the Kusama relay chain can communicate with each other using a feature called Cross-Chain Message Passing (XCMP). XCMP empowers individual parachains not only to exchange tokens but also richer information such as smart contracts, thus paving the way for the DeFi expansion. Kusama's interoperability is a stepping stone towards the multi-chain future where cross-chain transfers become part of our daily lives.
