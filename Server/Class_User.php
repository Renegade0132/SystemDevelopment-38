<?php
include "DB_Connection.php";

class User
{
    private $ID;
    private $userName;
    private $name;
    private $password;
    private $degreeID;
    private $userType;

    function __construct($inputID, $inputUserName, $inputName, $inputPassword, $inputDegreeID, $inputUserType)
    {

        $this->setUser($inputID, $inputUserName, $inputName, $inputPassword, $inputDegreeID, $inputUserType);
    }

    //Getters
    function getID()
    {
        return $this->ID;
    }

    function getUserName()
    {
        return $this->userName;
    }

    function getName()
    {
        return $this->name;
    }

    function getPassword()
    {
        return $this->password;
    }

    function getDegreeID()
    {
        return $this->degreeID;
    }

    function getUserType()
    {
        return $this->userType;
    }

    //Setters
    function setID($inputID)
    {
        $this->ID = $inputID;
    }

    function setUserName($inputUserName)
    {
        $this->userName = $inputUserName;
    }

    function setName($inputName)
    {
        $this->name = $inputName;
    }

    function setPassword($inputPassword)
    {
        $this->password = $inputPassword;
    }

    function setDegreeID($inputDegreeID)
    {
        $this->degreeID = $inputDegreeID;
    }

    function setUserType($inputUserType)
    {
        $this->userType = $inputUserType;
    }

    function setUser($inputID, $inputUserName, $inputName, $inputPassword, $inputDegreeID, $inputUserType)
    {
        $this->setID($inputID);
        $this->setUserName($inputUserName);
        $this->setName($inputName);
        $this->setPassword($inputPassword);
        $this->setDegreeID($inputDegreeID);
        $this->setUserType($inputUserType);
    }
}


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["userName"]) && isset($_POST["name"]) && isset($_POST["degreeID"]) && isset($_POST["userType"])) {
    session_start();
    if (isset($_SESSION["User"])) {
        $userObj = unserialize($_SESSION["User"]);
        
        $userID = $userObj->getID();
        $currentUserName = $userObj->getName();
        $userName = $_POST["userName"];
        $name = $_POST["name"];
        $degreeID = $_POST["degreeID"];
        $userType = $_POST["userType"];
        $sql = "UPDATE users SET ";

        if($userName == "" || $userName == " " || $userName == null){            
            $sql .= " username =  ' $currentUserName '";
        }else{
            $sql .= " username = '$userName'";
        }

        if($name == "" || $name == " " || $name == null){            
        }else{
            $sql .= ", name = '$name'";
        }
        
        /*if($userObj->getDegreeID() != null && ($degreeID == null || $degreeID =="")){
            echo "Invalid way to set DegreeID";
        }else{
            $sql .= ", degree_id = '$degreeID'";
        }*/
        
        if($userType == "" || $userType == " " || $userType == null){
        }else{
            $sql .= ", user_type = '$userType'";
        }
        
        $sql .=  " WHERE id = '$userID'; ";

        //$sql = "UPDATE users SET username = '$userName', name = 'name', degree_id = '$degreeID', user_type = '$userType' WHERE id = '$userID'; ";
        if($conn->query($sql) === TRUE){
            $userObj->setUserName($userName);
            $userObj->setName($name);
            $userObj->setDegreeID($degreeID);
            $userObj->setUserType($userType);

            $_SESSION["User"] = serialize($userObj);
            echo "Update succesful!";
            
        }else{
            echo "Update failed!" . $conn->error;
            
        }

    }else{
        echo "Session[User] is not available!";
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["variableToGet"])) {
    $variableToEcho = $_POST["variableToGet"];
    session_start();
    if (isset($_SESSION["User"])) {
        $userObj = unserialize($_SESSION["User"]);

        switch ($variableToEcho) {
            case "id":
                return $userObj->getID();
                break;
            case "username":
                return $userObj->getUserName();
                break;
            case "name":
                return $userObj->getName();
                break;
            case "password":
                return 0;
                break;
            case "degree_id":
                return $userObj->getDegreeID();
                break;
            case "user_type":
                return $userObj->getUserType();
                break;
            default:
            return "Invalid variable";
                break;
        }
    }else{
        return 400; //Session not available - Heandle it that way in FrontEnd
    }
}

?>