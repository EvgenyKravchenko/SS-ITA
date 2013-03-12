<?php 

require_once 'isortable.php';

/**
* Class Simple Number
*/
class SimpleNumber implements ISortable
{
  public $digit;

  public function __construct ($argument)
  {
    $this->digit = $argument;
  }

  public function Compare (ISortable $object)
  {
    $result = 0;
    if ($this->digit > $object->digit) { $result = 1; }
    if ($this->digit < $object->digit) { $result = -1; }
    if ($this->digit == $object->digit) { $result = 0; }
    return $result;
  }

  public function Swap (ISortable $object)
  {
    $tmp = $object->digit;
    $object->digit = $this->digit;
    $this->digit = $tmp;
  }


}

?>