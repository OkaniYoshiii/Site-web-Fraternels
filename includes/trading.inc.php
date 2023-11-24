<?php 

if ($_SERVER["REQUEST_METHOD"] !== "POST") {header("Location: ../pages/trading.php"); die();}

try {
    require_once "dbh.inc.php";
    require_once "trading_model.inc.php";
    require_once "trading_contr.inc.php";

    $errors = [];

    if (is_username_empty($_POST["username"])) {
        $errors[] = "Le champ Utilisateur doit être rempli";
    }

    require_once "config_session.inc.php";

    if ($errors) {
        $_SESSION["errors"] = $errors;
    }

    if (isset($_SESSION['errors']) && empty($errors)) {
        unset($_SESSION['errors']);
    }

    header("Location: ../pages/trading.php");
    die();

} catch(PDOException $e) {
    die("Tentative d'envoi des données au serveur échoué" . $e->getMessage());
}