<?php
if(isset($_POST["submit"]))
{

    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $contact=$_POST['contact'];
    $event=$_POST['event'];
    $eventType=$_POST['type'];
    $email=$_POST['email'];
    $date=$_POST['date'];
    $details=$_POST['details'];
    $subject="Registration Confirmed";
    $sub2="Copy of Registration";
    $redirect="";
    switch($event){
        case 'Themed Decorations':
            $redirect="themedDecorations.html";
            break;
        case 'Balloon Decorations':
            $redirect="balloonDecorations.html";
            break;
        case "Lighting Decorations":
            $redirect="lightingDecorations.html";
            break;
        case 'Home wedding Decorations':
            $redirect="homeWeddings.html";
            break;
    }
    $message="<h4>Dear ".$lname."</h4><br>".
             "<p> We ,Laetatio Event, are pleased that you have chosen us to be a part of your celebration.We will make sure that event will be a unforgettable one .This mail is to confirm your booking below are the details that you provided .<p>"
             ."<p><b>Name :</b>".$fname." ".$lname."</p>"
             ."<p><b>Mobile :</b>".$contact."</p>"
             ."<p><b>Event :</b>".$event."</p>"
             ."<p><b>Event Type :</b>".$eventType."</p>"
             ."<p><b>Date of Event :</b>".$date."</p>"
             ."<p></b>Details About the event :</b>".$details."</p>";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From:dcoolmufa@gmail.com' . "\r\n";
    $headers .= 'Cc:dcoolmufa@gmail.com' . "\r\n";
             
    if(mail($email,$subject,$message,$headers))
    {
        echo $message;
        //header("location:index.html?splash");
    }         
    else{

    }

    
}
