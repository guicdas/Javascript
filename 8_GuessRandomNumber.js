function randomNumber(){
	let numberInput = document.getElementById("numberInput").value;

	if (isNaN(numberInput) || numberInput == "")
        document.getElementById("randNumber_output").textContent = "Error: NaN.";
	else if (numberInput == getRandomInt(10))
		document.getElementById("randNumber_output").textContent = "Good Work";
	else
	document.getElementById("randNumber_output").textContent = "Not Matched";
	console.log(numberInput);
	console.log(Math.floor(Math.random() * 10));
    
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}