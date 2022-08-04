function validateForm(){  
    var email=document.querySelector('#email').value;
    var name=document.querySelector('#name').value;
    var password=document.querySelector('#password').value;


/*---------------------EMAIL VALIDATION ---------------------------*/
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
      document.getElementById('erroremail').innerHTML= 'Please provide a valid email address';
    email.focus;
    return false;
 }else{
  document.getElementById('erroremail').innerHTML="";  
}

 if (name==null || name==""){  
  document.getElementById('errorname').innerHTML="Please enter a valid name";  
  name.focus(); 
  return false; 
}else{
  document.getElementById('errorname').innerHTML="";  
}

if(password.length < 8) {  
  document.getElementById("errorpassword").innerHTML = "**Password length must be atleast 8 characters";  
  password.focus(); 
  return false;  
}  else{
  document.getElementById('errorpassword').innerHTML="";  
}



/*var cd = document.querySelector('#check-box');
       

    document.getElementById('errorcheck').innerHTML="";  
    cd.focus(); 
   // return false; 
}else{
    document.getElementById('errorcheck').innerHTML="Please enter a valid name";  
}*/

var cd = document.querySelector('#check-box')


if (cd.checked==false){  
  document.getElementById('errorcheck').innerHTML="Accept our Terms ";  
  cd.focus(); 
  return false; 
}else{
  document.getElementById('errorcheck').innerHTML="";  
}























            } 

                
      
     