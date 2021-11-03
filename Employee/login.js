var text="";
function validation(){
	var input_text = document.getElementById("input_text").value;
	var input_password = document.getElementById("input_password").value;
    
   if(input_text==""||input_password==""){
     alert("enter all the details");
     return false;
   }
else if ((input_text=="ad1234")&& (input_password=="admin123"))
    {
        
        window.open("http://127.0.0.1:8887/adding.html");
    }
    else{
        alert("Invalid details");
        return false;
    }
    }

