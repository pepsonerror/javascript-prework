function printMessage(idTag,msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById(idTag).appendChild(div);
}

function clearMessages(idTag){
	document.getElementById(idTag).innerHTML = '';
}