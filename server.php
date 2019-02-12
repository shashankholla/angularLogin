

<?php 

	session_start();
	
	
	$username = "";
	$password = "";
	$email    = "";
	$usernamePOST = "";
	$passwordPOST = "";
	$_SESSION['success'] = "";
	$errors = array(); 
	$postdata = file_get_contents("php://input");
	if(isset($postdata) && !empty($postdata))
{
  
  $request = json_decode( $postdata, true);
	
	$usernamePOST = $request["data"][0]["username"];
	$passwordPOST = $request["data"][0]["password"];
	
}
$db = mysqli_connect('localhost', 'root', 'shashank', 'registration');
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
				echo "YES";
				$_SESSION['username'] = $username;
				
			}else {
				echo "NO";
				array_push($errors, "Wrong username/password combination");
			}
		}
	

?>