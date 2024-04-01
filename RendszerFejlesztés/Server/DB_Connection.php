<?php

$DBhost = "localhost";
$DBusername = "root";
$DBpassword = "";
$db = "moodledb";

$conn = new mysqli($DBhost, $DBusername, $DBpassword, $db);

if($conn->connect_errno){
    die("Error: " . $conn->connect_error);
    exit;
}

?>