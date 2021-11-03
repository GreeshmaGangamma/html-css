const readData = () => {
    const userData = JSON.parse(localStorage.getItem("users"));
    return userData;
  };
  
  const displayData = (data) => {
    let content = "";
    console.log(data)
    if (!data || data.length ===0) {
      content = "<p> No user data available </p>";
    } else {
      data.forEach((element) => {
        content += `<div class="row"><span>Name : ${element.name}</span><span>Age : ${element.age}</span><span>Empid : ${element.empid}</span><span>Email : ${element.email}</span></div>`;
      });
    }
    document.querySelector(".contentContainer").innerHTML = content;
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    displayData(readData());
  });
  