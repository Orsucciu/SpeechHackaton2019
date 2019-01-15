function conditionalInput(){
	if(document.getElementById("url").value==""){
    	document.getElementById("fichier").disabled=false;
    }else{
    	document.getElementById("fichier").disabled=true;
    }
    if(document.getElementById("fichier").value==""){
    	document.getElementById("url").disabled=false;
    }else{
    	document.getElementById("url").disabled=true;
    }
}