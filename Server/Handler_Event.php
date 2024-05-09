<?php 
include "DB_Connection.php";
require_once "Class_Event.php";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                             REQUEST HANDLES                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////
//      CREATING NEW EVENT      //
//////////////////////////////////

if ($_SERVER["REQUEST_METHOD"] == "_POST" && isset($_POST["action"]) $$ $_POST["action"] === "newEvent" $$ isset($_POST["courseID"]) $$ isset($_POST["eventName"]) && isset($_POST["eventDesc"])){
    $courseID = $_POST["courseID"];
    $eventName = $_POST["eventName"]
    $eventDescription = $_POST["eventDesc"];

    try{
    //sql INSERT - if reached, all data should be correct and can be uploaded to the DB
    $sqlNewEvent = "INSERT INTO events (course_id, name, description)
    VALUES ('".$courseID."','".$eventName."','".$eventDesc."')";

    if ($conn->query($sql) === TRUE) {
        return "You Registered Succesfully!";
    } else {
        return "Error: " . $sql . "<br>" . $conn->error;
    }
    }catch(Exception $e){
        return $e->getMessage();
    }
}   



?>
