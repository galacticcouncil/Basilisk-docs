---
id: basilisk_crowdloan
title: Basilisk Crowdloan
---

El [Basilisk crowdloan](https://basiliskfi.substack.com/p/the-snek-is-back) para la subastas de los slot en Kusama, ya esta disponible!  Puede apoyar a Basilisk participando en nuestro crowdloan comprometiendo una cierta cantidad de tokens KSM que estarán bloqueados durante la duración del slot parachain.A cambio, se le otorgarán **generosas recompensas BSX más un bono en HDX** para cubrir sus costos de oportunidad. Una vez que el slot haya expirado, recibirá sus tokens KSM en su totalidad. Lo mismo se aplica al improbable escenario de que Basilisk no logre ganar un slot parachain  dentro del plazo del crowdloan establecido a continuación.

Puede participar directamente visitando nuestra [pagina para crowdloan](https://loan.bsx.fi). También puede consultar nuestra [guia crowdloan](/crowdloan_guide) que lo guiará a través del proceso.  Alternativamente, puede participar utilizando [Fearless Wallet](https://fearlesswallet.io/#) o [via Kraken](https://www.kraken.com/learn/parachain-auctions).

En esta publicación, encontrará los detalles generales del Basilisk crowdloan , así como información más detallada sobre cómo funciona el mecanismo de recompensas. Si es un recién llegado que está interesado en aprender más sobre el proyecto, puede consultar algunos de los materiales `Aprende` que le ayudarán a comprender las[parachains](/parachains), [parachain auctions](/parachain_auctions) y [crowdloans](/crowdloans).

## Detalles de Crowdloan {#crowdloan-details}
* Visita: https://loan.bsx.fi/
* Comienza el: **31 August 2021**
* Duración de la Parachain: **48 semanas**
* Target parachain slot: **#6 - #10**
* Crowdloan cap: **222,222 KSM**
* Recompensas Totales de BSX : **15,000,000,000 BSX** (15% of total supply)
* Recompensas maxima de HDX : **56,873,469 HDX**
* Deadline o cierre del Crowdloan : 09 Octubre 2021
* Tiempo o Período  de Vesting :  las recompensas en BSX y el bonus en HDX se distribuyen linealmente. La distribución comenzará una vez que el evento Basilisk LBP haya concluido (~ 2 semanas después de que gane el slot parachain) y continuará hasta 1 semana antes de que expire dicho slot.

## Mecanismo de recompensas {#rewards-mechanism}

Todos los partidarios de la comunidad son recompensados por participar en el Crowdloan después de que Basilisk haya asegurado un slot parachain. Las recompensas disponibles consisten en tokens BSX y HDX que se distribuyen a una tasa diferente según el estado del Crowdloan o en el momento de la contribución.
El mecanismo de recompensas se ha diseñado teniendo en cuenta el mejor interés de las partes interesadas de Basilisk. El objetivo es no pagar de más por el slot parachain, minimizando así los costos de oportunidad para los patrocinadores y maximizando el potencial alcista futuro. A continuación, encontrará los mecanismos de recompensas BSX y HDX explicados.


### BSX Rewards {#bsx-rewards}
La cantidad de recompensas BSX que recibirá cada participante solo se puede determinar al final del Crowdloan después de que Basilisk haya asegurado un slot parachain. El cálculo de las recompensas consta de dos pasos.

En primer lugar, todas las contribuciones de KSM se pesan utilizando un multiplicador de recompensas. El multiplicador tiene un **valor flotante entre 1 y 0** dependiendo del momento en el que se realizó la contribución. Se aplica un multiplicador de recompensas de **1.0** a todos los KSM que se comprometieron **antes de que la subasta ganadora omenzara a cerrarse (Subasta N°.6 3 de septiembre alrededor de las 09:00 GMT)**. Después de eso, el multiplicador comienza a disminuir linealmente hasta llegar a **0 a la hora de cierre de la subasta** (subasta N°. 8 de septiembre alrededor de las 09:00 GMT). Si el KSM total comprometido no es suficiente para ganar un puesto en la subasta N°.6  entonces la siguiente subasta, la N.° 7, se convertira en el **nuevo target**. En consecuencia, el multiplicador para todos los KSM contribuidos durante la subasta anterior( N°6), se restablecerá a 1( Los contribuyentes recibirán las recompensas del Bonus en HDX completas)
 
Una vez que se han establecido las contribuciones ponderadas de KSM mediante el procedimiento descrito anteriormente, se calcula la cantidad exacta de recompensas individuales. El monto de las recompensas se determina de acuerdo con la proporción de la contribución individual ponderada en relación con todas las contribuciones ponderadas de KSM, como se muestra en la siguiente fórmula:

```
rewards = (weighted_indivudial_contribution / total_weighted_contributions) * crowdloan_cap
```

Si bien no podemos determinar la cantidad exacta de recompensas hasta que realmente se haya ganado el slot parachain, es posible calcular la cantidad mínima de recompensas BSX para cualquier contribución determinada. Esto se puede hacer bajo el supuesto de que el préstamo colectivo lograría alcanzar su límite máximo de 200,000 KSM y que todas las contribuciones tendrían el multiplicador de recompensas más alto de 1.0. Este, por supuesto, es un escenario muy poco probable, pero nos permite indicar en la interfaz de usuario de Crowdloan la cantidad mínima de tokens BSX que los contribuyentes pueden esperar a cambio de su KSM.

### HDX Bonus {#hdx-bonus}

Para incentivar aún más el soporte oportuno, todos los patrocinadores de préstamos colectivos recibirán un bono HDX adicional que **cubrirá entre el 5 y el 30% de los costos de oportunidad** de su contribución en KSM. Para un período de bloqueo de ~ 11 meses, estos costos de oportunidad se estiman actualmente en **13.75%** (basado en un APY del 15% para la participación de KSM).

También aquí, el porcentaje exacto de los costos de oportunidad que se cubrirán está determinado por el estado del Crowdloan en el momento en que se realiza la contribución de KSM. El multiplicador de bonificación HDX estará en su **máximo de 0.3**, mientras que Basilisk se está quedando atrás de su principal competidor por el slot. A medida que Basilisk toma la delantera sobre el competidor principal con almenos una **ventaja del 15%**, el multiplicador de bonificación comenzará a disminuir linealmente hacia un **mínimo de 0.05**. Este mínimo se alcanza una vez que Basilisk lidera la carrera en un 20% o más


Teniendo en cuenta lo anterior, el monto de la bonificación (en KSM) para una contribución individual se calcula utilizando la siguiente fórmula:

```
bonus_in_KSM = contributed_KSM * opportunity_costs * bonus_multiplier
```

Al final, el bono se convierte a HDX utilizando el último precio histórico conocido de $ 0.08059 por 1 HDX
