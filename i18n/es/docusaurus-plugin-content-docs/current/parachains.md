---
id: parachains
title: Parachains
---

Una de las características más distintivas de Polkadot y Kusama es el soporte de parachains. Las parachains  son blockchains individuales creadas en Substrate, que están diseñadas para manejar casos de uso específicos y que están conectadas a la llamada relay chain (es decir, Kusama o Polkadot).

Para una mejor comprensión de las parachains y su lugar dentro de la red, este artículo examina algunas de sus características definitorias: [especialización](#specialization), [seguridad compartida](#shared-security), [escalabilidad](#scalability) e [interoperabilidad](#interoperability).


## Especialización {#specialization}

El mundo tal como lo conocemos se basa en el concepto de especialización: el proceso de convertirse en expertos en un área o habilidad en particular. Las parachains traen la especialización al mundo de blockchain. El diseño de Kusama permite a los desarrolladores de parachains centrarse en las características que hacen que su cadena sea única mientras aprovechan la seguridad compartida y la interoperabilidad.

La especialización de Basilisk es el bootstrapping de liquidez para nuevos criptoactivos: con su diseño modular, Basilisk habilita a los long tail de los criptoactivos a hacer un bootstrap de liquidez utilizando un modelo AMM de su elección. Desde los tradicionales grupos XYK, pasando por los Liquidity Bootstrapping Pools y curves, hasta las auctions (subastas) y un mercado NFT: Basilisk lo tiene cubierto.

## Seguridad compartida {#shared-security}

SLa seguridad es uno de los desafíos que ha estado frenando la adopción de soluciones especializadas de Blockchains Layer-1(Capa 1). Obtener un conjunto grande y descentralizado de validadores es clave para la seguridad de la red, sin embargo, este objetivo puede resultar demasiado ambicioso para algunos proyectos de nicho.

Todos las parachains de Kusama disfrutan de una seguridad de grado industrial que sale de la caja.  Están conectados a la relay chain (Kusama) y asegurados por su conjunto de validadores. Las parachains tienen sus propios conjuntos de collators que son responsables de mantener un full-node de la parachain y de producir nuevos candidatos a bloque. Los candidatos de bloque producidos se pasan a los validadores de la relay chain que verifican los bloques y los incluyen en el estado compartido de Kusama. Como resultado, las parachains comparten el mismo alto nivel de seguridad que el propio Kusama.


## Escalabilidad {#scalability}

A pesar de estar conectados a la relay chain, las parachains siguen siendo blockchains Layer-1 independientes que producen sus propios bloques. Esta característica de diseño tiene grandes implicaciones en el rendimiento porque permite que las transacciones sean procesadas por diferentes cadenas en paralelo. La capacidad de procesamiento paralelo sustenta la infame escalabilidad y el alto rendimiento de la red Kusama


## Interoperabilidad {#interoperability}

Todas las parachains que están conectadas a la Kusama relay chain pueden comunicarse entre sí mediante una función llamada Transferencia de mensajes entre cadenas (XCMP). XCMP permite a las parachains individuales no solo intercambiar tokens, sino también información más rica, como contratos inteligentes, allanando así el camino para la expansión DeFi. La interoperabilidad de Kusama es un trampolín hacia el futuro de múltiples cadenas donde las transferencias entre cadenas se convierten en parte de nuestra vida diaria.
