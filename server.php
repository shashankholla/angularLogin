

<?php 

	session_start();
	
	$namePOST = "";
	$username = "";
	$password = "";
	$emailPOST    = "";
	$usernamePOST = "";
	$passwordPOST = "";
	$cpasswordPOST = "";
	$_SESSION['success'] = "";
	$errors = array(); 
	$postdata = file_get_contents("php://input");
	if(isset($postdata) && !empty($postdata))
{
  
  $request = json_decode( $postdata, true);
	
	$whatThis = $request["data"]["process"];
	
	$usernamePOST = $request["data"]["username"];
	
	
	
}
$db = mysqli_connect('localhost', 'root', 'shashank', 'registration');
	
if($whatThis == "login"){
		$passwordPOST = $request["data"]["password"];
		$username = mysqli_real_escape_string($db, $usernamePOST);
		$password = mysqli_real_escape_string($db, $passwordPOST);
		
		if (empty($username)) {
			array_push($errors, "Username is required");
		}
		if (empty($password)) {
			array_push($errors, "Password is required");
		}

		if (count($errors) == 0) {
		
			$password = md5($password);
			$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
			$results = mysqli_query($db, $query);

			if (mysqli_num_rows($results) == 1) {
				$row = mysqli_fetch_array($results);
				$op_obj = (object) [
					'valid' => 'YES',
					'username' => $row['username'],
					'name' => $row['name']
				];

				echo json_encode($op_obj);

		
				
				$_SESSION['username'] = $username;
				
			}else {
				echo "NO";
				array_push($errors, "Wrong username/password combination");
			}
		}
	}

	if($whatThis == "register")
	
	{	
		$passwordPOST = $request["data"]["password"];
		$namePOST = $request["data"]["name"];
		$emailIdPOST = $request["data"]["emailId"];
		$cpasswordPOST = $request["data"]["cpassword"];
		if($cpasswordPOST == $passwordPOST)
		{
			$name = mysqli_real_escape_string($db, $namePOST);
			$username = mysqli_real_escape_string($db, $usernamePOST);
			$password = mysqli_real_escape_string($db, $passwordPOST);
			$cpassword = mysqli_real_escape_string($db, $cpasswordPOST);
			$emailId = mysqli_real_escape_string($db, $emailIdPOST);
			$query = "SELECT * FROM users WHERE username='$username'";
			$results = mysqli_query($db, $query);
			if(mysqli_num_rows($results) == 0)
			{	$md5_password = md5($password);
				$query = "INSERT INTO users (name, username, email, password) 
					  VALUES('$name','$username', '$emailId', '$md5_password')";
				mysqli_query($db, $query);
				echo "Account Created";
			}
			else{
				echo "Username Exists";
			}

		}
		else{
			echo "Passwords dont match";
		}
	}

	if($whatThis == "data")
	{	
		$username = mysqli_real_escape_string($db, $usernamePOST);
		$query = "SELECT * FROM data WHERE username='$username'";
		$results = mysqli_query($db, $query);
		$row = mysqli_fetch_array($results);

		$op_obj = (object) [
			'farmId' => $row['farmId'],
			'temp' => $row['temp'],
			'humidity' => $row['humidity'],
			'soilMoisture' => $row['soilMoisture'],
			'waterLevel' => $row['waterLevel'],
			'dateTime' => $row['dateTime']
		];

		echo json_encode($op_obj);




	}
	

?>