<?php
	
	class Status 
	{
		public $key = "12345678";
		public $method = "GET_ICONS";
		public $iconset = "TEST_PAGE";
		public $active;
	}
	$data = new Status();
	$data->active = array (
		rand(1, 10), 
		rand(1, 10), 
		rand(1, 10), 
		rand(1, 10), 
		rand(1, 10), 
		rand(1, 10), 
		rand(1, 10), 
		rand(1, 10)
	);
	
	echo json_encode($data);
?>