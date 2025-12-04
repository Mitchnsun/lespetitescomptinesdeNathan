# Les Petites Comptines de Nathan

Une application mobile pour découvrir les comptines de la chaîne YouTube "Les Petites Comptines de Nathan".

## 🎵 Fonctionnalités

- **Accueil**: Lecteur vidéo intégré avec expo-video
- **Explorer**: Liste de toutes les vidéos de la chaîne YouTube
- **Profil**: Informations sur la chaîne et paramètres de l'application

## 🛠️ Technologies

- **Expo** - Framework React Native
- **React Native** - Framework mobile cross-platform
- **TypeScript** - Typage statique
- **NativeWind** - Tailwind CSS pour React Native
- **Expo Router** - Navigation basée sur les fichiers
- **expo-video** - Lecteur vidéo natif

## 🚀 Installation

```bash
# Cloner le repo
git clone https://github.com/Mitchnsun/lespetitescomptinesdeNathan.git
cd lespetitescomptinesdeNathan

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

## 📱 Commandes

```bash
# Démarrer le serveur de développement
npm start

# Lancer sur Android
npm run android

# Lancer sur iOS
npm run ios

# Lancer sur le web
npm run web

# Linter le code
npm run lint

# Formater le code
npm run format
```

## 📂 Structure du projet

```
├── app/
│   ├── _layout.tsx          # Layout racine
│   └── (tabs)/
│       ├── _layout.tsx      # Configuration des tabs
│       ├── index.tsx        # Écran Accueil
│       ├── explorer.tsx     # Écran Explorer
│       └── profil.tsx       # Écran Profil
├── assets/                  # Images et icônes
├── app.json                 # Configuration Expo
├── babel.config.js          # Configuration Babel
├── tailwind.config.js       # Configuration Tailwind CSS
├── tsconfig.json            # Configuration TypeScript
├── eslint.config.mjs        # Configuration ESLint
└── .prettierrc              # Configuration Prettier
```

## 🔗 Liens

- [Chaîne YouTube](https://www.youtube.com/@LespetitescomptinesdeNathan)
- [Vidéo à la une](https://www.youtube.com/watch?v=e0TfFa72W-8)

## 📄 Licence

Ce projet est sous licence MIT.
