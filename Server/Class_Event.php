<?php
include "DB_Connection.php";

class Event {
    private $eventID;
    private $course_id;
    private $name;
    private $description;

    //Constructor
    __construct($_eventID, $_course_id, $_name, $_description){
        $this->eventID = $_eventID;
        $this->course_id = $_course_id;
        $this->name = $_name;
        $this->description = $_description;
    }

    //Getters
    function getEventID(){
        return $this->eventID;
    }
    
    function getCourseID(){
        return $this->course_id;
    }

    function getName(){
        return $this->name;
    }
    
    function getDecsription(){
        return $this->decsription;
    }

    //Setters
    function setCourseID($newID){
        $this->course_id = $newID;
    }

    function setName($newName){
        $this->name = $newName;
    }

    function setDescription($newDesc){
        $this->description = $newDesc;
    }
}
?>