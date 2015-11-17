<?php
	if (!isset($_POST["KEY"]) || !isset($_POST["METHOD"]))
	{
		echo json_encode("Invalid Call API");
		return;
	}

	class Status 
	{
		public $main_label;
		public $main_url = "main_some_url.html";
		public $left_label;
		public $left_value;
		public $right_label;
		public $right_value; 
		public $right_url = "right_some_url.html";
		public $button_enabled;
	}

	$main_labels = array("Extensions", "Phone Numbers", "Ring Groups", 
						"Schedules", "Auto Attendants", "Directories", 
						"Devices", "Inbound");
	$left_labels = array("Active", "Deactive");
	$right_labels = array("Quick Add", "Nomal Add");

	$result = array();
	for($i=0; $i<8; $i++)
	{
		$item = new Status();
		$item->main_label = $main_labels[$i];
		$item->left_label = $left_labels[rand(0, 1)];
		$item->right_label = $right_labels[rand(0, 1)];
		$item->left_value = rand(0, 9);
		$item->right_value = rand(0, 9);
		$item->button_enabled = rand(0, 1);
		
		$result[] = $item;
	}
	
	echo json_encode($result);
?>