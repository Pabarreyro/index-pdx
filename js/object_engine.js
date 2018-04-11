// Parameter csv is the CSV file with headers
function csvJSON(csv){

  let lines = csv.split("\n");

  let result = [];

  let headers= lines[0].split(",");

  for(let i=1;i<lines.length;i++){

	  let obj = {};
	  let currentline=lines[i].split(",");

	  for(let j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}

function readFile(evt) {
  let parsed = csvJSON(evt.target.result);
  console.log(parsed);
  return parsed;
}

// User Logic

window.onload = function() {
	var fileInput = document.getElementById('fileInput');
	var fileDisplayArea = document.getElementById('fileDisplayArea');

	fileInput.addEventListener('change', function(e) {
		var file = fileInput.files[0];
		var textType = /text.*/;

		if (file.type.match(textType)) {
			var reader = new FileReader();

			reader.onload = function(e) {
				fileDisplayArea.innerText = reader.result;
			}

      readFile(reader.readAsText(file));

      // let parsedFile = csvJSON(takenFile);
      // console.log(parsedFile);
		} else {
			fileDisplayArea.innerText = "File not supported!"
		}
	});
}
