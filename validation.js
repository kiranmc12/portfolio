function validateForm() {
  let x = document.getElementById("name").value;

  if (x.trim() == "") { 

    document.getElementById("one").innerHTML = "Name must be filled out";
    return false; 
  } else {
    document.getElementById("one").innerHTML = ""; 
  }
  
  let e = document.getElementById("email").value.trim(); 

  var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  if (!e.match(validRegex)) { 

    document.getElementById("two").innerHTML = "Invalid email address!";
    document.getElementById("two").style.color = "red";
    return false; 
  } else {
    document.getElementById("two").innerHTML = ""; 
  }

  let s = document.getElementById("subject").value;

  if (s.trim() == "") { 

    document.getElementById("three").innerHTML = "Subject must be filled out";
    return false; 
  } else {
    document.getElementById("three").innerHTML = ""; 
  }

  const textarea = document.getElementById("textarea");
  const error = document.getElementById("error");
  const value = textarea.value.trim();
  if (value.length === 0) {
    error.textContent = "Textarea is empty";
    return false; 
  } else if (value.length < 10) {
    error.textContent = "Textarea is too short";
    return false; 
  } else if (value.length > 1000) {
    error.textContent = "Textarea is too long";
    return false; 
  } else {
    error.textContent = ""; 
  }


  let p = document.getElementById("phnno").value;

  if (p.trim() == "") { 

  document.getElementById("phn_msg").innerHTML = "Number must be filled out";
  return false; 
} 
 else  if (p.length !== 10) { 
document.getElementById("phn_msg").innerHTML = "Phone number must be 10 digits";
return false; 
}




else {
  document.getElementById("phn_msg").innerHTML = ""; 
}


  return true;
}