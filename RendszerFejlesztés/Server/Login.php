<?php
    include "DB_Connection.php"

    /*
    This Function has to receive an inputUserName, an inputName and an inputPassword through Post method!

    Checks if the given data (Username and Password) is present and pared correctly in the DataBase, and if it is, logs in the user
    */

    //sessions_start starts a session where variables can be passed down to different pages 
    session_start();

    // Processing Log In Data 
       $username = $_POST['username'];
       $password = $_POST['password'];

        $sql = "SELECT * FROM users WHERE username='$username' AND Password='$password'";
        $result = mysqli_query($conn, $sql);
        


        if(mysqli_num_rows($result) == 1) {

            // Uploading UserID and UserName to session
            $_SESSION['userID'] = $row["id"];
            $_SESSION['userName'] = $username;
            
            // Redirect to home page
           header("Location: home.php");
            exit;
        } else {
            $_SESSION['message'] ="Wrong Username/Password!";
        }
    
?>