# GlycoTens

Application web installable (PWA) de suivi de la glycémie, de la tension et du pouls pour le diabète de type 2 :
encodage rapide, graphiques avec zones cibles, planning de mesures, rapport PDF à envoyer au médecin,
backup Excel. Les données restent sur le téléphone. Aucune dépendance externe : tout est dans ce dépôt.

## Cibles par défaut (modifiables dans les réglages)

- Glycémie : 70 à 120 mg/dL
- Tension : pression haute (systolique) 120 à 130 mmHg, pression basse (diastolique) 70 à 80 mmHg
- Pouls : 60 à 80 bpm

## Installation sur Android

Ouvrez l'adresse dans **Chrome**. Un bouton **Installer** apparaît en haut de l'accueil (et dans Réglages, section
« Application »). Sinon : menu ⋮, puis **Installer l'application**. L'application fonctionne ensuite hors ligne.

## Mises à jour

- **Réglages, puis Rechercher une mise à jour** : compare la version installée à celle du site et installe la nouvelle
  version si elle existe, puis propose de recharger.
- Pour publier une nouvelle version : remplacez les fichiers dans le dépôt, changez `APP_VERSION` dans `index.html`
  et la constante `VERSION` dans `sw.js`.

## Backup

Réglages, puis **Backup (Excel)** : crée le fichier `backup.xlsx` (glycémies, tension et pouls, réglages).
**Restaurer un backup** relit ce fichier (ou un ancien fichier JSON).

## Planning et rappels

Réglages, puis **Planning et rappels** : 4 mesures de glycémie (6 h, 12 h, 18 h 30, 22 h par défaut).
Le rappel le plus fiable passe par l'agenda Android (bouton « Ajouter à mon agenda »).
Les notifications de l'application ne fonctionnent que si elle est ouverte ou active en arrière-plan.

## Avertissement

GlycoTens est un outil de suivi. Il ne pose pas de diagnostic et ne remplace pas l'avis d'un professionnel de santé.
En cas de malaise important, appelez le 112.
