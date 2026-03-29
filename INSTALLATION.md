# Instructions d'installation

Ce document fournit des instructions pour installer les dépendances, configurer le frontend React, exécuter le backend Flask et initialiser la base de données.

## Installation des dépendances

1. **Clonez le référentiel :**  
   `git clone https://github.com/brahimadosso733-wq/Gs.git`

2. **Naviguez vers le répertoire du projet :**  
   `cd Gs`

3. **Installez les dépendances pour le frontend React :**  
   ```bash
   cd frontend
   npm install
   ```

4. **Installez les dépendances pour le backend Flask :**  
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

## Configuration du frontend React

1. **Accédez au répertoire du frontend :**  
   `cd frontend`

2. **Démarrez l'application React :**  
   ```bash
   npm start
   ```

## Exécution du backend Flask

1. **Accédez au répertoire du backend :**  
   `cd ../backend`

2. **Exécutez l'application Flask :**  
   ```bash
   flask run
   ```
   Assurez-vous que votre environnement virtuel est activé si vous en utilisez un.

## Initialisation de la base de données

1. **Accédez au répertoire du backend :**  
   `cd backend`

2. **Initialisez la base de données :**  
   ```bash
   flask db init
   flask db migrate
   flask db upgrade
   ```

3. **Ajoutez des données exemple si nécessaire :**  
   ```bash
   flask seed
   ```

Suivez ces instructions pour configurer et exécuter le projet avec succès!