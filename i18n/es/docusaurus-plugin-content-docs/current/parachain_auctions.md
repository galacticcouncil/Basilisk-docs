---
id: parachain_auctions
title: Parachain Auctions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

 Las parachain auctions  proporcionan un mecanismo para distribuir los slot para [parachain](/parachains) disponibles en Kusama a los candidatos más apropiados. Este artículo presenta a las parachain auctions explorando dos preguntas: ¿Por qué tenemos parachain auctions, y cómo funcionan?

## ¿Por qué? {#why}

Kusama y Polkadot solo pueden admitir un número limitado de parachains que están conectadas a su relay chain al mismo tiempo. El objetivo a largo plazo de Polkadot son 100 parachains, mientras que Kusama inicia la fiesta con 5 parachains en la primera ronda y otros 5 para seguir poco después.

En este contexto, las parachain auctions se introdujeron como un instrumento eficiente en el mercado para hacer frente a la escasez mediante la distribución de los slots disponibles a los candidatos de parachain más apropiados.


## ¿Cómo funcionan las Parachain Auctions? {#how}

Los slots para parachain se ofrecen una a una en subastas separadas que tienen una duración de 1 semana. Durante este período de tiempo, los proyectos candidatos pueden ofertar por un slot parachain, con la duración deseada. Los slots disponibles se dividen en períodos de arrendamiento de 6 semanas. La duración máxima de un slot parachain es 48 semanas (8 * 6 semanas). A continuación, puede ver el calendario de subastas de los primeros 5 slots para parachain en Kusama.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/parachain-auctions/ksm-schedule.jpg')}  />
</div>

El ganador de la subasta es la parachain candidata que ha ofrecido el **mayor monto de KSM para ser bloqueado** durante la duración del slot parachain, al momento del cierre de la subasta.Sin embargo, esto podría no ser muy sencillo porque Kusama utiliza el llamado **candle auction mechanism** en el que **inicialmente se desconoce el momento de cierre de la subasta**.

Como se ilustra en la imagen a continuación, las candle auctions consisten en un período de inicio (1 día 21 horas) y un período de finalización (5 días). Los candidatos pueden presentar sus ofertas en cualquier momento, sin embargo, el momento oficial de cierre de la subasta se determina al final eligiendo un **momento aleatorio** en algún lugar dentro del período final de 5 días. El candidato con la oferta más alta en ese momento específico es el ganador del slot parachain.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/parachain-auctions/auction-mechanism.jpg')}  />
</div>

La razón fundamental detrás de este mecanismo de subasta es evitar los sniping auction mientras se promueve un descubrimiento de precios más preciso. Para los patrocinadores del crowdloan, hay una implicación importante: Apoyar el [Basilisk crowdloan](/basilisk_crowdloan) bloqueando su KSM antes que tarde. De esta manera, se asegura de que su contribución se cuente para la oferta ganadora de Basilisk.
