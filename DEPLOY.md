# 🚀 Guide de Déploiement GitHub Pages

## 📋 Prérequis
- Un compte GitHub
- Git installé sur votre ordinateur
- Node.js installé (version 16+)

## 🎯 Étapes pour déployer sur GitHub Pages

### 1️⃣ Créer un dépôt GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur le bouton "+" en haut à droite puis "New repository"
3. Nommez votre dépôt : `valentine-surprise`
4. Laissez-le **public**
5. **Ne cochez PAS** "Initialize this repository with a README"
6. Cliquez sur "Create repository"

### 2️⃣ Préparer le projet localement

```bash
# 1. Téléchargez et extrayez le dossier valentine-surprise-deploy

# 2. Ouvrez un terminal dans ce dossier
cd valentine-surprise-deploy

# 3. Modifiez le package.json
# Remplacez "VOTRE-USERNAME" par votre nom d'utilisateur GitHub
# Ligne 5: "homepage": "https://VOTRE-USERNAME.github.io/valentine-surprise"
```

**Exemple :** Si votre nom d'utilisateur est `john123`, la ligne devient :
```json
"homepage": "https://john123.github.io/valentine-surprise"
```

### 3️⃣ Initialiser Git et installer les dépendances

```bash
# Initialiser Git
git init

# Installer les dépendances
npm install

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Valentine surprise"

# Ajouter le lien vers votre dépôt GitHub
# Remplacez VOTRE-USERNAME par votre nom d'utilisateur
git remote add origin https://github.com/VOTRE-USERNAME/valentine-surprise.git

# Renommer la branche principale
git branch -M main

# Envoyer le code sur GitHub
git push -u origin main
```

### 4️⃣ Déployer sur GitHub Pages

```bash
# Cette commande va créer et déployer le site
npm run deploy
```

⏳ Attendez 1-2 minutes...

### 5️⃣ Activer GitHub Pages (si ce n'est pas automatique)

1. Allez sur votre dépôt GitHub
2. Cliquez sur "Settings" (Paramètres)
3. Dans le menu de gauche, cliquez sur "Pages"
4. Sous "Source", sélectionnez la branche `gh-pages`
5. Cliquez sur "Save"

### 6️⃣ Accéder à votre site

Votre site sera disponible à :
```
https://VOTRE-USERNAME.github.io/valentine-surprise
```

🎉 **C'est prêt !** Partagez ce lien avec la personne spéciale !

## 🔄 Mettre à jour le site

Si vous modifiez le code :

```bash
# 1. Faites vos modifications dans src/App.js ou src/index.css

# 2. Commitez les changements
git add .
git commit -m "Update: description de vos changements"
git push

# 3. Redéployez
npm run deploy
```

Le site sera mis à jour en 1-2 minutes !

## ❌ Dépannage

### Le site affiche une page blanche
- Vérifiez que vous avez bien modifié le `homepage` dans `package.json`
- Assurez-vous que le nom du dépôt correspond exactement

### Erreur lors du déploiement
```bash
# Réinstallez gh-pages
npm install gh-pages --save-dev

# Redéployez
npm run deploy
```

### Les images ne s'affichent pas
- Vérifiez votre connexion internet
- Les images viennent d'Unsplash et nécessitent internet

### Git demande un mot de passe
- Utilisez un [Personal Access Token](https://github.com/settings/tokens)
- Ou configurez SSH

## 📱 Partager le lien

Une fois déployé, vous pouvez :
- Créer un QR code du lien avec [qr-code-generator.com](https://www.qr-code-generator.com/)
- Raccourcir le lien avec [bit.ly](https://bitly.com/)
- Envoyer directement le lien `https://VOTRE-USERNAME.github.io/valentine-surprise`

## 🎨 Personnalisation

Pour modifier le contenu :
- **Texte** : Éditez `src/App.js`
- **Couleurs/Style** : Éditez `src/index.css`
- **Images** : Changez les URLs dans `src/App.js` (ligne 8-13)

Après chaque modification, faites :
```bash
git add .
git commit -m "Personnalisation"
git push
npm run deploy
```

---

💝 **Bonne Saint-Valentin !** 

Si vous avez des questions, n'hésitez pas !
