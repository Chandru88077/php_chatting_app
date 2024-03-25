<?php

    $conn = mysqli_connect("localhost","root","","chat");
    if(!$conn){
        echo "Detabase Connected". mysqli_connect_error();
    }
?>