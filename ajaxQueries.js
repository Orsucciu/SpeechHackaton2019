var jobID;
var furl = "https://api.havenondemand.com/1/api/async/recognizespeech/v2?url=https%3A%2F%2Fwww.havenondemand.com%2Fsample-content%2Fvideos%2Fhpnext.mp4&language_model=en-us&apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7";
// TEST EN LOCAL: 'https://api.havenondemand.com/1/api/async/recognizespeech/v2?file=@MacronGJ&language_model=en-us&apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7'';
//'https://api.havenondemand.com/1/api/async/recognizespeech/v2?url=@MacronGJ&language_model=en-us&apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7';



// Recuperation du JobID -> URL
function getJobIdUrl() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	  jobID = this.responseText;
	  jobID = jobID.slice(16,jobID.length - 3);
	  console.log(jobID);
	  getJson();
    }
  };
  xhttp.open("POST", furl, true);
  xhttp.send();
}

// Recuperation du JSON
function getJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
	  reloadResponse(this.reponseText);
    }
  };
  var link = "https://api.havenondemand.com/1/job/result/" + jobID + "?apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7";
  xhttp.open("GET", link, true);
  xhttp.send();
}