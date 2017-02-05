<?php
function conn(){
	// ³sµ²¸ê®Æ®w
	$dbhost = "localhost"; //¸ê®Æ®wºô§}©ÎIP
	$dbusername = "root"; //¸ê®Æ®w±b¸¹
	$dbuserpassword = "321478965"; //¸ê®Æ®w±K½X
	$dbname="actionstar";
	$connection = mysqli_connect($dbhost, $dbusername, $dbuserpassword,$dbname) or die("µLªk³sµ²¸ê®Æ®w¨t²Î¡I");
	$connection->query("SET NAMES 'utf-8'");
	return $connection;
}
?>