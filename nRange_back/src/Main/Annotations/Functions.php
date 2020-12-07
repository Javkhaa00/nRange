<?php 
namespace App\Main\Annotations;

/**
 * @Annotations
 */

class Functions {
    private $m; //mandatory
    public function __construct($options){
        $this->m = $options["value"];
    }
    public function getM(){
        return $this->m;
    }

}