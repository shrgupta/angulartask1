<?php

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_select_db('shraddha');
if (!$conn) {
    die('Could not connect: ' . mysql_error());
}



$requestData = json_decode($_REQUEST['data'], true);
$page = $requestData['page'];
$order = $requestData['order'];
$data =$requestData['filters'] ;




$filters= array();

$condition = '';
foreach ($data as $key => $value) {
  
   //if($){
  if($condition) {
    $condition .= 'AND';
     // print_r($value); 
  }
//}


   //print_r($condition); exit;
  if($key == 'range') {
    
    $rangeCondition = '';
    
        foreach($value as $key3 => $rangeData) {

          if($rangeData) {
          if($rangeCondition) {
            $rangeCondition .= 'OR';
          }
           $rangeCondition .= ' (price BETWEEN '.$key3.' AND '.$rangeData.')';
          // print_r($value); exit; 
        }
      }  
      if($rangeCondition) {
         //chop($rangeCondition,"AND");
       
       $condition .= ' ('.$rangeCondition .')';

     }
 
    // print_r($rangeCondition); 

  }
  if($key == 'brand')  {
     $brandCondition = '';
     foreach ($value as $key1 => $brand) { 

      if($brand) {
      if($brandCondition) {
        $brandCondition .= ' OR';
      }
        
      $brandCondition .= ' brand = "'.$key1.'"';
      //print_r($brandCondition); 

      } 
    }
        //echo chop($brandCondition,"AND");
    
      if($brandCondition) {
        
          
         
      $condition .=  ' ('.$brandCondition.') ';
      //print_r($condition); 
   }
  }
}
//}

$orderQuery = '';
if($order) {
  $orderQuery = ' ORDER BY price '.$order;
}
// echo '<pre>'; print_r($data);
// print_r($condition); exit();

$pageLimit = 5;


if($condition) {
  $condition = ' WHERE '.$condition;
}
$query = "SELECT * FROM product_mobile  ".$condition .' '. $orderQuery .' LIMIT '.($page)*$pageLimit .', '.($page+1)*$pageLimit;

$query2="SELECT * FROM product_mobile  ".$condition.' '. $orderQuery ;
$result1=mysql_query($query2, $conn);
$num_rows = mysql_num_rows($result1);


 $retval = mysql_query( $query, $conn );
$arr = array();
  while($row = mysql_fetch_assoc($retval))
    {
      $arr[]=$row;
    }

// echo '<pre>'; print_r($arr); 
// print_r($query); exit();

  $output = array( 
"data1" =>$arr,
"num_rows" => $num_rows
);
   
echo json_encode($output); 
   
?>