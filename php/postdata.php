<?php
header('content-type:text/html;charset=utf-8');
header("Access-Control-Allow-Origin: *");
    require "conn.php";//引入conn.php文件。
    $result=mysql_query("select * from togo");//查找数据库所有的数据
    $arr=array();
    for($i=0;$i<mysql_num_rows($result);$i++){
       $arr[$i] = mysql_fetch_array($result,MYSQL_ASSOC);
    }
    echo json_encode($arr);