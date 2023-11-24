<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] === "GET") {header("Location: ../pages/trading.php"); die();}

try {
    $pdo = new PDO("mysql:host=localhost;port=3307;dbname=trading_db;","root","root");
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    $username = $_POST["username"];
    $sqlQuery = "SELECT user FROM users WHERE user = :username;";
    $statement = $pdo->prepare($sqlQuery);
    $statement->bindParam(":username", $username);
    $statement->execute();
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);

    $pdo = null;
    $statement = null;
    
} catch (PDOException $e) {
    echo "Connection failed : " . $e->getMessage();
}
print_r($results);
$_SESSION["results"] = $results;

header("Location: ../pages/trading.php");
die();