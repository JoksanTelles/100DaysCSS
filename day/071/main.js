function printContent(id,content) {
	const theButton = document.getElementById(id);
	const theContent = content;
	
	theButton.addEventListener( "click", () => {
		document.getElementById("print").innerHTML = theContent;
	});
	
	return;
}

// Yep, this looks ugly :)
printContent("a","•-");
printContent("b","-•••");
printContent("c","-•-•");
printContent("d","-••");
printContent("e","•");
printContent("f","••-•");
printContent("g","--•");
printContent("h","••••");
printContent("i","••");
printContent("j","•---");
printContent("k","-•-");
printContent("l","•-••");
printContent("m","--");
printContent("n","-•");
printContent("o","---");
printContent("p","•--•");
printContent("q","--•-");
printContent("r","•-•");
printContent("s","•••");
printContent("t","-");
printContent("u","••-");
printContent("v","•••-");
printContent("w","•--");
printContent("x","-••-");
printContent("y","-•--");
printContent("z","--••");

