<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="OkaniYoshiii">
    <meta name="description" content="[xxxxxxxxxxxxxxxxxx] du serveur 7 Days to Die &quot;Les Fraternels&quot;">
    <script>document.documentElement.classList.add('js-active');</script>
    <title>Mods - Trader Lobby</title>
    <link rel="icon" type="image/vnd.microsoft.icon" href="../images/Compressed/FRT-Logo-30x30.ico" />
    <link rel="stylesheet" href="../css/default.css">
    <link rel="stylesheet" href="../css/default-mod.css">
    <script src="../js/default.js" defer></script>
</head>
<body>
    
<?php include_once "../components/header.php"; ?>
    <main>
        <section class="hero-banner text-centered" style="--mod-banner:  url(../images/Compressed/7DTD-Alpha21-355x200.webp)">
            <div class="hero-filter">
                <div class="medium hero-title">
                    <h1>Trader Lobby</h1>
                    <p class="mod-category">Equilibrage, Marchands</p>
                </div>
                <div class="mod-infos">
                    <div class="medium mod-infos-wrapper">
                        <div class="mod-info">
                            <p>Auteur: <span>OkaniYoshiii</span></p>
                        </div>
                        <div class="mod-info">
                            <p>Date de publication: <span><time datetime="2023-06-30">30/06/2023</time></span></p>
                        </div>
                        <div class="mod-info">
                            <p>Version actuelle: <span>1.0.0</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <h2>Description</h2>
            <p>Avec l'arrivée du Lobby créé par majoritairement par Bodarn et aidé par quelques membres de la communauté, est arrivé un nouveau problème : avec 3 Marchands présents dans le Lobby, il était alors possible de faire des quêtes de manière infinie en variant les différents Marchands ce qui permettait une montée en expérience accrue qui ne convient pas à la vision que nous avons du jeu. Les joueurs avaient aussi tendance a se regrouper tout autour du Lobby crééant des problèmes avec le spawn de zombies et rendant une bonne partie de la carte innexploitée. Il a donc été décidé de réguler ça en modifiant les Marchands du Lobby pour que ces derniers ne puissent plus fournir de Quêtes.</p>
            <h3>Fonctionnalité :</h3>
            <p>Empêche les Marchands de proposer des Quêtes afin d'éviter des montées en expérience trop élevées et éviter un regroupement trop important de joueur autour du Lobby.</p>
        </section>
    </main>
    
<?php include_once "../components/footer.php"; ?>
</body>
</html>