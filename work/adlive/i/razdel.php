<?
Header("Content-type: image/jpeg");
$dr="razdel";
$name="$dr/".rand(1,4).".jpg";
$im=imagecreatefromjpeg($name);
imagejpeg($im,null,80);
imagedestroy($im);
?>