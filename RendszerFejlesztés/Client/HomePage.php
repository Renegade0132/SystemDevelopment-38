<?php
session_start();
?>

<div id="screen">
<p>Welcome 

<?php
echo ($_SESSION["userName"]);
?>

</p>

</div>