export default {
    title: 'Mémo commandes Git',
    thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9c48659-10d7-49d6-88b2-ad98f62694bf/de5mvof-51e456b1-e5a0-47d7-a132-a242ef7212ba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTljNDg2NTktMTBkNy00OWQ2LTg4YjItYWQ5OGY2MjY5NGJmXC9kZTVtdm9mLTUxZTQ1NmIxLWU1YTAtNDdkNy1hMTMyLWEyNDJlZjcyMTJiYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.-WfZcBCBIp8U2-bN9Te7IMAiOn8Kx8b480ax3X35rrY',
    author: 'Jennaris',
    commandes: [
      {
        id: 1,
        name: 'git status',
        description: 'Affiche le statut de l’arbre de travail',
        
      },
      {
        id: 2,
        name: 'git init Nom_Du_Projet',
        description: 'Initialise git dans le dossier',
      },
      {
        id: 3,
        name: 'git add .',
        description: 'Ajoute tous les fichiers à l’index',
      },
      {
        id: 4,
        name: 'git add nom_du_fichier',
        description: 'Ajoute le fichier demandé à l’index',
      },
      {
        id: 5,
        name: 'git commit -m"Nom_du_commit"',
        description: 'Enregistre les modifications dans le dépôt',
      },
      {
        id: 6,
        name: 'git remote add origin https://… ',
        description: 'Pour ajouter un nouveau dépôt distant Git',
      },
      {
        id: 7,
        name: 'git push -u origin master',
        description: 'Envoie tous les commits de la branche locale vers GitHub en créant la branche sur Github',
      },
      {
        id: 8,
        name: 'git clone https://…',
        description: 'Clone le répertoire distant en local',
      },
      {
        id: 9,
        name: 'git clone ssh…',
        description: 'Clone le répertoire distant en local sans avoir besoin de retaper mdp',
      },
      {
        id: 10,
        name: 'git branch',
        description: 'Liste toutes les branches locales dans le dépôt courant',
      },
      {
        id: 11,
        name: 'git checkout Nom_de_branche',
        description: 'Bascule sur la branche spécifiée et met à jour le répertoire de travail',
      },
      {
        id: 12,
        name: 'git checkout -b Nom_de_branche',
        description: 'Bascule sur la branche spécifiée en la créant',
      },
      {
        id: 13,
        name: 'git config --global user.name "nom" ',
        description: 'Définit le nom que vous voulez associer à toutes vos opérations de commit',
      },
      {
        id: 14,
        name: 'git config --global user.email "adresse email"',
        description: 'Définit l\'email que vous voulez associer à toutes vos opérations de commit',
      },
      {
        id: 15,
        name: 'git diff',
        description: 'Montre les modifications de fichier qui ne sont pas encore indexées',
      },
      {
        id: 16,
        name: 'git diff --staged',
        description: 'Montre les différences de fichier entre la version indexée et la dernière version',
      },
      {
        id: 17,
        name: 'it diff [premiere-branche]...[deuxieme-branche]',
        description: 'Montre les différences de contenu entre deux branches',
      },
      {
        id: 18,
        name: 'git reset nom_du_fichier',
        description: 'Enleve le fichier de l\'index, mais conserve son contenu',
      },
      {
        id: 19,
        name: 'git merge nom_de_branche',
        description: 'Combine dans la branche courante l\'historique de la branche spécifiée',
      },
      {
        id: 20,
        name: 'git branch -d nom_de_branche',
        description: 'Supprime la branche spécifiée',
      },
      {
        id: 21,
        name: 'git rm [fichier]',
        description: 'Supprime le fichier du répertoire de travail et met à jour l\'index',
      },
      {
        id: 22,
        name: 'git rm --cached [fichier]',
        description: 'Supprime le fichier du système de suivi de version mais le préserve localement',
      },
      {
        id: 23,
        name: 'git mv [fichier-nom] [fichier-nouveau-nom]',
        description: 'Renomme le fichier et prépare le changement pour un commit',
      },
      {
        id: 24,
        name: 'git log',
        description: 'Montre l\'historique des versions pour la branche courante',
      },
      {
        id: 25,
        name: 'git log --follow [fichier]',
        description: 'Montre l\'historique des versions, y compris les actions de renommage, pour le fichier spécifié',
      },
      {
        id: 26,
        name: 'git show [commit]',
        description: 'Montre les modifications de métadonnées et de contenu inclues dans le commit spécifié',
      },
      {
        id: 27,
        name: 'git reset [commit]',
        description: 'Annule tous les commits après [commit], en conservant les modifications localement',
      },
      {
        id: 28,
        name: 'git reset --hard [commit]',
        description: 'Supprime tout l\'historique et les modifications effectuées après le commit spécifié',
      },
      {
        id: 29,
        name: 'git fetch [nom-de-depot]',
        description: 'Récupère tout l\'historique du dépôt nommé',
      },
      {
        id: 30,
        name: 'git merge [nom-de-depot]/[branche]',
        description: ' Fusionne la branche du dépôt dans la branche locale courante',
      },
      {
        id: 31,
        name: 'git pull',
        description: 'Récupère tout l\'historique du dépôt nommé et incorpore les modifications',
      },
      {
        id: 32,
        name: 'git remote -v',
        description: 'Visualiser les serveurs distants que vous avez enregistrés. Spécifier -v, vous montre l’URL que Git a stockée pour chaque nom court.',
      },
      {
        id: 33,
        name: 'git remote rename ancien_nom_court nouveau_nom_court',
        description: 'Renommer une référence',
      },
      {
        id: 34,
        name: 'git remote rm nom_court',
        description: 'Retirer un dépôt distant',
      },
      {
        id: 35,
        name: 'git tag -a v1.4 -m \'ma version 1.4',
        description: 'Créer des étiquettes annotées',
      },
      {
        id: 36,
        name: 'git show v1.4 ',
        description: 'Visualiser les données de l’étiquette à côté du commit qui a été marqué. Cette commande affiche le nom du créateur, la date de création de l’étiquette et le message d’annotation avant de montrer effectivement l’information de validation.',
      },
      {
        id: 37,
        name: 'git tag v1.4-lg',
        description: 'Créer des étiquettes légères. Celles-ci se réduisent à stocker la somme de contrôle d’un commit dans un fichier, aucune autre information n’est conservée.',
      },
      {
        id: 38,
        name: 'git remote -v',
        description: 'Visualiser les serveurs distants que vous avez enregistrés. Spécifier -v, vous montre l’URL que Git a stockée pour chaque nom court.',
      },
      {
        id: 39,
        name: 'git remote rename ancien_nom_court nouveau_nom_court',
        description: 'Renommer une référence',
      },
      {
        id: 40,
        name: 'git remote rm nom_court',
        description: 'Retirer un dépôt distant',
      },
      {
        id: 41,
        name: 'git tag -a v1.4 -m \'ma version 1.4',
        description: 'Créer des étiquettes annotées',
      },
      {
        id: 42,
        name: 'git show v1.4 ',
        description: 'Visualiser les données de l’étiquette à côté du commit qui a été marqué. Cette commande affiche le nom du créateur, la date de création de l’étiquette et le message d’annotation avant de montrer effectivement l’information de validation.',
      },
      {
        id: 43,
        name: 'git tag v1.4-lg',
        description: 'Créer des étiquettes légères. Celles-ci se réduisent à stocker la somme de contrôle d’un commit dans un fichier, aucune autre information n’est conservée.',
      },
    ],
  
    intro: [
      'Je vous présente un petit mémo regroupant des commandes Git fortement utilisées pour de la gestion et le versioning de projets collaboratifs par une équipe de développement.',
    ],
    outro: [
      'Les commandes ci-dessus ne répresentent qu\'une infime partie du champ des commandes git possibles, surtout lorsqu\'on tient compte de la combinaison des milliers d\'options qui peuvent être associées à chacune d\'elles.',
      'J\'éspère que ce mémo vous sera utile :-)',
    ],
  };