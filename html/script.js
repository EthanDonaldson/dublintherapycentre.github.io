function validateForm() {
	var name= document.myForm.name.value;
	var email= document.myForm.email.value;
	var message= document.myForm.message.value;
	var all=true;
	
	if (name == ""){
		printError("nerror", "Please enter name");
		all=false;
	}
	
	if (name != ""){
		printError("nerror", "");
	}
	if (email == "") {
        printError("eerror", "Please Enter email");
        all = false;
    }
	
    if (email) {
        if (!validateEmail(email)) {
            printError("eerror", "Please enter valid email");
            all = false;
        } 
		
		else {
            printError("eerror", "");

        }
    }
	
	if (message == ""){
		printError("merror", "Please enter a message");
		all=false;
	}
	
	if (name != ""){
		printError("merror", "");
	}
	
	if(all === true)
    {
        return true;
    }
    return false;
}		
		
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}













	