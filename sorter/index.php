<?php 
ini_set('max_execution_time', '0');
require_once "controller.php";

$controller = new Controller();
$times = $controller->Starter();

?>
<!doctype html>
<html>
<head>
  <title>Sorter</title>
  <meta charset="utf-8" />
</head>
<body>
  <h1>Welcome to Sorter!</h1>
  <table>
    <thead>
      <th>Type of sorting</th>
      <th>Proc sort</th>
      <th>OOP sort</th>
    </thead>
    <tbody>
      <tr>
        <td>Bubble Sort</td>
        <td><?= $times["bubble"] . " сек." ?></td>
        <td><?= $times["obj_bubble"] . " сек." ?></td>
      </tr>
      <tr>
        <td>Gnome Sort</td>
        <td><?= $times["gnome"] . " сек."?></td>
        <td><?= $times["obj_gnome"] . " сек." ?></td>
      </tr>
    </tbody>
  </table>
</body>
</html>
