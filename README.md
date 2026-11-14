# GlycoTens

Application web installable (PWA) de suivi de la glycémie, de la tension et du pouls pour le diabète de type 2 :
encodage rapide, graphiques avec zones cibles, planning de mesures, rapport PDF à envoyer au médecin,
backup Excel. Les données restent sur le téléphone. Aucune dépendance externe : tout est dans ce dépôt.

## Cibles par défaut (modifiables dans les réglages)

- Glycémie : 70 à 120 mg/dL
- Tension : pression haute (systolique) 120 à 130 mmHg, pression basse (diastolique) 70 à 80 mmHg
- Pouls : 60 à 80 bpm

## Mise en ligne avec GitHub Pages

1. Créez un dépôt **public** (par exemple `glycotens`) et envoyez **tout le contenu de ce dossier**, sous-dossiers compris
   (`index.html`, `sw.js`, `manifest.webmanifest`, `.nojekyll`, `icons/`, `fonts/`, `vendor/`).
   `index.html` doit se trouver à la racine du dépôt.
2. **Settings**, puis **Pages** : source « Deploy from a branch », branche `main`, dossier `/ (root)`, puis **Save**.
3. Après 1 à 2 minutes, l'adresse s'affiche : `https://VOTRE-NOM.github.io/glycotens/`

## Installation sur Android

Ouvrez l'adresse dans **Chrome**. Un bouton **Installer** apparaît en haut de l'accueil (et dans Réglages, section
« Application »). Sinon : menu ⋮, puis **Installer l'application**. L'application fonctionne ensuite hors ligne.

## Poids et IMC

- Suivi optionnel (réglages, « Mon suivi ») : poids en kg, IMC calculé avec la taille, cible d'IMC modifiable (18,5 à 25 par défaut, repère de l'OMS),
  graphique avec la zone cible convertie en kilos, rapport PDF et backup Excel (feuille « Poids »).
- Réglages, « Mon profil » : âge, taille, poids. L'âge et le poids figurent dans le rapport pour le médecin.

## Suivi à la carte et badges

- Au premier lancement, l'utilisateur choisit ce qu'il suit : glycémie, tension, pouls (réglable ensuite dans « Mon suivi »).
  L'accueil, la saisie, les graphiques, les réglages et le rapport PDF s'adaptent. Les mesures masquées sont conservées.
- Les badges (niveaux Bronze, Argent, Or, Platine par suivi, séries de jours, objectifs atteints, bonnes pratiques)
  aident à se situer par rapport aux objectifs. Ils sont inclus dans le backup.

## Installation sur iPhone

Apple ne permet pas de bouton « Installer » dans une page web. Ouvrez l'adresse dans **Safari**, touchez **Partager**
(le carré avec une flèche), puis **Sur l'écran d'accueil** et **Ajouter**. Une aide s'affiche aussi sur l'accueil.
Installer l'application évite que Safari efface les données d'un site non installé après une semaine sans visite.

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
Le rappel le plus fiable passe par l'agenda du téléphone (bouton « Ajouter à mon agenda » : Google Agenda sur Android, Calendrier sur iPhone).
Les notifications de l'application ne fonctionnent que si elle est ouverte ou active en arrière-plan.

## Avertissement

GlycoTens est un outil de suivi. Il ne pose pas de diagnostic et ne remplace pas l'avis d'un professionnel de santé.
En cas de malaise important, appelez le 112.
