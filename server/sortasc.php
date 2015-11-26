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
 if (isset($_POST['page_position'])){
        $page_position = $_POST['page_position'];
  } 
  else {
        $page_position = 0;
  }
   
  $offset = 5 * $page_position;
  $item_per_page = 5;


$query = "SELECT * FROM product_mobile ORDER BY price asc  LIMIT $item_per_page OFFSET $offset";

// $query = "SELECT * FROM product_mobile WHERE ( Product_name  LIKE '%" . $key . "%'  OR brand LIKE '%" . $key . "%' OR price LIKE '%" . $key . "%' OR type LIKE '%" . $key . "%')";

 $retval = mysql_query( $query, $conn );

$result1 = mysql_query("SELECT * FROM product_mobile",$conn );
$num_rows = mysql_num_rows($result1);
$num_rows = ceil($num_rows/5);


$arr= array();

    while($row = mysql_fetch_assoc($retval))
    {
      $arr[]=$row;
    }
    
    $output = array( 
            "data1" =>$arr,
            
            
            "num_rows" => $num_rows
           
            
            );
echo json_encode($output);
   

?>