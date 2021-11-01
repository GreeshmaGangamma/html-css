function myFunction() {
    var myname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var empid = document.getElementById("empid").value;
    var pswd = document.getElementById("pswd").value;
    var srtnum = document.getElementById("srtnum").value;
    var srtname = document.getElementById("srtname").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var country = document.getElementById("country").value;
   result = myname + "," +lname+ "," +empid + ","
     + pswd+","+srtnum+","+srtname+","+city+","+state+","
    +zip+","+country;
    alert(result);
    return result ;
  }
  
  