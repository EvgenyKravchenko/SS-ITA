<?php 

interface ISortable
{
  function Compare (ISortable $object);
  function Swap (ISortable $object);
}


?>