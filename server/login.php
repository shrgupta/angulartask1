<?php



$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$conn) {
    die("ERROR: Could not connect. " . mysql_connect_error());
}
mysql_select_db('shraddha');

$email = $_POST['email'];

$password = $_POST['pass'];


$sql = "SELECT * FROM angular WHERE email='$email' AND pass='$password'";

$query = mysql_query($sql, $conn);


$count = mysql_num_rows($query);
// $row=mysql_fetch_array($query);
$row = mysql_fetch_array($query);
if ($count == 1) {
    echo $row[0];
} else {
    echo "Invalid username or password";
}
$row = mysql_fetch_array($query);

mysql_close($conn);








