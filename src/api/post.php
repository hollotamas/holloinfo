<?php
  require("connect.php");

  $sql = "SELECT posts.ID AS ID, datum, cim, tartalom, posttipus.megnev AS posttipus, kategoriak.megnev AS kategoria, program.megnev AS program, posts.erettsegidatuma AS erettsegiDatuma
          FROM posts
          INNER JOIN posttipus ON posts.posttipus = posttipus.id
          INNER JOIN kategoriak ON posts.postkategoria = kategoriak.id
          INNER JOIN program ON posttipus.program = program.id
          ";

  //echo "<div>$sql</div>";
  $result = $link->query($sql);
  $posts = array();
  if ($result->num_rows != 0) {
    $i = 0;
    while ($_result = $result->fetch_assoc()) {
      $post = array('ID'=>$_result['ID'], 'datum'=>$_result['datum'],
                    'cim'=>$_result['cim'], 'tartalom'=>$_result['tartalom'],
                    'posttipus'=>$_result['posttipus'], $_result['kategoria'],
                    'program'=>$_result['program'], 'erettsegiDatuma'=>$_result['erettsegiDatuma']);
      $posts[$i] = $post;
      $i++;
    }
    echo json_encode($posts);
  }  else {
    echo json_encode("false");
  }
mysqli_close($link);
 ?>
