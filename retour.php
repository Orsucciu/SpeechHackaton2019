<?php
$titreVideo = "Ceci est un titre de vidéo";
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Form with W3.CSS Template</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="bootstrap/css/indexcss.css" rel="stylesheet">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma">
        <script type="text/javascript" src="bootstrap//js/indexjs.js"></script>
    </head>
    <body>        
        <div class="container retour">
            <div class="titre">
                <label class="titre_label" for="titre">Audio converter</label>
            </div>
            <form name="f2" method="post" action="donnee.php" class="w3-container form_retour">
                <div class="formulaire_retour">
                    <div class="affichage">
                        <div class="titre_video">
                            <label class="titre_video" ><?php echo $titreVideo; ?></label>
                        </div>
                        <div class="miniature">
                            <div class="col-md-8">
                                <div class="vid">
                                    <iframe width="350" height="200" src="https://www.youtube.com/embed/ac7KhViaVqc" allowfullscreen=""></iframe>
                                </div><!--./vid -->                                    
                            </div><!--.col -->
                        </div>
                        <div class="affichage_texte">
                            <div class="lbl_recherche_mot">
                                <label class="label_recherche_mot">Transcription de l'audio en texte :</label>
                            </div>
                            <div class="affichage_zone_texte">
                                <input type="text" class="zone_text">
                            </div>                            
                        </div>
                    </div>
                    <div class="recherche">   
                        <div class="section1">
                            <div class="section_recherche_mot">
                                <div class="recherche_mot">
                                    <input type="text" class="zone_rech_mot">
                                </div>
                                <div class="bouton_recherche">
                                    <button id="submit" name="submit" type="submit" class="btn btn-success btn_recherche">Rechercher</button>
                                </div>
                            </div>                            
                        </div>
                        <div class="section2">
                            <div class="section_affichage_mot">
                                <div class="nb_occurences">
                                    nb occurences
                                </div>
                                <div class="temps">
                                    <!-- <textarea class="affichage_temps" name="affichage_temps" rows="5" cols="33"></textarea> -->
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                </div>                   
            </form>
        </div>
    </body>