<?php

class Course {
    private $CourseID;
    private $CourseCode;
    private $CourseName;
    private $CourseCredit;

    //Constructor
    function __construct($ID, $Code, $Name, $Credit){
        $this->CourseID = $ID;
        $this->CourseCode = $Code;
        $this->CourseName = $Name;
        $this->CourseCredit = $Credit;
    }

    //Getters Setters for variables (No setter for ID)
    function getCourseID(){
        return $this->CourseID;
    }

    function getCourseCode(){
        return $this->CourseCode;
    }

    function setCourseCode($inputCourseCode){
        $this->CourseCode = $inputCourseCode;
    }
    
    function getCourseName(){
        return $this->CourseName;
    }

    function setCourseName($inputCourseName){
        $this->CourseName = $inputCourseName;
    }

    function getCourseCredit(){
        return $this->CourseCredit;
    }

    function setCourseCredit($inputCourseCredit){
        $this->CourseCredit = $inputCourseCredit;
    }

}

?>