<?php
	// Database connection
	$con = mysqli_connect('localhost','root','','db_email');

	$txtEmail = $_POST['email'];
	
	
	$sql = "INSERT INTO `tbl_mailisting` (`Id`, `fldEmail`) VALUES ('0','$txtEmail')";

	// insert in database 
	if(!empty($_POST['email'])){
		$rs = mysqli_query($con, $sql);
		if($rs)
		{
			echo "Contact Records Inserted";
		}
		else{
			echo "All fields are required!";
		}
	}
?>