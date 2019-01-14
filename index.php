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
        <div class="container">
            <div class="titre">
                <label class="titre_label" for="titre">Audio converter</label>
            </div>
            <form name="f2" method="post" action="donnee.php" class="w3-container">
                <div class="formulaire">
                    <div class="information">
                        <label class="information">Vous pouvez convertir un audio en texte à partir d'un lien youtube, 
                            ou en téléversant votre fichier audio.
                        </label>
                    </div>
                    <div class="upload">
                        <div class="video_url_container">
                            <div class="video_url">
                                <label for='url'>URL:</label>
                                <div class="barre_url">
                                    <input class="url" type="text" name="url" id='url'/></p>
                                </div>
                            </div>
                        </div>
                        <div class="fichier_audio_container">
                            <div class="fichier_audio">
                                <label>Fichier:</label>
                                <!-- image-preview-filename input [CUT FROM HERE]-->
                                <div class="input-group image-preview">
                                    <input type="text" class="form-control image-preview-filename" disabled="disabled"> <!-- don't give a name === doesn't send on POST/GET -->
                                    <span class="input-group-btn">
                                        <!-- image-preview-clear button -->
                                        <button type="button" class="btn btn-default image-preview-clear" style="display:none;">
                                            <span class="glyphicon glyphicon-remove"></span> Clear
                                        </button>
                                        <!-- image-preview-input -->
                                        <div class="btn btn-default image-preview-input">
                                            <span class="glyphicon glyphicon-folder-open"></span>
                                            <span class="image-preview-input-title">Browse</span>
                                            <input type="file" accept="image/png, image/jpeg, image/gif" name="input-file-preview"/> <!-- rename it -->
                                        </div>
                                    </span>
                                </div><!-- /input-group image-preview [TO HERE]--> 
                            </div>                        
                        </div>
                        <div class="bouton">
                            <button id="submit" name="submit" type="submit" class="btn btn-success">Envoyer</button>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>

        <script type="text/javascript">

        </script>
    </body>
</html>