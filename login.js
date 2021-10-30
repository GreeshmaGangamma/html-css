function validation(){
	var input_text = document.getElementById("input_text").value;
	var input_password = document.getElementById("input_password").value;
    if(input_text=""){
        alert("Username not entered");
        return false;
    }
    if(input_password=""){
        alert("Password not entered");
        return false;
    }
    if((input_text="admin")&& (input_password="admin123"))
    {
        alert("login successfull");
        return false;
    }
	
}

