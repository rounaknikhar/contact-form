<link rel="stylesheet" href="../css/style.css">
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $contact = $_POST['contactNumber'];
    $addressInput1 = $_POST['addressInput1'];
    $addressInput2 = $_POST['addressInput2'];
    $town = $_POST['town'];
    $county = $_POST['county'];
    $postcode = $_POST['postcode'];
    $country = $_POST['countryInput'];
    $description = $_POST['description'];
    $fileSelect = $_FILES['fileSelect']['name']; 

            $to = $email; 
            $from = 'no-reply@rounaknikhar.com'; 
            $fromName = 'rounaknikhar.com';      
            $file = "cv.pdf"; 
            $to = $email;
            $subject = 'Your contact details from rounaknikhar.com';
            $htmlContent = '
            <html>
            <head>
            <title>Your contact details from rounaknikhar.com</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
            <style>
            body {
                font-family: "Roboto", sans-serif;
            }
        
            label {
                font-weight: bold;
            }
            
            @media screen and (max-width: 530px) {
                .article, p, h1, div {
                    padding:0;
                }
            }
            </style>
            </head>
            <body style="margin:0;padding:0;word-spacing:normal;background-color: rgb(251, 181, 64);">
            <div class="article-background" aria-roledescription="text" lang="en" style="background-color:rgb(251, 181, 64);">
            <h1 style="text-align:center; padding: 40px; margin:40px;">Your contact information</h1>
            <div class="article" style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#eaeaea; padding: 80px; margin-left:80px; margin-right:80px; margin-top:40px; margin-bottom:40px;">
                 
                <label>First Name</label>
                <p style="margin-top:0;margin-bottom:12px; background-color:#fff; padding:20px; width:auto; margin-top:5px;">'.$firstName.'</p><br />
                <label>Last Name</label>
                <p style="margin-top:0;margin-bottom:12px; background-color:#fff; padding:20px; width:auto; margin-top:5px;">'.$lastName.'</p><br />
                <label>Email Address</label>
                <p style="margin-top:0;margin-bottom:12px; background-color:#fff; padding:20px; width:auto; margin-top:5px;">'.$email.'</p><br />
                <label>Contact Number</label>
                <p style="margin-top:0;margin-bottom:12px; background-color:#fff; padding:20px; width:auto; margin-top:5px;">'.$contact.'</p><br />
                <label>Address</label>
                <p style="margin-top:0;margin-bottom:12px; background-color:#fff; padding:20px; width:auto; margin-top:5px;">'.$addressInput1.', '.$addressInput2.'<br>'.$town.', '.$county.'<br>'.$postcode.'<br>'.$country.'</p><br />
                <label>Description</label>
                <p style="margin-top:0;margin-bottom:12px; background-color:#fff; padding:20px; width:auto; margin-top:5px;">'.$description.'</p><br />
            </div>
            <p style="text-align:center; padding:40px;">rounaknikhar.com</p>
            </div>
            </body>
        
            </html>
            ';
            
            $headers = "From: $fromName"." <".$from.">"; 
            $semi_rand = md5(time());  
            $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";  
            $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
            $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" . 
            "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n";  
            
            if(!empty($file) > 0){ 
                if(is_file($file)){ 
                    $message .= "--{$mime_boundary}\n"; 
                    $fp =    @fopen($file,"rb"); 
                    $data =  @fread($fp,filesize($file)); 
            
                    @fclose($fp); 
                    $data = chunk_split(base64_encode($data)); 
                    $message .= "Content-Type: application/octet-stream; name=\"".basename($file)."\"\n" .  
                    "Content-Description: ".basename($file)."\n" . 
                    "Content-Disposition: attachment;\n" . " filename=\"".basename($file)."\"; size=".filesize($file).";\n" .  
                    "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n"; 
                } 
            } 
            $message .= "--{$mime_boundary}--"; 
            $returnpath = "-f" . $from; 
            
            if ($mail = @mail($to, $subject, $message, $headers, $returnpath))  {
                echo "Email successfully sent to ".$email;
                header( "refresh:5; url=http://rounaknikhar.com/RealResponseMedia/" );

            } else {
                echo $displayMsg = "Email wasn't sent!";
                header( "refresh:5; url=http://rounaknikhar.com/RealResponseMedia/" );
            }  
        } else {
            //do nothing
        }

    

?>