<?php
$ogrenciNo = "b161210012";
$dogruEmail = $ogrenciNo . "@sakarya.edu.tr";
$dogruSifre = $ogrenciNo;

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $gelenEmail = $_POST["ad"];
    $gelenSifre = $_POST["parola"];

    if (empty($gelenEmail || empty($gelenSifre))) {
        echo "ALanlar Boş Bırakılamaz!!";
        header("refresh:2; url=../login.html");
    }

    elseif ($gelenEmail == $dogruEmail && $gelenSifre == $dogruSifre) {
        echo "Hoşgeldiniz " . $ogrenciNo;
        echo "<br><br>";
        echo "<a href='../Iletisim.html' class='btn btn-info fw-bold text-white'>Geri Dön</a>";
    }

    else {
        echo "Hatalı kullancı adı veya şifre girdiniz!!";
        header("refresh:2; url=../login.html");
    }
}

?>