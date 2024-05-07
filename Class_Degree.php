<?php
include "DB_Connection.php";

class Degree {
    private $ID;
    private $name;

    __construct($_ID, $_name){
        $this->ID = $_ID;
        $this->name = $_name;
    }

    public getID(){
        return $this->ID;
    }

    public getName(){
        return $this->name;
    }

    public setName($_name){
        $this->name = $_name;
    }
}

?>