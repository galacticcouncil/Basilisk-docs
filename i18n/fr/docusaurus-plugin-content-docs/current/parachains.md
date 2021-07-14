---
id: parachains
title: Parachaînes
---

Une des caractéristiques les plus distinctives de Polkadot et Kusama est la prise en charge de parachaînes. Les parachaînes sont des chaînes de bloc construite sur Substrate qui est conçu pour gérer des cas d’utilisation spécifiques et qui sont connectées à ce que l’on appelle la chaîne relai (par exemple: Kusama ou Polkadot).

Pour une meilleure compréhension des parachaînes et de leur place au sein du réseau, cet article examine certaines de leurs caractéristiques typiques: [spécialisation](#specialization), [sécurité partagée](#shared-security), [évolutivité](#scalability) et [interopérabilité](#interoperability).


## Spécialisation {#specialization}

Le monde tel que nous le connaissons est construit sur le concept de spécialisation: le processus de devenir experts dans dans certains domaines ou certaines compétences. Les parachaînes apporte la spécialisation dans le monde des chaînes de bloc. La conception de Kusama permet aux développeurs de se concentrer sur les caractéristiques qui rendent leur chaîne unique tout en possédant les avantages de la sécurité partagée et de l’interopérabilité.

La spécialisation de Basilisk est la gestion de liquidité pour de nouveaux actifs crypto: avec sa conception modulaire, Basilisk habilite les actifs crypto à longue train à gérer leur liquidité en utilisant un modèle AMM (faiseur de marché automatisé) de leur choix. Des traditionnelles pools XYK, en passant par les pools et courbes de gestion de liquidités pondérées, jusqu’aux enchères et au marché de NFT: Basilisk assure vos arrières.


## Sécurité Partagée {#shared-security}

La sécurité est un des défis qui a freiné l’adoption des solutions de chaînes de bloc de couche première (layer-1) spécialisées. Avoir un ensemble de validateurs large et décentralisé est la clé pour la sécurité du réseau, toutefois, cet objectif pourrait être trop ambitieux à atteindre pour certains projets niches.

Toutes les parachaînes Kusama profitent d’une sécurité de niveau industriel directement disponible. Elles sont connectées à la chaîne relai (Kusama) et sécurisées par leurs ensembles de validateurs. Les parachaînes ont leur propre ensemble d’assembleurs qui sont responsable de maintenir un node complet de la parachaîne et de produire de nouveaux blocs candidats. Les blocs candidats produits sont passés aux validateurs de la chaîne relai qui vérifie les blocs et les inclus dans l’état partagé de Kusama. Par conséquent les parachaînes partagent le même niveau de sécurité que Kusama lui-même.


## Évolutivité {#scalability}

Bien qu’étant connectées à la chaîne relai, les parachaînes restent des chaînes de bloc de couche-1 qui produisent leurs propres blocs. Cette caractéristique de conception a de grandes implications de performance parce que ça permet aux transactions d’être traitées sur différentes chaînes en parallèle. La capacité de traitement parallèle souligne l’évolutivité et le haut débit du réseau Kusama.


## Interopérabilité {#interoperability}

Toutes les parachaînes qui sont connectées la chaîne relai Kusama peuvent communiquer les unes avec les autres en utilisant une caractéristique appelée «Cross-Chain Message Passing» (XCMP), qui veut dire, passage de messages inter-chaîne. XCMP habilite les parachaînes individuelles à, non seulement échanger des tokens mais aussi des informations plus fournies telles que des contrats intelligents (smart contracts), ouvrant ainsi la voie pour l’expansion des DeFi (Decentralized Finance: Protocole de Finance décentralisée). L’interopérabilité de Kusama est tremplin vers le futur multi-chaînes ou les transferts inter chaînes deviennent une partie de notre quotidien. 
