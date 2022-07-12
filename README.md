- je dois changer les sources (images  entre autres)
---
# OC PROJET#5 [Construisez un site e-commerce en JavaScript](https://openclassrooms.com/fr/projects/construisez-un-site-e-commerce-en-javascript/assignment) DU PARCOURS ["DÉVELOPPEUR-WEB"](https://openclassrooms.com/fr/paths/185-developpeur-web#path-tabs): 

Une vidéo d'introduction du projet par le mentor:

[![INTRODUCTION MENTOR](https://raw.githubusercontent.com/achicyr/OC___frontend/master/assets/video_background.jpg)](https://www.youtube.com/watch?v=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX&list=PLWZ83QCrp6NsligPZowq4TBh03H4Ufy9w&ab_channel=Archist111 "Introduction du P5 par le mentor")

LES LIENS EN RAPPORT AVEC LA VIDÉO D'INTRODUCTION:
- lien 1

# MISSION: 

## LES RESSOURCES À INTÉGRER AU PROJET (3):
1. [Le repository git](https://github.com/OpenClassrooms-Student-Center/P5-Dev-Web-Kanap) à forker sur votre compte, puis cloner pour en faire faire la codebase de votre P5
2. [Le debrief](https://course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Specifications+fonctionnelles.pdf)
3. [Le plan de test d'acceptation](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Modele+plan+tests+acceptation.xlsx)

---

## CI-APRÈS, JE VAIS: 
1. [Lister les liens nécessaires pour réaliser le projet](https://github.com/achicyr/OC__frontend__P5#user-content-liens-necessaires),
2. [Reformuler la mission sous forme de liste à puce](https://github.com/achicyr/OC__frontend__P5#user-content-resume-mentor),
3. [Fournir les liens & ressources que j'ai assemblé & créé (en tant que mentor) pour ce projet](https://github.com/achicyr/OC__frontend__P5#user-content-liens-mentor),
4. [Enfin, fournir un step-by-step, ilustré en vidéo, et présenté sous forme de liste à puce](https://github.com/achicyr/OC__frontend__P5#user-content-step-by-step)

### I) LIENS NÉCESSAIRES: 
- [Le guide des étapes clés](https://course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Etapes+cles.pdf)
- [Plan de test d’acceptation](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Modele+plan+tests+acceptation.xlsx)
- [Spécifications techniques et fonctionnelles](https://course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Specifications+fonctionnelles.pdf)


### II) RÉSUMÉ MENTOR: 
- En poste en agence-web. Suite à tes derniers succès, une nouvelle mission t'es attribuée,
- Il s'agit de **créer une e-commerce** pour un magasin traditionnelle nommé Kanap et vendant des canapés,
- Tes collaborateurs(3) sur le projet:
    1. Corinne, le CTO de l’agence,
    2. Frank, le développeur front-end qui s’**est chargé d’intégrer la maquette statique** du site,
    3. Bilal, le développeur back-end qui **implémente l’API à laquelle est connecté le front-end**.
- **Utiliser le DOM** de JavaScript pour **intégrer dynamiquement** (c'est-à-dire après le chargement de la page, donc avec JavaScript uniquement) <u>**les données de l'API** sur les 4 pages(accueil,produit,panier,confirmation_achat)</u> du frontend, à l'aide:
    1. Des templates mis en commentaire sur chacune de ces pages,
    2. Et des #id et .class qui y sont spécifiquements placés par Frank.
- Tu devras [forker le repository du projet](https://github.com/OpenClassrooms-Student-Center/P5-Dev-Web-Kanap), et n'utiliser que du Vanilla JavaScript (librairies et frameworks JavaScript totalement interdit sur ce projet) 
- Un [step-by-step](https://course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Etapes+cles.pdf) est livré pour t'aider à réaliser le projet sans t'emmêler les ..doigts.
- Après la réalisation des fonctionnalités cités ci-après, tu devras écrire un [plan de teste d'acceptation](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Modele+plan+tests+acceptation.xlsx) pour toutes les valider:
    - le code source devra:
        - Être indenté,
        - Utiliser des commentaires en début de chaque fonction pour décrire son rôle,
        - Les fonctions devront:
            -  être **découpées en plusieurs fonctions réutilisables**
            -  **avoir un seul objectif** répondre à un besoin précis (ex: **collecter, traiter, ou encore envoyer des données**)
            -  adopter une **nommenclature explicite**, 
    - la fonction fetch devra être utilisée pour requêter l'API, puis il faudra utilisé les objets Promesse retournés par fetch pour intégrer ces données.
    - Concernant l'API:
        - Le endpoint de l'API est le suivant: [http://localhost:3000/api/products](http://localhost:3000/api/products)
        - les verbes=>paramètres de l'API sont comme suit:
            - GET => '/' page d'accueil
            - GET => '/{product-ID}' page produit
            - POST => '/order' page confirmation, avec dans le JSON du body de la requete, les 2 objets suivants:
                1. contact: contenant les valeurs du formulaire(firstName, lastName, address, city et email)
                2. products: un array de string(contenant la liste des id des produit, couleurs et quantités confondues)

### III) LIENS MENTOR: 
### IV)STEP-BY-STEP: 
[step-by-step, ilustré en vidéo](https://www.youtube.com/watch?v=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX&list=PLWZ83QCrp6NsligPZowq4TBh03H4Ufy9w&ab_channel=Archist111)


# COURSES: 

---
---
---

## MISSION: 
<div class="oc-richContent c511"><aside data-claire-semantic="warning">
<p>Ce projet a récemment été mis à jour pour l’améliorer ! Si vous avez commencé le projet avant le 29/09/2021, vous pouvez décider de continuer sur <a href="https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/Dev+Web+P5+scenario+29+Sept+2021.pdf">l’ancienne version</a>. Dans ce cas, vous pouvez préciser "version avant 29-09-21" sur vos livrables.&nbsp;</p>
</aside>
<aside data-claire-semantic="information">
<p>Le nommage des livrables à déposer sur la plateforme a été changé et des indications sur les temps de soutenance ont été ajoutées le 22/03/2022.</p>
</aside>
<aside data-claire-semantic="information">
<p><strong>Avant de démarrer votre travail sur ce projet, nous vous conseillons de:</strong></p>
<ol>
<li>lire le scénario en entier, chaque section du projet ainsi que les documents fournis ;</li>
<li>consulter&nbsp;<a href="https://course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Etapes+cles.pdf">le&nbsp;<span data-token-index="2" data-reactroot="">guide des étapes clés</span></a>&nbsp;avec des recommandations et des ressources pour organiser votre travail ;</li>
<li>préparer une liste de questions pour votre première session de mentorat.</li>
</ol>
</aside>
<h3>Scénario</h3>
<p>Vous êtes en poste dans une agence de développement web depuis quelques semaines maintenant. Après avoir réalisé avec succès l’intégration de quelques sites web (HTML/CSS), on vous confie une nouvelle mission.</p>
<p>Votre client est Kanap, une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.</p>
<figure><a href="https://user.oc-static.com/upload/2021/09/29/16329291678171_image2.png" class="oc-imageLink oc-imageLink--disabled"><img src="https://user.oc-static.com/upload/2021/09/29/16329291678171_image2.png" alt="Un canapé avec une lampe et marqué Kanap"></a>
<figcaption>Logo de Kanap</figcaption>
</figure>
<p>&nbsp;</p>
<p>Dans le cadre de cette mission, vous travaillez avec une équipe constituée de&nbsp;:</p>
<ul>
<li>Corinne, le CTO de l’agence&nbsp;;</li>
<li>Frank, le développeur front-end qui s’est chargé d’intégrer la maquette statique du site&nbsp;;</li>
<li>Bilal, le développeur back-end qui implémente l’API à laquelle est connecté le front-end.</li>
</ul>
<p>Corinne vous envoie un e-mail pour vous briefer sur la mission&nbsp;:</p>
<blockquote>
<p><strong>De</strong> : Corinne<br><strong>À</strong> : Vous<br><strong>Objet</strong> : Site e-commerce Kanap&nbsp;</p>
<p>Hello !</p>
<p>Comme on en a discuté hier, voici les informations pour que tu puisses démarrer l’implémentation du site de Kanap de manière dynamique.&nbsp;</p>
<p>Voici les différentes tâches que tu vas devoir mener à bien&nbsp;:</p>
<ul>
<li>Unifier les travaux déjà réalisés par l’équipe en intégrant dynamiquement les éléments de l’API dans les différentes pages web avec JavaScript. Le code du front-end et de l’API est disponible sur <a href="https://github.com/OpenClassrooms-Student-Center/P5-Dev-Web-Kanap">ce repo</a>.</li>
<li>Mettre en place un plan de test d’acceptation à partir de ce <a href="https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Modele+plan+tests+acceptation.xlsx">template</a> que nous avons pour habitude d’utiliser.</li>
</ul>
<p>Pour plus de précisions, voici les <a href="https://course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Specifications+fonctionnelles.pdf">spécifications techniques et fonctionnelles</a> du projet. Tu pourras y trouver tous les détails de celui-ci, les attentes pour chaque page du site web et les détails de l’API.&nbsp;</p>
<p>N'hésite pas à venir me voir si tu as la moindre question, ma porte est toujours ouverte.</p>
<p>Bonne journée,</p>
<p><strong>Corinne</strong></p>
</blockquote>
<p>Un peu plus tard, Frank vous envoie un e-mail pour vous apporter quelques précisions complémentaires sur son travail&nbsp;:</p>
<blockquote>
<p><strong>De</strong> : Frank<br><strong>À</strong> : Vous<br><strong>Objet</strong> Maquettes statiques du site de Kanap&nbsp;</p>
<p>Salut,</p>
<p>Visiblement c’est le moment pour toi de rejoindre le projet&nbsp;! Je viens donc te donner quelques informations sur la partie que j’ai pu réaliser, pour t’aider lors de ton développement.</p>
<p>4 pages ont été mises en place : page d’accueil, page Produit, page Panier et la page Confirmation. Sur l’ensemble des pages, toutes les parties statiques sont en place, elles sont donc prêtes à recevoir le contenu dynamique.</p>
<p>Aussi, sur chaque page, un exemple de la partie dynamique est systématiquement donné&nbsp;; de cette façon, tu n’as pas à t’occuper de la mise en place de la structure HTML ni du style CSS, tout est déjà fait. Tu n’as plus qu’à t’occuper d’intégrer ces éléments dynamiquement grâce à JS et l’API.</p>
<p>Enfin, dans le code HTML j’ai intégré des “id” dans différentes balises, cela devrait t’aider à intégrer les éléments dynamiques. Avec tout ça, normalement tu n’auras pas besoin de toucher au code HTML/CSS.</p>
<p>Bon développement !</p>
<p><strong>Frank</strong></p>
</blockquote>
<p>Ça y est, vous avez toutes les informations pour démarrer votre projet. Bon courage&nbsp;!</p>
<aside data-claire-semantic="warning">
<p>Pour ce projet, <strong>vous ne pouvez utiliser que du code JavaScript pur</strong>. L'utilisation de tout framework ou librairie JavaScript (React, Angular, Vue ou jQuery, par exemple) est interdite pour ce projet.</p>
</aside>
<aside data-claire-semantic="information">
<p>Pour vous aider à réaliser ce projet, <a href="https://course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Etapes+cles.pdf">voici un exemple de découpage</a> des étapes à suivre. Vous y trouverez des conseils pour chaque étape, ainsi que sur l’utilisation des ressources pour ce projet.</p>
</aside>
<h3>Livrables</h3>
<ul>
<li>Un fichier ZIP contenant le <strong>code fonctionnel du site web</strong>.</li>
<li>Un document PDF du&nbsp;<strong>plan de test</strong>.</li>
</ul>
<aside data-claire-semantic="information">
<p>Pour faciliter votre passage devant le jury, déposez sur la plateforme, dans un dossier zip nommé “<strong><em>Titre_du_projet_nom_prénom</em></strong>”, avec tous les livrables du projet comme suit :&nbsp;<strong>Nom</strong>_<strong>Prénom</strong>_<strong>n° du livrable</strong>_<strong>nom du livrable</strong>__<strong>date de démarrage du projet</strong>. Cela donnera :&nbsp;&nbsp;</p>
<ul>
<li><em>Nom_Prénom_1_code</em>_<em>mmaaaa ;</em></li>
<li><em>Nom_Prénom_2_plan_test_mmaaaa.</em></li>
</ul>
<p>Par exemple, le premier livrable peut être nommé comme suit&nbsp;<em>: Dupont_Jean_1_code</em>_<em>012022.</em></p>
</aside>
<h3>Soutenance</h3>
<p>Durant la présentation orale, l’évaluateur interprétera le rôle de Corinne. La soutenance est structurée de la manière suivante&nbsp;:</p>
<ul>
<li><strong>Présentation des livrables (15 minutes)&nbsp;</strong>
<ul>
<li>Pendant 10 à 12 minutes, vous allez devoir présenter le site web dans lequel vous avez intégré les éléments dynamiques, ainsi que le code JavaScript réalisé.</li>
<li>Puis, pendant 3 à 5 minutes, vous devrez présenter le plan de test mis en place.</li>
</ul>
</li>
</ul>
<ul>
<li><strong>Discussion (10 minutes)&nbsp;</strong>
<ul>
<li>L’évaluateur, qui pour rappel jouera le rôle de Corinne, vous challengera sur les différents points techniques du projet. Par exemple (mais pas uniquement)&nbsp;:
<ul>
<li>l’utilisation de l’API (GET, POST) ;</li>
<li>le DOM (ajout, suppression et modification d’éléments) ;</li>
<li>l’utilisation de URLSearchParams ;</li>
<li>l’utilisation de localStorage.</li>
</ul>
</li>
</ul>
</li>
</ul>
<ul>
<li><strong>Débriefing (5 minutes)</strong></li>
<ul>
<li>À la fin de la soutenance, l'évaluateur arrêtera de jouer le rôle de Corinne pour vous permettre de débriefer ensemble.</li>
</ul>
</ul>
<aside data-claire-semantic="warning">
<p>Votre présentation devrait durer 15&nbsp;minutes (+/- 5&nbsp;minutes).&nbsp; Puisque le respect de la durée des présentations est important en milieu professionnel, les présentations en dessous de 10&nbsp;minutes ou au-dessus de 20&nbsp;minutes peuvent être refusées.&nbsp;</p>
</aside>
<p>&nbsp;</p></div>