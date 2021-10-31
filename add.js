function myFunction() {
    var myname = document.getElementById("fname").value;
    var myphone = document.getElementById("lname").value;
    var mycontry = document.getElementById("empid").value;
    var mymail = document.getElementById("pswd").value;
    var mymail = document.getElementById("srtnum").value;
    var mymail = document.getElementById("srtname").value;
    var mymail = document.getElementById("city").value;
    var mymail = document.getElementById("state").value;
    var mymail = document.getElementById("zip").value;
    var mymail = document.getElementById("country").value;
    result = fname + "," +lname+ "," +empid + ","
     + pswd+","+srtnum+","+srtname+","+city+","+state+","
    +zip+","+country;
    alert(result);
    return result;
  }
  