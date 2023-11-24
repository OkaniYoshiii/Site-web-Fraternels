<?php

function print_errors() {
    if (isset($_SESSION["errors"]))  {
        $errors = $_SESSION["errors"];
        
        foreach($errors as $error) {
            echo '<p>' . $error . '</p>';
        }
    }
}