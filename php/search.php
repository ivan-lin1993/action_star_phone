<?php
	require_once "config.php";
	
	$mysqli=conn();
	$keyword=mysqli_escape_string($mysqli,$_GET["keyword"]);
	$sql=
		"SELECT DISTINCT c.id as id,d.name as depart_name,c.title,c.name,c.phone,c.phoneid,c.email,c.business,c.photoUrl 
		FROM contact c
		LEFT JOIN 
		department d ON d.id=c.department_id
		WHERE 
		c.name LIKE '%$keyword%' 
		OR 
		c.title LIKE '%$keyword%'
		OR 
		c.business LIKE '%$keyword%';";
	$result=mysqli_query($mysqli,$sql);

	if(mysqli_num_rows($result)!==0){
		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			$row["business"]=nl2br($row["business"]);
			$rows[]=$row;
		}
		echo json_encode($rows,JSON_UNESCAPED_UNICODE);
	}
	
	
?>