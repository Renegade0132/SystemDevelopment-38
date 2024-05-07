<?php
    include "DB_Connection.php";

    /* 
    This Function has to receive an inputUserName, an inputName and an inputPassword through Post method!

    Then it checks if the recieved data is not blank and not used in the DataBase.

    If everything is given correctly it should upload create a new User in the DataBase
    */




    //Empty Field Check - If field is empty, then notify user
    if ($_POST['inputUserName'] != ""){
        $inputUserName= $_POST['inputUserName'];
        }else{
            die("Give a valid username!");
        }

    if ($_POST['inputName'] != ""){
        $inputUserName= $_POST['inputUserName'];
        }else{
            die("Give a valid username!");
        }

    if($_POST['inputEmail'] != ""){
    $inputEmail= $_POST['inputEmail'];
    }else{
        die("Give a valid email address!");
    }

    if ($_POST['inputPassword'] != ""){
        $inputPassword= $_POST['inputPassword'];
    }else{
        die("Give a valid passowrd!");
    }    

    //Empty Field Check Over

    //Password transforming to Hash code

    //$hash = hash('sha256', $inputPassword);

    //Transform over

    //Same username and email address check to avoid duplicants

    $UName_Check = mysqli_real_escape_string($conn, $inputUserName);
    $UName_Check_SQL = "SELECT User_Name FROM users WHERE User_Name = '" . $inputUserName . "'";
    $UName_Check_Result = mysqli_query($conn, $ID_Check_SQL);

    if(mysqli_num_rows($ID_Check_Result) > 0){
        die("Error: This Username is already being used!");
    }

    $Email_Check = mysqli_real_escape_string($conn, $inputEmail);
    $Email_Check_SQL = "SELECT Email FROM users WHERE Email = '". $inputEmail ."'";
    $Email_Check_Result = mysqli_query($conn, $Email_Check_SQL);

    if(mysqli_num_rows($Email_Check_Result) > 0){
        die("Error: This Email address is already being used!");
    }

    //Duplicants Check Over

    //Generation Over

    try{
    //sql INSERT - if reached, all data should be correct and can be uploaded to the DB
    $sql = "INSERT INTO users (User_Name, Name, Email, Password) 
    VALUES('". $inputUserName ."','". $inputName ."','". $inputEmail ."','". $hash ."');";

    if ($conn->query($sql) === TRUE) {
        echo "You Registered Succesfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    }catch(Exception $e){
        echo $e->getMessage();
    }
?>