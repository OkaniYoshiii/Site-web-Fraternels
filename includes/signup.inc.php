<?php 

if ($_SERVER["REQUEST_METHOD"] === "GET") {header("Location: ../pages/trading.php"); die();}

$username = $_POST["username"];

try {
    require_once "dbh.inc.php";
    require_once "signup_model.inc.php";
    require_once "signup_contr.inc.php";

    // ERROR HANDLERS

    $errors = [];

    if (is_input_empty($username)) {
        $errors["empty_input"] = "Un des champs doit être remplit";
    }
    if (is_username_taken($pdo, $username)) {
        $errors["username_taken"] = "Ce nom d'utilisateur est déjà pris";
    }

    require_once "config_session.inc.php";

    if($errors) {
        $_SESSION["errors_signup"] = $errors;
        header("Location: ??/pages/trading.php");
    }

    createUser();
} catch (PDOException $e) {
    die("Signup failed :" . $e->getMessage());
}