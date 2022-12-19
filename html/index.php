<?php
if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $topic = $_POST['topic'];
    $name = $_POST['name'];
    $message = $_POST['message'];

    chdir("comments");
    $counter = 1;
    $filename = "/wamp64/www/html/comments/$counter.txt";
    while (file_exists($filename)) {
        $counter++;
        $filename = "/wamp64/www/html/comments/$counter.txt";
    }
    $newFile = fopen("$counter.txt","w") or die ("Can't open file.");
    $txt = $name."\n".$email."\n".$topic."\n".$message;
    fwrite($newFile, $txt);
    fclose($newFile);

}


