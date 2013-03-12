<?php 


require_once 'simple_number.php';
/**
* Class Sorter, that implements two methods of sorting.
*/
class Sorter
{
  private $elements = 5000;
  private $max_element = 100;
  private $arr = array();
  private $array_objects;
  private $array_objects2;

  public function __construct()
  {
    $this->GenerateArray();
  }
  

  public function BubbleSort()
  {
    $arr = $this->arr;

    for ($i=0; $i < count($arr) - 1; $i++) { 
      for ($j=0; $j < count($arr) - 1; $j++) { 
        if ($arr[$j] > $arr[$j+1]) {
          $tmp = $arr[$j+1];
          $arr[$j+1] = $arr[$j];
          $arr[$j] = $tmp;
        }
      }
    }
    
  }

  public function GnomeSort()
  {
    
    $arr = $this->arr;

    for ($i = 1; $i < count($arr);) 
    { 
      if ($arr[$i-1] <= $arr[$i]) {
        $i++;
      } else { 
        $tmp = $arr[$i]; 
        $arr[$i] = $arr[$i-1]; 
        $arr[$i-1] = $tmp; 
        $i--; 
        if ($i == 0) {
          $i = 1;
        } 
      } 
    } 
    
  }
  

  public function ObjectBubbleSort()
  {
    $arr = $this->array_objects;
    
    for ($i=0; $i < count($arr) - 1; $i++) { 
      for ($j=0; $j < count($arr) - 1; $j++) { 
        if ($arr[$j]->Compare($arr[$j+1]) == 1) {
          $arr[$j]->Swap($arr[$j+1]);
        }
      }
    }
    
    

  }


  public function ObjectGnomeSort()
  {
    
    $arr = $this->array_objects2;

    for ($i = 1; $i < count($arr); ) 
    { 
      if ($arr[$i-1]->Compare($arr[$i]) <= 0 )  {      // меньше равно 
        $i++;
      } else { 
        $arr[$i-1]->Swap($arr[$i]);
        $i--; 
        if ($i == 0) {
          $i = 1;
        } 
      } 
    } 
    
  
  }
  


  private function GenerateArray()
  {
    for ($i=0; $i < $this->elements; $i++) { 
      $this->arr[$i] = mt_rand(0, $this->max_element);
    }

    foreach ($this->arr as $key => $value) {
      $this->array_objects[$key] = new SimpleNumber($value);
      $this->array_objects2[$key] = new SimpleNumber($value);
    }

  }
}


 
?>