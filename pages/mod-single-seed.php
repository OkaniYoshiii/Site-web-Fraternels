<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="OkaniYoshiii">
    <meta name="description" content="[xxxxxxxxxxxxxxxxxx] du serveur 7 Days to Die &quot;Les Fraternels&quot;">
    <script>document.documentElement.classList.add('js-active');</script>
    <title>Mods - Single Seed</title>
    <link rel="icon" type="image/vnd.microsoft.icon" href="../images/Compressed/FRT-Logo-30x30.ico" />
    <link rel="stylesheet" href="../css/default.css">
    <link rel="stylesheet" href="../css/default-mod.css">
    <script src="../js/default.js" defer></script>
</head>
<body>
    
<?php include_once "../components/header.php"; ?>
    <main>
        <section class="hero-banner text-centered" style="--mod-banner: url(../../images/trees.webp);">
            <div class="hero-filter">
                <div class="medium hero-title">
                    <h1>Single Seed</h1>
                    <p class="mod-category">Général</p>
                </div>
                <div class="mod-infos">
                    <div class="medium mod-infos-wrapper">
                        <div class="mod-info">
                            <p>Auteur: <span>OkaniYoshiii</span></p>
                        </div>
                        <div class="mod-info">
                            <p>Date de publication: <span><time datetime="2023-07-20">20/07/2023</time></span></p>
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
                <p>Sur les serveurs multijoueurs de 7 Days To Die, les arbres peuvent être une vraie plaie à gérer. Ils peuvent causer des lags sur certaines configurations et peuvent impacter les performances du serveur entier. C'est pour cela que vous retrouverez souvent des règles du style "Pas plus de X arbres dans un rayon de Y blocs" sur certains serveurs, dont le notre. Afin de vous empêcher de violer cette règle, nous avons alors décider de tout simplement réduire la quantité de graines founies par chaque arbre une fois abattu.</p>
                <h3>Fonctionnalités :</h3>
                <p>En vanilla, un arbre abbatu par n'importe quel arme ou outil <b>fournit 2 graines</b> au joueur. <br><br>Avec ce Mod, vous n'obtiendrez qu'<b>une seule graine</b> ce qui fait que le nombre d'arbres présent sur le serveur sera toujours constant empêchant ainsi que le serveur devienne innondé d'arbres et que les performances de ce dernier n'en prennent un coup.</p>
                <img src="/images/single-seed.webp" alt="">
            </div>
        </section>
    </main>
    
<?php include_once "../components/footer.php"; ?>
</body>
</html>