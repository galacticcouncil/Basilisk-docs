---
id: create_account
title: Créer un nouveau compte BSX
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Le processus de création d'un nouveau compte BSX consiste trois étapes simples.

## 01 Installer l'extension Polkadot.js {#01-install-polkadot-js}
L'extension de navigateur Polkadot.js est utilisée pour créer et gérer votre portefeuille BSX. Pour l'installer, suivez [ce lien](https://polkadot.js.org/extension/).

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/create-account/metadata.jpg')} />
</div>

## 02 Mettre à jour les métadonnées {#02-upgrade-metadata}

Après avoir installé l'extension de navigateur Polkadot.js, vous devez vous assurer qu'elle a été mise à jour avec les dernières métadonnées de la chaîne. Pour ce faire, visitez le lien suivant et cliquez sur l'onglet `Metadata`. Si une mise à jour est nécessaire, vous verrez le bouton `Mise à jour des métadonnées`. Cliquez dessus et suivez les instructions.

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.basilisk.hydradx.io#/settings/metadata

## 03 Créer votre compte BSX {#03-create-bsx-account}

Pour créer une nouvelle adresse BSX, ouvrez l'extension de navigateur Polkadot.js et cliquez sur `+` > `Créer un nouveau compte`. 

Vous verrez apparaître une phrase mnémonique de 12 mots qui pourra être utilisée pour récupérer votre compte. Sauvegardez la phrase mnémonique dans un endroit sûr. Cliquez sur `Etape suivante` et remplissez les informations suivantes :

* **Network**: Veuillez sélectionner `Basilisk`
* **Descriptive name of the account**
* **Password**

Votre compte sera créé après avoir cliqué sur `Add the account with the generated seed`.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/create-account/create_account.jpg')} width="350px" />
</div>

:::warning 

Veillez à sauvegarder votre phrase de démarrage de récupération en la stockant dans un endroit sûr. Ne la partagez jamais avec quiconque. La phrase de démarrage peut être utilisée pour accéder à votre compte. Si vous la perdez ou la divulguez, vous risquez également de perdre tous les fonds stockés dans le portefeuille.

:::
