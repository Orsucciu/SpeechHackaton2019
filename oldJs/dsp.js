function processAudio(){
	const audioFile = window.URL.createObjectURL(document.getElementById('fichier').files[0]); //getting the input file
				
	var audioTag = document.createElement('div');
	audioTag.innerHTML = "<p>This is the original file</p><audio controls><source src='"+ audioFile +"' type='audio/ogg'>'"+audioFile+"'</audio><p>This is the altered file</p><audio crossOrigin='anonymous' controls id='alteredAudio'><source src='"+ audioFile +"' type='audio/ogg'>'"+audioFile+"'</audio>";
	var audioSpace = document.getElementById("audio_space");
	audioSpace.appendChild(audioTag);
	
	//Audio processing logic
	var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	var player = document.getElementById("alteredAudio");
	
	var mediaElement = player;

	var gainNode = audioCtx.createGain();
	var lowpass = audioCtx.createBiquadFilter();
	var highpass = audioCtx.createBiquadFilter();

	source = audioCtx.createMediaElementSource(mediaElement);
	source.connect(lowpass);
	lowpass.connect(highpass);
	highpass.connect(gainNode);
	gainNode.connect(audioCtx.destination);

	lowpass.type = "highpass";
	lowpass.frequency.value = 500;
	lowpass.gain.value = -1;
	highpass.type = "lowpass";
	highpass.frequency.value = 5000;
	highpass.gain.value = -1;
	
}