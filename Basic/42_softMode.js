function checkModes(mode){
	let numberList = document.getElementById("numberListInput").value;
	
	if (numberList.length === 0)
	{
		errorInList(mode);
		return ;
	}
	let numberArray = numberList.split(' ');
	numberArray = numberArray.filter(item => item != '');
	numberArray = numberArray.map(item => parseInt(item));

	if (numberArray.length >  1)
	{
		for (let i = 0; i < numberArray.length ; i++)
		{
			if (isNaN(numberArray[i]))
			{
				errorInList(mode);
				return ;
			}
		}
		checkMode(mode, numberArray);
	}
	else
		listIsInOrderMode(mode);
}

function checkMode(mode, numberArray){
	let arrayLength = numberArray.length;

	if (mode === "soft" || mode === "both")
	{
		if (numberArray[arrayLength - 1] < numberArray[arrayLength - 2])
			badOrder("soft");
		else
			goodOrder("soft");
	}
	if (mode === "hard" || mode === "both")
	{
		for (let i = 0 ; i < arrayLength ; i++)
			{
				if (i >= 1 && numberArray[i] < numberArray[i - 1])
				{
					badOrder("hard");
					return ;
				}
			}
		goodOrder("hard");
	}
}

function errorInList(mode){
	if (mode === "both")
	{
		errorOrder("soft");
		errorOrder("hard");
	}
	else
		errorOrder(mode);
}

function listIsInOrderMode(mode){
	if (mode === "both")
	{
		goodOrder("soft");
		goodOrder("hard");
	}
	else
		goodOrder(mode);
}

function goodOrder(mode){
	document.getElementById(mode + "_output").style.backgroundColor = "7FFFD4";
	document.getElementById(mode + "_output").textContent = "\u2705";
}

function badOrder(mode){
	document.getElementById(mode + "_output").style.backgroundColor = "7FFFD4";
	document.getElementById(mode + "_output").textContent = "\u274C";
}

function errorOrder(mode){
	document.getElementById(mode + "_output").style.backgroundColor = "333333";
	document.getElementById(mode + "_output").textContent = "Input Error \u2757";
}