<?php
session_start();
$_SESSION["userLoggedIn"] = false;
header("Location: ../pages/credits.php");