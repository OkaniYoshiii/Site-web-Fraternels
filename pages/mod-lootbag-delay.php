<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="OkaniYoshiii">
    <meta name="description" content="[xxxxxxxxxxxxxxxxxx] du serveur 7 Days to Die &quot;Les Fraternels&quot;">
    <script>document.documentElement.classList.add('js-active');</script>
    <title>Mods - Lootbag Delay</title>
    <link rel="icon" type="image/vnd.microsoft.icon" href="../images/Compressed/FRT-Logo-30x30.ico" />
    <link rel="stylesheet" href="../css/default.css">
    <link rel="stylesheet" href="../css/default-mod.css">
    <script src="../js/default.js" defer></script>
</head>

<body>
    
<?php include_once "../components/header.php"; ?>
    <main>
        <section class="hero-banner text-centered" style="--mod-banner: url(../../images/lootbag.webp);">
            <div class="hero-filter">
                <div class="medium hero-title">
                    <h1>Lootbag Delay</h1>
                    <p class="mod-category">Quality Of Life</p>
                </div>
                <div class="mod-infos">
                    <div class="medium mod-infos-wrapper">
                        <div class="mod-info">
                            <p>Auteur: <span>OkaniYoshiii</span></p>
                        </div>
                        <div class="mod-info">
                            <p>Date de publication: <span><time datetime="2023-07-19">19/07/2023</time></span></p>
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
                <h2 id="description">Description</h2>
                <p>Les sacs du butin sont extrêmement rares et contiennent généralement de très bons items. La plupart de ces sacs sont obtenus lors des Hordes car le nombre de zombies est important ce qui permet de grandement augmenter les quantités de sacs à looter. Ceci dit, il arrive parfois que vous tuiez un zombie en début de Horde mais que le sac qu'il a laissé tomber disparaisse avant la fin de cette dernière. Frustrant n'est-il pas ? Suite à des suggestions de la part de la communauté, nous avons alors mis en place ce Mod afin de contrer ce problème, vous permettant ainsi de looter vos précieux sacs de butins sans la pression du temps.</p>
                <h3>Fonctionnalités :</h3>
                <p>Ce mod permet de rallonger la durée de vie des sacs de butin. Cette dernière passe de <b>20 minutes</b> à <b>30 minutes</b>.</p>
            </div>
        </section>
    </main>
    
<?php include_once "../components/footer.php"; ?>
</body>

</html>