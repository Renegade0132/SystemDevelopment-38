<?php
include "DB_Connection.php";
include "Class_User.php";
    /*
    This Function has to receive an inputUserName, an inputName and an inputPassword through Post method!

    Checks if the given data (Username and Password) is present and pared correctly in the DataBase, and if it is, logs in the user
    */

    session_start();

    // Processing Log In Data 
       $username = $_POST['userName'];
       $password = $_POST['password'];

        //Password transforming to hash code
        $hash = hash('sha256', $password);

        $sql = "SELECT * FROM users WHERE username='$username' AND Password='$hash'";
        $result = mysqli_query($conn, $sql);

        if(mysqli_num_rows($result) == 1) {

            // Uploading UserName to session
            //$_SESSION['userName'] = $username;
            while($row = $result->fetch_assoc()){
                $user = new User($row["id"],$row["username"],$row["name"], $row["password"],$row["degree_id"],$row["user_type"]);
                $_SESSION["User"] = serialize($user);
            }
            // Redirect to home page
            //header("Location: ../Client/Home.php");
            echo 1;
            $conn->close();
            exit;
        } else {
            echo 0;
            $conn->close();
        }
    
?>