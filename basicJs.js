var exploitVar = false;
var keyLoggingVar = false;
var emailVar = false;
function exploit(){
	if(exploitVar){
		document.getElementById("exploit").innerHTML = "Start Remote Phishing!";
	}
	else{
		document.getElementById("exploit").innerHTML = "Stop Remote Phishing!";
	}
	exploitVar= !exploitVar;
}

function keyLogging(){
	if(keyLoggingVar){
		document.getElementById("keyLogging").innerHTML = "Start Key Logging!";
	}
	else{
		document.getElementById("keyLogging").innerHTML = "Stop Key Logging!";
	}
	keyLoggingVar= !keyLoggingVar;
}

function email(){
	if(emailVar){
		document.getElementById("email").innerHTML = "Send a email of log every minute";
	}
	else{
		document.getElementById("email").innerHTML = "Stop email";
	}
	emailVar= !emailVar;
}