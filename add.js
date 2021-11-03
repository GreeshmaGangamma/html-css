
  

/*function saveLocalStorage(){
  event.preventDefault();
  var fullname=document.getElementById("fullname").value ;
  var empid=document.getElementById("empid").value;
  var address=document.getElementById("address").value;
  var phone=document.getElementById("phone").value;

  let emp_record=new Array();
  emp_record=JSON.parse(localStorage.getItem("employee"))?JASON.parse(localStorage.getItem("employee")):[];

  emp_record.push({
    "EmployeeName":fullname,
    "Empid": empid,
  "Address":address,
"PhoneNumber":phone  })
localStorage.setItem("employee",JSON.stringify(emp_record));

window.open("http://127.0.0.1:8887/list.html");

}*/

/*var arr = new Array();
function addData(){
  getData();
  
  arr.push({
    "fullname":document.getElementById("fullname").value ,
    "empid":document.getElementById("empid").value ,
  "address":document.getElementById("address").value,
"phone":document.getElementById("phone").value
  });

localStorage.setItem("employee",JASON.stringify(arr));
showData();

}
function getData(){
    var str = localStorage.getItem("employee");
    if(str!=null)
    arr = JASON.parse(str);
}


function showData(){
    getData();


    var table1 = document.getElementById("display");



    for(i=0;i<arr.length;i++){
    var r= table1.insertRow();
    var cell1=r.insertCell();
    var cell2=r.insertCell();
    var cell3=r.insertCell();
    var cell4=r.insertCell();

    cell1.innerHTML = arr[i].fullname;
    cell2.innerHTML =arr[i].empid;
    cell3.innerHTML = arr[i].address;
    cell4.innerHTML = arr[i].phone;
}
}*/

const add_emp = document.getElementById("add_emp");
const employeesContainer = document.querySelector(".employees");
const nameInput=add_emp['fullname'];
const empidInput=add_emp['empid'];
const AddInput=add_emp['address'];
const phoneInput=add_emp['phone'];

const employees= JASON.parse( localStorage.getItem("employees")) || [];

const addEmployee =(fullname,empid,address,phone) => {
  employees.push({
    fullname:fullname,
    empid:empid,
    address:address,
    phone:phone,
  });

  localStorage.setItem("employees",JASON.stringify(employess));
  return{fullname,empid,address,phone};
};

  const createEmployeeElement = ({fullname,empid,address,phone}) => {
    const employeeDiv=document.createElement('div');
    const employeeName=document.createElement('h2');
    const employeeID=document.createElement('p');
    const employeeAddress=document.createElement('p');
    const employeePhone=document.createElement('p');

    employeeName.innerText = "Employee Name:" +fullname; 
    employeeID.innerText = "Employee ID:" +empid;
    employeeAddress.innerText = "Employee Adress:" + address;
    employeePhone.innerText = "Employee Phone:" +phone;

    employeeDiv.append(employeeName,employeeID,employeeAddress,employeePhone);
    employeesContainer.appendChild(employeeDiv);

    employeesContainer.getElementsByClassName.display=students.length ===0?"none":"flex";
  };

  employeesContainer.getElementsByClassName.display=students.length ===0?"none":"flex";

  employees.forEach(createEmployeeElement)

  add_emp.onclick= e => {
    e.preventDefault();

    const newEmployee = addEmployee(
      nameInput.value,
      empidInput.value,
      AddInput.value,
      phoneInput.value
    );
    createEmployeeElement(newEmployee)

    nameInput.value="";
    empidInput.value="";
    AddInput.value="";
    phoneInput.value="";
  };



  

