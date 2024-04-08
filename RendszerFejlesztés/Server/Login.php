<?php

    /*
    This Function has to receive an inputUserName, an inputName and an inputPassword through Post method!

    Checks if the given data (Username and Password) is present and pared correctly in the DataBase, and if it is, logs in the user
    */

    session_start();
    

    // Processing Log In Data 
       $username = $_POST['username'];
       $password = $_POST['password'];

       $hash = hash('sha256',$password);

        $sql = "SELECT * FROM users WHERE User_Name='$username' AND Password='$hash'";
        $result = mysqli_query($conn, $sql);
        


        if(mysqli_num_rows($result) == 1) {

            // Uploading UserName to session
            $_SESSION['username'] = $username;
            
            // Redirect to home page
           header("Location: home.php");
            exit;
        } else {
            $_SESSION['message'] ="Wrong Username/Password!";
        }
    
?>