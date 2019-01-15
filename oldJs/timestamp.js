function searchTimeS(outId){
	var out = "";
	var json = JSONFILE;
	for (var data in json.actions[0].result.items){
		if(json.actions[0].result.items[data].text == word){
			console.log(data);
			var current = json.actions[0].result.items[data];
			var precedent = "[Begin of File]";
			if(data > 1){
				precedent = json.actions[0].result.items[data-1];
			}
			var next = "[End of File]";
			if(parseInt(data, 10) < json.actions[0].result.items.length){
				next = json.actions[0].result.items[parseInt(data, 10) + 1];
			}
			var line = "<p onclick='jump("+current.start_time_offset+")'>"+precedent.text+" "+current.text+ " " + next.text+"</p>";
			out += line;
		}
	}
	document.getElementById(+outId+).innerHTML = out;
}

function jump(playerId, valueId){
	
	var value = document.getElementById(+valueId+).value;
	var player = document.getElementById(+playerId+);
	
	player.currentTime = value
}