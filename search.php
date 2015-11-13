<?php



//require 'connect.php';
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_select_db('shraddha');
if (!$conn) {
    die('Could not connect: ' . mysql_error());
}
 




   // $low = $_POST['low'];
   // $high	=$_POST['high'];



//SELECT * FROM MyTable WHERE (Column1 LIKE '%keyword1%' OR Column2 LIKE 
//'%keyword1%') AND (Column1 LIKE '%keyword2%' OR Column2 LIKE '%keyword2%');
// SELECT ID FROM T WHERE ? BETWEEN MN AND MX ORDER BY MN LIMIT 1 
  
$query = "SELECT * FROM product_mobile WHERE  price BETWEEN 0 AND 2000";

// $query = "SELECT * FROM product_mobile WHERE ( Product_name  LIKE '%" . $key . "%'  OR brand LIKE '%" . $key . "%' OR price LIKE '%" . $key . "%' OR type LIKE '%" . $key . "%')";

 $retval = mysql_query( $query, $conn );
 while($row1=mysql_fetch_array($retval))
{  
    
     $output[]=$row1;
    
  
}
echo json_encode($output);
   

?>