function validation(){
	var input_text = document.getElementById("input_text").value;
	var input_password = document.getElementById("input_password").value;
    if(input_text=="" || input_password==""){
        alert("Please enter all the details");
        return false;
    }

function myfunction(){
    var input_text = document.getElementById("input_text").value;
	var input_password = document.getElementById("input_password").value;
    if((input_text=="ad1234")&& (input_password=="admin123"))
    {
        alert("login successful");
        return false;
    }
    else{
        alert("Invalid details");
        return false;
    }
}
}
