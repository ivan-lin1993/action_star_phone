<?php
	require_once "config.php";
	
	$mysqli=conn();
	$keyword=mysqli_escape_string($mysqli,$_GET["keyword"]);
	$sql=
		"SELECT DISTINCT c.id as id,c.title,c.name,c.phone,c.phoneid,c.email,c.photoUrl 
		FROM contact c
		WHERE 
		c.name LIKE '%$keyword%' 
		OR 
		c.title LIKE '%$keyword%'
		OR 
		c.business LIKE '%$keyword%';";
	$result=mysqli_query($mysqli,$sql);

	if(mysqli_num_rows($result)!==0){
		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			$rows[]=$row;
		}
		echo json_encode($rows,JSON_UNESCAPED_UNICODE);
	}
	
	
?>