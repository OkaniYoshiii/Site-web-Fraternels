<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="OkaniYoshiii">
    <meta name="description" content="[xxxxxxxxxxxxxxxxxx] du serveur 7 Days to Die &quot;Les Fraternels&quot;">
    <script>document.documentElement.classList.add('js-active');</script>
    <title>Mods - Refonte Mines Terrestres</title>
    <link rel="icon" type="image/vnd.microsoft.icon" href="../images/Compressed/FRT-Logo-30x30.ico" />
    <link rel="stylesheet" href="../css/default.css">
    <link rel="stylesheet" href="../css/default-mod.css">
    <script src="../js/default.js" defer></script>
</head>

<body>
    
<?php include_once "../components/header.php"; ?>
    <main>
        <section class="hero-banner text-centered" style="--mod-banner: url(../../images/stickylandmine.webp);">
            <div class="hero-filter">
                <div class="medium hero-title">
                    <h1>Refonte Mines Terrestres</h1>
                    <p class="mod-category">Ajout de contenu, Pièges</p>
                </div>
                <div class="mod-infos">
                    <div class="medium mod-infos-wrapper">
                        <div class="mod-info">
                            <p>Auteur: <span>OkaniYoshiii</span></p>
                        </div>
                        <div class="mod-info">
                            <p>Date de publication: <span><time datetime="2023-09-29">29/09/2023</time></span></p>
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
                <p>Les mines terrestres ont toujours été considérées comme étant l'un des pièges les moins efficaces de 7 Days To Die. Elles sont à usage unique, sont couteuses et tuent généralement peu de zombie à chaque explosion. Or, elles ont une propriété qui n'est pas suffisament exploitée par le jeu de base : pouvoir être explosées à distance par des tirs ou des coup en mêlée. Et c'est là toute la philosphie de ce Mod : transformer les Mines terrestres en petites charges explosives activables à distance. Cela encouragera des nouvelles manières d'appréhender les Hordes tout en offrant de nouvelles possibilités pour se défendre.</p>
                <img src="/images/landmines.webp" alt="">
                <h3>Fonctionnalités :</h3>
                <p>Les modification apportées aux mines terrestres sont les suivantes :</p>
                <ul>
                    <li>Le coût des mines aux Marchands passe de <strong>291 Dukes</strong> à <strong>135 Dukes</strong></li>
                    <li>Les mines sont maintenant <strong>collantes</strong>, c'est à dire qu'elles peuvent être placées à l'envers en utilisant la &quot;rotation avancée&quot;</li>
                    <li>Les mines se craftent uniquement par pack de 3 et leur recette à été modifiée. Il faut 3 fois plus de ressources pour les faire comparé à en Vanilla SAUF pour le ruban ! <strong>Un seul ruban est désormais nécessaire pour faire 3 mines !</strong></li>
                </ul>
                <img src="/images/landmines-craft.webp" alt="">
                <p>Je rappelle que les mines peuvent désormais <strong>démembrer</strong> et leur chances de démembrement ont l'air assez haute d'après mes tests.</p>
                <p>Excellent pour couper les jambes de nos amis les Ferals ! 🧟</p>
            </div>
        </section>
    </main>
    
<?php include_once "../components/footer.php"; ?>
</body>

</html>