<?php
include "conn.php";
//获取用户名和密码和数据库进行匹配
if(isset($_POST['ues']) && isset($_POST['pass'])){
    $ues=$_POST['ues'];
    $pass=sha1($_POST['pass']);//加密进行匹配
    $result=mysql_query("select * from  enter where usename='$ues' and password='$pass'");
    if(mysql_fetch_array($result)){
        echo true;//用户名和密码正确的
    }else{
        echo false;
    }
} 