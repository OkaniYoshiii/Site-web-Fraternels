<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="OkaniYoshiii">
    <meta name="description" content="[xxxxxxxxxxxxxxxxxx] du serveur 7 Days to Die &quot;Les Fraternels&quot;">
    <script>document.documentElement.classList.add('js-active');</script>
    <title>Mods - Réduction Bruit Foreuse</title>
    <link rel="icon" type="image/vnd.microsoft.icon" href="../images/Compressed/FRT-Logo-30x30.ico" />
    <link rel="stylesheet" href="../css/default.css">
    <link rel="stylesheet" href="../css/default-mod.css">
    <link rel="stylesheet" href="../css/mod-son-foreuse.css">
    <script src="../js/default.js" defer></script>
</head>
<body>
    
<?php include_once "../components/header.php"; ?>
    <main>
        <section class="hero-banner text-centered" style="--mod-banner: url(../../images/auger.webp);">
            <div class="hero-filter">
                <div class="medium hero-title">
                    <h1>Réduction Bruit Foreuse</h1>
                    <p class="mod-category">Quality Of Life</p>
                </div>
                <div class="mod-infos">
                    <div class="medium mod-infos-wrapper">
                        <div class="mod-info">
                            <p>Auteur: <span>OkaniYoshiii</span></p>
                        </div>
                        <div class="mod-info">
                            <p>Date de publication: <span><time datetime="2023-09-26">26/09/2023</time></span></p>
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
                <p>Pour les mineurs, pas besoin de détailler à quel point ce Mod peut vous sauver d'une future perte d'audition. Pour les autres, sachez que le minage dans 7 Days To Die est presque une étape obligatoire dans la progression du jeu. Cela peut être très long et fastidieux en début de partie mais le meilleur moment pour miner est celui où l'on débloque la Foreuse. Cette dernière nous facilite grandement la vie mais a tendance a très vite devenir une source de douleur auditive à force de l'utiliser au point où certains joueurs préfèrent la Pioche. Suite aux nombreuses plaintes de la part de la communauté concernant cette dernières, il a donc été décidé de faire quelque chose ...</p>
                <h3>Fonctionnalités :</h3>
                <p>Au vu des limitations techniques induites par le modding en server-side et suite à un <a href="https://discord.com/channels/653642303663243309/1121940937480863874/1154828788237078638" target="_blank">sondage</a> réalisé sur le Discord de la communauté, il a été decidé de réduire le son de la foreuse de la manière suivante :</p>
                <p>Le son des outils frappant sur une surface métallique <b>lorsque le personnage est accroupi</b> a été réduit</p>
                <img src="/images/auger-sound.webp" alt="">
                <p>Le jeu Vanilla faisait déjà cela ce qui fait que la réduction passe de <b>70%</b> à <b>90%</b> en comparaison au son de base, lorsque le joueur est debout.</p>
                <div class="sounds">
                    <div class="text-centered">
                        <p>Ancien son de la foreuse :</p>
                        <audio controls src="/audio/7DTD-foreuse-pre-patch.mp3">Son de la foreuse avant la correction</audio>
                    </div>
                    <div class="text-centered">
                        <p>Nouveau son de la foreuse :</p>
                        <audio controls src="/audio/7DTD-foreuse-post-patch.mp3">Son de la foreuse après la correction</audio>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
<?php include_once "../components/footer.php"; ?>
</body>
</html>