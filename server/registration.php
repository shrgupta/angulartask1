<?php


$dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = '';
   $conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(!$conn){
    die("ERROR: Could not connect. " . mysql_connect_error());
}
 mysql_select_db('shraddha');
$user = $_POST['user'];
$email = $_POST['email'];
$pass = $_POST['pass'];
echo $pass;
$cpass = $_POST['cpass'];
$sql = "INSERT INTO angular (user, email,pass,cpass) VALUES ('$user','$email','$pass','$cpass')";

if(mysql_query( $sql,$conn)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysql_error($conn);
}
 
// Close connection
mysql_close($conn);
