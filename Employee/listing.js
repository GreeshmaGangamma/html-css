const toLogin = () => {
  document.querySelector('#page').src = window.open("http://127.0.0.1:8887/login.html")
}

const readData = () => {
    const userData = JSON.parse(localStorage.getItem("users"));
    return userData;
  };
  
  

  const displayData = (data) => {
    let content = "";
    console.log(data)
    if (!data || data.length ===0) {
      content = "<p> No Employee Details Submitted </p>";
    } else {
      data.forEach((element) => {
        content += `<div class="row"><span >Name : ${element.name}</span><span >Age : ${element.age}
        </span><span >Empid : ${element.empid}</span><span >Email : ${element.email}</span><span>
        <button onclick="removeData()"  style="padding:3px;margin:0;font-size:10px;border-color:red">DELETE</button></span>
        <span><button style="padding:5px;margin:0;font-size:10px;border-color:green">EDIT</button></span></div>`;
      });
    }
    document.querySelector(".contentContainer").innerHTML = content;
  };
  function removeData(index){
    readData();
    let removed=userData.indexOf(index);
    userData.splice(removed,1);
    localStorage.setItem('users',JSON.stringify(userData));
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    displayData(readData());
    
    
  });
  
  