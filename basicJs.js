var exploitVar = false;
var keyLoggingVar = false;
var emailVar = false;
let request = new XMLHttpRequest();

function exploit(){
	if(exploitVar){
		document.getElementById("exploit").innerHTML = "Start Remote Phishing!";
	}
	else{
		document.getElementById("exploit").innerHTML = "Stop Remote Phishing!";
	}
	exploitVar= !exploitVar;
	request.open("GET", "http://localhost:8080/api/v1/setExploit");
	request.send();
}

function keyLogging(){
	if(keyLoggingVar){
		document.getElementById("keyLogging").innerHTML = "Start Key Logging!";
	}
	else{
		document.getElementById("keyLogging").innerHTML = "Stop Key Logging!";
	}
	keyLoggingVar= !keyLoggingVar;
	request.open("GET", "http://localhost:8080/api/v1/setKeyLogging");
	request.send();
}

function email(){
	if(emailVar){
		document.getElementById("email").innerHTML = "Send a email of log every minute";
	}
	else{
		document.getElementById("email").innerHTML = "Stop email";
	}
	emailVar= !emailVar;
	request.open("GET", "http://localhost:8080/api/v1/setEmail");
	request.send();
}
