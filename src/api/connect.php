<?php
$link = new mysqli("127.0.0.1", "root", "", "hollohonlap");

if (mysqli_connect_errno()) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
} else {
  //echo '<h3 class="bg-success">A kapcsolat létre jött</h3>';
}

$link->set_charset("utf8");

//echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;
//echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;

//mysqli_close($link);
?>
