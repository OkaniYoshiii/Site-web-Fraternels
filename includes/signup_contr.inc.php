<?php 
// Controller file 

// Gère les informations reçues par les utilisateurs et les traite

declare(strict_types=1);

function is_input_empty(string $username) : bool {
    if (empty($username)) {
        return true;
    } else {
        return false;
    }
}

function is_username_taken(object $pdo, string $username) : bool {
    if (get_username($pdo, $username)) {
        return true;
    } else {
        return false;
    }

}