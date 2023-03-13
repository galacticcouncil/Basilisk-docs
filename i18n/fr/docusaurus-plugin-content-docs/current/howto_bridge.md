---
id: howto_bridge
title: Bridge Tokens
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Si vous voulez **échanger des BSX**, ou **fournir de la liquidité** fpour certains des pools Basilisk XYK, vous pouvez vouloir faire le bridge entre les jetons dans la chaîne Basilisk, ou hors de celle-ci. Vous pouvez le faire en utilisant XCM - le protocole de messagerie croisée de Kusama.

Actuellement, les jetons suivants sont supportés par Basilisk pour les transferts XCM :
* BSX
* aUSD
* KSM

Pour effectuer des transferts XCM pour l'un des actifs énumérés ci-dessus, vous pouvez utiliser le [Bridge Karura](#karura).

## Utiliser le Bridge Karura {#karura}
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/howto_bridge/ausd.jpg')} />
</div>

### Étape 1: Naviguer sur la page du Bridge Karura
[https://apps.karura.network/bridge](https://apps.karura.network/bridge?fromChainName=kusama&toChainName=basilisk)

### Étape 2: Se connecter à son compte

Click on `Connect Account` **(1 in image above)** and connect to your Dotsama wallet. 

If you still do not have a BSX account, please [follow this guide](https://docs.bsx.fi/create_account) to create one.

### Étape 3: Bridge Tokens

* Sélectionnez la `Origin Chain` **(2)** ont vous souhaitez transférer les jetons, ainsi que la `Destination Chain` **(2)** qui recevra les jetons.
* Sélectionnez le que vous souhaitez transférer **(3)**, et entrez le montant.
* Cliquez sur `Transfer` **(4)** et signez la transaction en utilisant votre application Kusama wallet.

```
Examples:

Alice veut faire un bridge entre les KSM de Kusama et ceux de Basilisk. Pour ce faire, Alice va sélectionner :
* Origin Chain: Kusama
* Destination Chain: Basilisk
* Token: KSM

Bob veut relier des BSX de Basilisk à Karura. Pour ce faire, Bob va sélectionner :
* Origin Chain: Basilisk
* Destination Chain: Karura
* Token: BSX
```

Félicitations ! Vous venez d'utiliser le bridge Karura pour transférer des jetons vers le Basilic.
