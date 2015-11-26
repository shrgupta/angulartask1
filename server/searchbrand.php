<?php

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
    $arr1=array();
    $arr= array();  
    $j=0;             
$len=$_REQUEST['length'];

$brand=array_values($_REQUEST);
for($i=0;$i<$len;$i++)
{
  $br=$brand[$i];
$query = "SELECT * FROM product_mobile WHERE brand='$br' ";
// $query = "SELECT * FROM product_mobile WHERE  brand  LIKE '%".$brand[$i]."%'  ORDER BY id  LIMIT $item_per_page OFFSET $offset";
 $retval = mysql_query( $query, $conn );
  $result1 = mysql_query("SELECT * FROM product_mobile",$conn );
$num_rows = mysql_num_rows($result1);
// $num_rows = ceil($num_rows/5);
$num_rows = 0;




    while($row = mysql_fetch_assoc($retval))
    {
      $arr[$j]=$row;
    }
    $j++;
   

}
$output = array( 
"data1" =>$arr,
"num_rows" => $num_rows
);
   
echo json_encode($output);
   
?>