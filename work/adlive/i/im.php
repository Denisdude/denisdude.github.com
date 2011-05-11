<?
Header("Content-type: image/jpeg");
$dr="im";
$name="$dr/".rand(1,11).".jpg";
$im=imagecreatefromjpeg($name);
imagejpeg($im,null,80);
imagedestroy($im);
?>