<?php

namespace App\Main;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class MainController extends AbstractController {

	protected $em;
	protected $e;

	public function setEm($em){
		$this->em = $em;
	}

	public function setE($e){
		$this->e = $e;
	}
	
}