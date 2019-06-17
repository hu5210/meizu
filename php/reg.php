<?php
include "conn.php";
if(isset($_POST['xinming'])){
    $name=$_POST["xinming"];
    $result=mysql_query("select * from enter where usename='$name'");
    if(mysql_fetch_array($result)){
        echo true;
    }else{
        echo false;
    }
}
if(isset($_POST["submit"])){
    $use=$_POST["usename"];
    $pass=sha1($_POST["password"]);
    mysql_query("insert enter values(null,'$use','$pass',NOW())");
    header('location','http://localhost/meizu/src/login.html');
}