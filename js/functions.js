function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('message').appendChild(div);
}

function clearMessages(){
	document.getElementById('message').innerHTML = '';
}