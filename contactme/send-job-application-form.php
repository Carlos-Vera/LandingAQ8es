<?php

// Init the Custom Configs
require_once 'configs.php';

// Custom Configs Overrides
// Put here some configs to override, this is useful if different configs are needed in a page with multiple different forms
// Example: $configs['recaptcha_enabled'] = false;

// Form fields array
// Here there are all the form fields ordered. One field for each line. You can simply add/edit one or more lines to make this definition equal to the html form code.
$fields = array();
$fields[] = array('name' => 'files',		'display_name' => 'Upload file',        'type' => 'file',          	'required' => true);
$fields[] = array('name' => 'name',			'display_name' => 'Name',               'type' => 'text',          	'required' => true);
$fields[] = array('name' => 'surname',		'display_name' => 'Surname',            'type' => 'text',          	'required' => true);
$fields[] = array('name' => 'email',		'display_name' => 'Email',              'type' => 'email',         	'required' => true,        'is_user_email' => true);
$fields[] = array('name' => 'phone',		'display_name' => 'Phone',              'type' => 'tel',           	'required' => true);
$fields[] = array('name' => 'linkedin',		'display_name' => 'LinkedIn account',   'type' => 'url',           	'required' => false);
$fields[] = array('name' => 'message',		'display_name' => 'Message',            'type' => 'textarea',      	'required' => true);
$fields[] = array('name' => 'privacy',		'display_name' => 'Privacy terms',		'type' => 'checkbox',		'required' => true);

// Init the functions
require_once 'functions.php';

// Start processing
require_once 'process-upload.php';

?>
