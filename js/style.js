function validation(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var mnumber = document.getElementById("mnumber").value;
    var pwd = document.getElementById("pwd").value; 

   if(fname==""){
    document.getElementById("First name").innerHTML="*";
    return false;
   } 
}   