<?php
header('content-type:text/html;charset=utf-8');//设置字符编码。u    
define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD','');
$conn=@mysql_connect(HOST,USERNAME,PASSWORD);//@:容错。
if(!$conn){
    die('数据库连接错误：'.mysql_error());
}

mysql_select_db('meizu');//链接数据库
mysql_query('SET NAMES UTF8');//设置字符集。