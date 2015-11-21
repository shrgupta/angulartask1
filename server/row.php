<?php
    $dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = '';
   $conn = mysql_connect($dbhost, $dbuser, $dbpass);
   if(! $conn )
   {
      die('Could not enter data: ' . mysql_error());
   }
   if (isset($_POST['page_position'])){
        $page_position = $_POST['page_position'];
  } 
  else {
        $page_position = 0;
  }
  $offset = 5 * $page_position;
 $item_per_page = 5;

  
   mysql_select_db('shraddha');
   $result1 = mysql_query("SELECT * FROM product_mobile",$conn );
   $num_rows = mysql_num_rows($result1);
   $num_rows = ceil($num_rows/5);
   
   $sql1="SELECT * FROM product_mobile ORDER BY id  LIMIT  $item_per_page OFFSET $offset " ;
  
   $retval = mysql_query($sql1,$conn);
    $arr= array();

    while($row = mysql_fetch_assoc($retval))
    {
      $arr[]=$row;
    }
    
    $output = array( 
            "data1" =>$arr,
            
            
            "num_rows" => $num_rows
           
            
            );
//    $output = '{"data1":[';
//     while($row = mysql_fetch_assoc($retval)) {
//     if ($output != '{"data1":[') 
//       {$output .= ",";}
//     $output .= '{"Product_name":"'  . $row["Product_name"] . '",';
//     $output .= '"price":"'   . $row["price"]. '",';
//     $output .= '"image":"'   . $row["image"]. '"}';
    
// }
// $output .='],"num_row":"'.$num_rows.'"}';
echo json_encode($output);
//echo $output();
?>


   







