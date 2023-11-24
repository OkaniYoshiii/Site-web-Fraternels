<?php 

declare(strict_types=1);

function get_username(object $pdo, string $username) {
    $query = "SELECT user FROM users WHERE user = :username;";
    $statement = $pdo->prepare($query);
    $statement->bindParam(":username", $username);
    $statement->execute();

    $result = $statement->fetch(PDO::FETCH_ASSOC);
    return $result;
}