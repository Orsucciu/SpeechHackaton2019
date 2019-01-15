

<?php

	// Complétez $url avec l'url cible (l'url de la page que vous voulez télécharger)
	//$url="https://api.havenondemand.com/1/api/async/recognizespeech/v2?url=https%3A%2F%2Fwww.havenondemand.com%2Fsample-content%2Fvideos%2Fhpnext.mp4&language_model=en-us&apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7"; 
 
// Tableau contenant les options de téléchargement
/*$options=array(
      CURLOPT_URL            => $url,  // Url cible (l'url la page que vous voulez télécharger)
      CURLOPT_RETURNTRANSFER => true,  // Retourner le contenu téléchargé dans une chaine (au lieu de l'afficher directement)
      CURLOPT_HEADER         => false, // Ne pas inclure l'entête de réponse du serveur dans la chaine retournée
      CURLOPT_FAILONERROR    => true   // Gestion des codes d'erreur HTTP supérieurs ou égaux à 400
);*/
 
////////// MAIN
 
// Création d'un nouvelle ressource cURL
/*$CURL=curl_init();
      // Configuration des options de téléchargement
      curl_setopt_array($CURL,$options);
		curl_setopt($CURL, CURLOPT_SSLVERSION, 4);
		curl_setopt($CURL, CURLOPT_SSL_VERIFYHOST, 0);
		curl_setopt($CURL, CURLOPT_SSL_VERIFYPEER, 0);
      // Exécution de la requête
      $content=curl_exec($CURL);       // Le contenu téléchargé est enregistré dans la variable $content. Libre à vous de l'afficher.
 
      // Si il s'est produit une erreur lors du téléchargement
      if(curl_errno($CURL)){
            // Le message d'erreur correspondant est affiché
            echo "ERREUR curl_exec : ".curl_error($CURL);
      }
 
// Fermeture de la session cURL
curl_close($CURL);*/
/*
	$curl = curl_init('https://api.havenondemand.com/1/api/async/recognizespeech/v2?url=https%3A%2F%2Fwww.havenondemand.com%2Fsample-content%2Fvideos%2Fhpnext.mp4&language_model=en-us&apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7');
	
	echo curl_getinfo($curl);
	echo $curl;
	$result = curl_exec($curl);
	echo "yo: "+$result;*/
	/*$curl = curl_init();
	curl_setopt ($curl, CURLOPT_PORT , 8089);
	echo $curl;
	curl_setopt_array($curl,
		array(
		CURLOPT_URL => 'https://api.havenondemand.com/1/api/async/recognizespeech/v2?url=https%3A%2F%2Fwww.havenondemand.com%2Fsample-content%2Fvideos%2Fhpnext.mp4&language_model=en-us&apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7',
		CURLOPT_RETURNTRANSFER => 1  #the data is returned as a string instead
	));
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
	curl_setopt($curl, CURLOPT_SSLVERSION,3);
	print_r($curl);
	$result = curl_exec($curl);
	print_r(curl_getinfo($curl)); # tu as un problème de cross request (surement)
	curl_close($curl);
	echo "</BR>yo: ";
	echo $result;
	print_r($result);*/

	/* key test : 3293a469-23c9-4170-baf1-170fbae5b8b7
	
	URL:
	curl "https://api.havenondemand.com/1/api/async/recognizespeech/v2?url=https%3A%2F%2Fwww.havenondemand.com%2Fsample-content%2Fvideos%2Fhpnext.mp4&language_model=en-us&apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7"
	curl https://api.havenondemand.com/1/job/status/JOBID?apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7
	
	local:
	curl -X POST --form "file=@Macron.mp3" --form "language_model=fr-fr" --form "apikey=3293curl https://api.havenondemand.com/1/job/status/w-eu_e4db13e9-62d1-409d-935b-53b1202faa4b?apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7a469-23c9-4170-baf1-170fbae5b8b7" https://api.havenondemand.com/1/api/async/recognizespeech/v2
	curl https://api.havenondemand.com/1/job/status/JOBID?apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7 */
	

