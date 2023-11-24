<?php
require_once "../includes/config_session.inc.php";
require_once "../includes/trading_view.inc.php";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="OkaniYoshiii">
    <meta name="description" content="[xxxxxxxxxxxxxxxxxx] du serveur 7 Days to Die &quot;Les Fraternels&quot;">
    <script>document.documentElement.classList.add('js-active');</script>
    <title>Marchandage</title>
    <link rel="icon" type="image/vnd.microsoft.icon" href="../images/Compressed/FRT-Logo-30x30.ico" />
    <link rel="stylesheet" href="../css/default.css">
    <link rel="stylesheet" href="../css/trading.css">
    <link rel="stylesheet" href="../css/trading-defer.css">
    <script src="../js/default.js" defer></script>
</head>
<body>
    <?php include_once "../components/header.php"; ?>

    <main>
        <div class="wide trading-center">
            <section>
                <h2 class="text-centered">Les offres disponibles</h2>
                <form action="../includes/trading.inc.php" method="POST">
                    <label for="username">Nom d'utilisateur</label>
                    <input type="text" name="username" id="username">
                    <label for="quality">Qualité</label>
                    <input type="number" name="quality" id="quality" min="0" max="6">
                    <label for="price">Prix</label>
                    <input type="number" name="price" id="price" min="0" max="25000">
                    <label for="item">Objet à mettre en vente</label>
                    <select name="item" id="item">
                        <option value="">--Selectionnez un item--</option>
                        <option value="fusil a pompe">"fusil a pompe"</option>
                        <option value="sniper">"sniper"</option>
                    </select>
                    <input type="submit" value="Ajouter un item"></input>
                </form>
                <?php print_errors(); ?>
                <table class="output-table">
                    <thead>
                        <tr>
                            <th>Nom de l'item</th>
                            <th>Qualité</th>
                            <th>Prix</th>
                            <th>Vendeur</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>
        </div>
    </main>

    <?php include_once "../components/footer.php"; ?>
</body>
</html>