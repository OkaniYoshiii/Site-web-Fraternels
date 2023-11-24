<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="OkaniYoshiii">
    <meta name="description" content="[xxxxxxxxxxxxxxxxxx] du serveur 7 Days to Die &quot;Les Fraternels&quot;">
    <script>document.documentElement.classList.add('js-active');</script>
    <title>Mods - ElecFRT</title>
    <link rel="icon" type="image/vnd.microsoft.icon" href="../images/Compressed/FRT-Logo-30x30.ico" />
    <link rel="stylesheet" href="../css/default.css">
    <link rel="stylesheet" href="../css/default-mod.css">
    <script src="../js/default.js" defer></script>
</head>
<body>
    
<?php include_once "../components/header.php"; ?>
    <main>
        <section class="hero-banner text-centered" style="--mod-banner: url(../../images/electfrt\ 2.webp);">
            <div class="hero-filter">
                <div class="medium hero-title">
                    <h1>ElecFRT</h1>
                    <p class="mod-category">Equilibrage</p>
                </div>
                <div class="mod-infos">
                    <div class="medium mod-infos-wrapper">
                        <div class="mod-info">
                            <p>Auteur: <span>Bodarn et OkaniYoshiii</span></p>
                        </div>
                        <div class="mod-info">
                            <p>Date de publication: <span><time datetime="2023-02-13">13/02/2023</time></span></p>
                        </div>
                        <div class="mod-info">
                            <p>Version actuelle: <span>1.0.0</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="narrow">
                <h2>Description</h2>
                <p>Notre volonté pour le jeu est de créer une expérience immersive et donc, par extension, un peu difficile comme pourrait l'être une vraie survie dans une période post-apocalyptique. Pour cela, nous voulons aussi que tout ne soit pas facilement accessible et que parfois, vous soyez obligé de jouer avec une forme de contrainte incitant à faire des choix. Pour les hordes, nous avons décidé de changer le fonctionnement des générateurs afin de rendre le tout plus gourmand tout en offrant des possibilités d'amélioration de ces derniers.</p>
                <h3>Fonctionnalités :</h3>
                <p>Ce mod rajoute deux générateurs :</p>
                <p><b>Générateur de chantier :</b></p>
                <img src="/images/elecbdr-small.webp" alt="">
                <blockquote>
                <p>Capacité du Réservoir : 1500
                Capacité énergétique maximale : 1500W</p>
                </blockquote>
                <p><b>Générateur industriel </b></p>
                <img src="/images/elecbdr-big.webp" alt="">
                <blockquote>
                <p>Capacité du Réservoir : 25000
                Capacité énergétique maximale : 7500W</p>
                </blockquote>
                <p>Et modifie aussi les statistiques des générateurs Vanilla :</p>
                <p><b>Groupe électrogène</b></p>
                <blockquote>
                <p>Capacité du Réservoir : 750
                Capacité énergétique maximale : 480W</p>
                </blockquote>
                <p><b>Groupe solaire</b></p>
                <blockquote>
                <p>Capacité énergétique maximale : 180W</p>
                </blockquote>
                <p>Les Groupes Solaires et les Panneaux Solaires sont fabricables dans l'Etabli grâce au Magazine &quot;L'électricité pour débutant&quot;.</p>
                <img src="/images/elecbdr-craft.webp" alt="">
                <p>Le Bloc de Verre pare-balles est nécessaire pour la construction des Panneaux Solaires. Ce dernier nécessitait un Creuset afin de pouvoir être construit ce qui n'est désormais plus le cas.</p>
                <div class="two-columns">
                    <img src="/images/elecbdr-craft-3.webp" alt="">
                    <img src="/images/elecbdr-craft-4.webp" alt="">
                </div>
                <p>Le mod modifie les valeurs de consommation électriques de certains pièges comme les Tourelles, les Pièges à Lames etc ... et rajoute aussi des Piquets Enflammés qui fonctionnent de la même manière que les Piquets Electriques mais qui ... enflamment quoi ^^</p>
                <p>Les objectifs principaux du Mod sont de corser un peu la difficulté des Lunes de Sang et d'éviter que certains ne s'appuient trop sur l'électricité et les pièges pour passer la horde mais aussi afin d'augmenter la sensation d'évolution de vos bases.</p>
                <p>⚠️ Il est recommandé de laisser 3 blocs libres entre deux piquets pour éviter toute forme de bugs</p>
                <img src="/images/elecbdr-fence.webp" alt="">
            </div>
        </section>
    </main>
    
<?php include_once "../components/footer.php"; ?>
</body>
</html>