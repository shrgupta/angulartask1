
<?php
$dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = '';
   $conn = mysql_connect($dbhost, $dbuser, $dbpass);
   if(! $conn )
   {
      die('Could not enter data: ' . mysql_error());
   }
   
  
   mysql_select_db('shraddha');
   $sql1="SELECT * FROM product_mobile" ;
  
   $retval = mysql_query( $sql1, $conn );
   
   if(! $retval )
   {
      die('Could not enter data: ' . mysql_error());
   }
   //$output =array();
   while($row1=mysql_fetch_array($retval))
{  
    
     $output[]=$row1;
    
  
}
echo json_encode($output);

?>




   







