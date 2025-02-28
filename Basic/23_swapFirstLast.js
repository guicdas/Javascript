function swapFirstLast(){
	let stringInput = document.getElementById("stringInput").value;
	
	if (stringInput.length === 0)
		document.getElementById("stringSwapped_output").textContent = "String is empty :(";
	else{
		let stringOutput = stringInput[stringInput.length - 1] + stringInput.substring(1, stringInput.length - 1) + stringInput[0]
		document.getElementById("stringSwapped_output").textContent = stringOutput;
	}
}