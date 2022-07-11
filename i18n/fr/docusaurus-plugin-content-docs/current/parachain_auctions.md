---
id: parachain_auctions
title: Enchère de parachaînes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Les enchères de parachaînes fournissent une mécanique pour distribuer les places de [parachaînes](/parachains) disponible sur Kusama au candidat le plus approprié. Cet article va présenter les enchères de parachaînes en explorant deux questions:

## Pourquoi? {#why}

Kusama et Polkadot sont seulement capable de supporter un nombre limité de parachaînes qui sont connectées à leur chaîne relai en même temps. L’objectif à long terme pour Polkadot est de 100 parachaînes, tandis que Kusama inaugure la fête avec 5 parachaînes dans le premier round et 5 autres qui suivront peu de temps après.

Dans ce contexte, les enchères de parachaînes sont introduites comme un instrument efficace de marché pour faire face à la rareté en distribuant les places disponible aux candidats aux parachaînes les plus appropriés.


## Comment les enchères de parachaînes se déroulent-elles ? {#how}

Les places de parachaînes sont offertes une à une dans des enchères séparées d’une durée d’une semaine. Pendant ce laps de temps,  les projets candidats vont miser sur une place de parachaîne d’une durée de leur choix. Les places disponibles sont divisées en périodes de location de 6 semaines. La durée maximum d’une place de parachaîne est de 48 semaines ( 8 * 6 semaines). Ci-dessous, vous pouvez voir le planning des enchères pour les 5 premières places sur Kusama.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/parachain-auctions/ksm-schedule.jpg')}  />
</div>

Le gagnant de l’enchère est le candidat de la parachaîne qui a offert le **plus haut montant de KSM à être vérouillé** pendant la durée de la place de parachaîne à l’instant de clôture de l’enchère. Cependant, cela ne pourrait pas être très direct parce que Kusama utilise la mécanique dite de **l’enchère à la bougie** pour laquelle l’instant de clôture est **initialement inconnu**.

Comme illustré dans l’image ci-dessous, les enchères à la bougie se composent d’une période de départ ( 1 jour et 21 heures) et d’une période de fin ( 5 jours).  Les candidats sont en mesures d’apporter leurs enchères à n’importe quel moment, cependant, l’instant de clôture officiel de l’enchère est déterminé au tout dernier moment en choisissant aléatoirement un point dans le temps dans cette période de fin de 5 jours. Le candidat avec la plus haute enchère à ce moment particulier est le gagnant de la place de parachaîne.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/parachain-auctions/auction-mechanism.jpg')}  />
</div>
