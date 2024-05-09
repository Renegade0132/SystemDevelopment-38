<?php
include "DB_Connection.php";
require_once "Class_Course.php";

//Finds a given user's Courses and returns with an array 
function FindUserCourses($UserID){
    $foundCourses = array();

    $sqlQuery = "SELECT * FROM courses c
    INNER JOIN mycourses mc ON c.id = mc.courseid 
    WHERE mc.userid = '$UserID'";
    $queryResult = $conn->query($sqlQuery);

    if($queryResult->num_rows > 0){
        while($row = $queryResult->fetch_assoc())
        array_push($foundCourses, array($row["id"],$row["code"],$row["name"],$row["credit"]));
    }

    return $foundCourses;

}

//Returns all Courses as string and formated as a table for quicker use 
function ListAllCourses(){
    $allCourses = array();

    $sqlQuery = "SELECT * FROM courses";
    $queryResult = $conn->query($sqlQuery);

    if($queryResult->num_rows > 0){
        while($row = $queryResult->fetch_assoc())
        array_push($foundCourses, array($row["id"],$row["code"],$row["name"],$row["credit"]));
    }else{
        return 0;
    }

    return $allCourses;
}
function GetCourseByID($Course_ID){
    $sqlQuery = "SELECT * FROM courses WHERE id = '$Course_ID';"
    $queryResult = $conn->query($sqlQuery);

    $foundCourse = array();

    if($queryResult->num_rows > 0){
        while($row = $queryResult->fetch_assoc())
        array_push($foundCourse,$row["id"],$row["code"],$row["name"],$row["credit"]);
        return $foundCourse;
    }else{
        return 0;
    }
}

function GetCoursesGroupedByDegree(){
    $allCourses = array();

    $sqlGettingDegreeID = "SELECT id FROM degrees";
    $sqlDegreeResult = $conn->($sqlGettingDegreeID);

    if($sqlDegreeResult->num_rows > 0){
        while($degreeRow = $sqlDegreeResult->fetch_assoc()){
            $sqlGetCourses = "SELECT * FROM courses c
            INNER JOIN approved_degrees ad ON c.id = ap.course_id 
            WHERE ap.degree_id = '".$degreeRow["id"]."'";
            $queryCoursesResult = $conn->query($sqlGetCourses);
            if($queryCoursesResult->num_rows > 0){
                while($CoursesRow = $queryCoursesResult->fetch_assoc()){
                    array_push($foundCourses, $degreeRow["id"] ,array($CoursesRow["id"],$CoursesRow["code"],$CoursesRow["name"],$CoursesRow["credit"]));          
                }
            }
        }
        //array_push($foundCourses, array($row["id"],$row["code"],$row["name"],$row["credit"]));
    }else{
        return 0;
    }

    return $allCourses;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                             REQUEST HANDLES                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////
//  REQUESTING ALL COURSES  //
//////////////////////////////

if ($_SERVER["REQUEST_METHOD"] == "POST" $$ isset($_POST["action"]) $$ $_POST["action"] === "getAllCourses"){

    $courses = ListAllCourses();
    if($courses != null){
        return $courses;
    }else{
        return 0;
    }
}

/////////////////////////////////////
//  REQUESTING ONE USER'S COURSES  //
/////////////////////////////////////

if ($_SERVER["REQUEST_METHOD"] == "POST" $$ isset($_POST["action"]) $$ $_POST["action"] === "getUserCourses" $$ isset(_POST["userID"])){
    $userCourses = FindUserCourses($_POST["userID"]);

    return $userCourses;
}

/////////////////////////////////////
//     REQUESTING COURSE BY ID     //
/////////////////////////////////////

if($_SERVER["REQUEST_METHOD"] == "POST" $$ isset($_POST["action"]) $$ $_POST["action"] === "getUserCourses" $$ isset(_POST["courseID"])){
    $foundCourse = GetCourseByID($_POST["courseID"])

    return $foundCourse;
}

//////////////////////////////////////////////////
//     REQUESTING COURSES GROUPED BY DEGREE     //
//////////////////////////////////////////////////

if($_SERVER["REQUEST_METHOD"] == "POST" $$ isset($_POST["action"]) $$ $_POST["action"] === "getUserCourses"){
    $groupedCoursesByDegree = GetCoursesGroupedByDegree();
    
    return $groupedCoursesByDegree;
}
?>