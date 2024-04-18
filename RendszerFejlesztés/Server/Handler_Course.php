<?php
include "DB_Connection.php";
include "Class_Course.php";

class Handle_Course{
    private $list_Courses = array();

    //Fills up the $list_Courses array with all the data available in Database
    function LoadCourses(){

        $sqlQuery = "SELECT * FROM courses";   //* Selects everything: ID, Code, Name, Credit
        $queryResult = $conn->query($sqlQuery);

        if($queryResult->num_rows > 0){
            while($row = $queryResult->fetch_assoc())
            array_push($list_Courses, array($row["id"],$row["code"],$row["name"],$row["credit"]));
        }

    }

    //Finds a given user's Courses and returns with an array 
    //-- Should search list_Courses rather than the DB! -- Should consider returning with a string formated as a table for webpage use!
    function FindUserCourses($UserName){
        $foundCourses = array();

        $sqlQuery = "SELECT * FROM courses c
        INNER JOIN mycourses mc ON c.id = mc.courseid 
        WHERE mc.userid = '$UserName'";
        $queryResult = $conn->query($sqlQuery);

        if($queryResult->num_rows > 0){
            while($row = $queryResult->fetch_assoc())
            array_push($foundCourses, array($row["id"],$row["code"],$row["name"],$row["credit"]));
        }

        return $foundCourses;

    }

    //Returns all Courses as string and formated as a table for quicker use 
    function ListAllCourses(){
        
    }
}
?>