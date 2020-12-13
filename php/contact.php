<?php
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $password = $_REQUEST['password'];
    $massege = $_REQUEST['massege'];

    if(empty($name) || empty($email) || empty($password) empty($massege))
    {
        echo "please fill all the fields";
    }
    else{
        mail("mahmmudhossines@gmail.com", "webside massege", $massege, "from: $name <$email>");
        echo "<script type='text/javascript'>alert('your massege send successfully');
        window.history.log(-1);
        </script>"
    }
?>