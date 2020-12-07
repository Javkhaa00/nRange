<?php 

namespace App\Functions;

class MainEntity{

	protected $em;

	public function __construct($em){
		$this->em = $em;
	}	

}

