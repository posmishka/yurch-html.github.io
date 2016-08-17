<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>


<?php
if(!empty($_POST['telephone'] ))
if(!empty($_POST['mas'] ))
{
$to = "почта@.ru";
$from = 'почта@.ru';
$subject = "Проверка почты";
$message = 'Имя: '.$_POST['name'].'; Email: '.$_POST['telephone'].'; mas: '.$_POST['mas'].';';
$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: <почта@.ru>\r\n";
$result = mail($to, $subject, $message, $headers);

    if ($result){ 
        echo "<div class='test'><div class='test2'><p class='orle11'>Cообщение успешно отправленно.В ближайшее время мы пришлем Вам ответ. </p><div><br></div>";
    }
    else{
        echo "<p class='orle'>Cообщение не отправленно. Пожалуйста, попрбуйте еще раз</p><br>";
    }
}
else {
echo "<p class='orle'>Обязательные поля не заполнены. </p><br>";
}
?>

</body>
</html>