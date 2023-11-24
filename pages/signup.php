<?php
require_once "../includes/config_session.inc.php";
require_once "../includes/signup_view.inc.php";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="OkaniYoshiii">
    <meta name="description" content="[xxxxxxxxxxxxxxxxxx] du serveur 7 Days to Die &quot;Les Fraternels&quot;">
    <script>document.documentElement.classList.add('js-active');</script>
    <title>Incription</title>
    <link rel="icon" type="image/vnd.microsoft.icon" href="../images/Compressed/FRT-Logo-30x30.ico" />
    <link rel="stylesheet" href="../css/default.css">
    <script src="../js/default.js" defer></script>
</head>
<body>
    <?php include_once "../components/header.php"; ?>

    <main>
    <div class="narrow">
        <h1 class="text-centered">Centre de marchandage</h1>
        <?php include_once "../components/login.php"; ?>
        <?php check_signup_errors(); ?>
    </div>
    </main>

    <?php include_once "../components/footer.php"; ?>
</body>
</html>