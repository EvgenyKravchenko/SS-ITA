<?php 

require_once 'sorter.php';
/**
* Controller
*/
class Controller
{
  public function Starter()
  {
    $sorter = new Sorter();
    
    $start_time = microtime(true);
    $sorter->BubbleSort();
    $time_bubble_sort = round(microtime(true) - $start_time);

    $start_time = microtime(true);
    $sorter->GnomeSort();
    $time_gnome_sort = round(microtime(true) - $start_time);

    $start_time = microtime(true);
    $sorter->ObjectBubbleSort();
    $time_obj_bubble_sort = round(microtime(true) - $start_time);

    $start_time = microtime(true);
    $sorter->ObjectGnomeSort();
    $time_obj_gnome_sort = round(microtime(true) - $start_time);



    return array("bubble" => $time_bubble_sort, 
                  "gnome" => $time_gnome_sort,
                  "obj_bubble" => $time_obj_bubble_sort, 
                  "obj_gnome" => $time_obj_gnome_sort);
 
    


  }
}


?>