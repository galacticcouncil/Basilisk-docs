---
id: crowdloan_guide
title: Participar en el Crowdloan
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Este artículo lo guía a través del proceso para participar en el [Basilisk crowdloan](/basilisk_crowdloan) utilizando la página crowdloan UI : https://loan.bsx.fi

## Requisitos  {#requirements}

Para participar utilizando la página para el crowdloan, y debe tener una [Polkadot.js wallet](https://polkadot.js.org/extension/) que contenga los tokens KSM que desea bloquear.

:::caution

No es posible participar en el crowdloan utilizando una billetera de hardware. Actualmente, las billeteras de hardware no son compatibles con el módulo crwodloan de Kusama.

:::

## 00 Crowdloan UI {#00-crowdloan-ui}

Para acceder al Basilisk Crowdloan UI, navegue a https://loan.bsx.fi.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/crowdloan-guide/chart.png')}  />
</div>

El gráfico en el medio proporciona información sobre la subasta en curso para el slot parachain. La línea verde muestra la cantidad de tokens KSM que ha recaudado Basilisk, mientras que la línea amarilla corresponde al KSM recaudado por el principal competidor de Basilisk. La línea roja horizontal marca el comienzo del período de cierre de la subasta  del slot objetivo. Toda esta información es relevante para determinar la cantidad de [recompensas en BSX y el HDX bonus](/basilisk_crowdloan) que recibirá por su contribución.

## 01 Seleccione su dirección{#01-select-address}

Para comenzar, haga clic en cambiar su cuenta y seleccione la dirección que contiene sus tokens KSM.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/crowdloan-guide/select-account.png')}  />
</div>

## 02 Ingrese su contribución de KSM {#02-enter-ksm-contribution}

Como siguiente paso, puede ingresar la cantidad de KSM que le gustaría contribuir. Después de hacerlo, verá una predicción de las recompensas que recibirá:

* **BSX mínimo recibido** : la cantidad mínima de tokens BSX que puede esperar recibir por su contribución. La cantidad exacta solo se puede determinar después de que el Crowdloan se haya cerrado, en caso de que la subasta sea exitosa.

* **BSX actual recibido** : una estimación **salvaje** de cuánto recibiría en las condiciones actuales de la subasta. Esta estimación puede no ser confiable.

* **HDX actual recibido** : la cantidad de bonificación HDX que se recibirá por la contribución.


Si desea saber más sobre la mecánica detrás del cálculo de recompensas, consulte el post [Basilisk crowdloan](/basilisk_crowdloan).

## 03 Envíe su contribución {#03-submit}

Para finalizar el proceso, haga clic en Contribuir y firme la transacción usando la cuenta que tiene sus tokens KSM.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/crowdloan-guide/sign-submit.png')}  />
</div>
