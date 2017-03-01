<?php
	require_once "config.php";
	
	$mysqli=conn();
	$did=mysqli_escape_string($mysqli,$_GET["did"]);
	$sql="SELECT c.id as id, d.name as depart_name,c.title,c.name,c.phone,c.phoneid,c.email,c.photoUrl FROM contact c LEFT JOIN department d ON d.id=c.department_id WHERE c.department_id=$did;";
	$result=mysqli_query($mysqli,$sql);
	if(mysqli_num_rows($result)!==0){
		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			$rows[]=$row;
		}
		echo json_encode($rows,JSON_UNESCAPED_UNICODE);
	}
?>