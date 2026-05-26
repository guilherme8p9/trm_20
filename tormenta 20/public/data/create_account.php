<?php
$host = "";
$user = "root";
$password = "root";
$dbname = "teste";

try {
    $dns = "mysql:host={$host};dbname={$dbname};charset=utf8mb4";
    $conn = new PDO($dns, $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
};
?>