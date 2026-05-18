<?php
$host = '192.168.15.116';
$username = 'root';
$password = '';
try {
    $conn = new PDO("mysql:host=$host;dbname=projetotrm20", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>