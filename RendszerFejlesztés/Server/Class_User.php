<?php

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

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["variableToGet"])) {
    $variableToEcho = $_POST["variableToGet"];
    session_start();
    if (isset($_SESSION["User"])) {
        $userObj = unserialize($_SESSION["User"]);

        switch ($variableToEcho) {
            case "id":
                echo $userObj->getID();
                break;
            case "username":
                echo $userObj->getUserName();
                break;
            case "name":
                echo $userObj->getName();
                break;
            case "password":
                echo "Unavailable.";
                break;
            case "degree_id":
                echo $userObj->getDegreeID();
                break;
            case "user_type":
                echo $userObj->getUserType();
                break;
            default:
                echo "Invalid variable";
                break;
        }
    }else{
        echo "Session[User] is not available";
    }
}
