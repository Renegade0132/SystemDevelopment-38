<?php
include "../Server/Class_User.php";
session_start();
    $userObj = unserialize($_SESSION["User"]);
?>
<script>
    function getID() {
            var userID = "<?php echo $userObj->getID(); ?>";
            return userID;
    }

    function getUserName() {
            var userName = "<?php echo $userObj->getUserName(); ?>";
            return userName;
    }

    function getName() {
            var name = "<?php echo $userObj->getName(); ?>";
            return name;
    }

    function getPassword() {
            var password = "<?php echo $userObj->getPassword(); ?>";
            return password;
    }

    function getDegreeID() {
            var degreeID = "<?php echo $userObj->getDegreeID(); ?>";
            return degreeID;
    }

    function getUserType() {
            var userType = "<?php echo $userObj->getUserType(); ?>";
            return userType;
    }
</script>