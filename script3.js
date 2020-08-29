function validateContactus(){
  var x = document.getElementById("contactname").value;
  if(x==""){
    alert("Please enter your name");
    return false;
  }
  var y = document.getElementById("contactemail").value;
  if(y==""){
    alert("Email field can't be empty");
    return false;
  }
  if(y.indexOf('@')==-1){
    alert("Email field must contain @ ");
    return false;
  }
  if(y.search(".com")==-1){
    alert("Email field must contain .com ");
    return false;
  }
  var p = document.getElementById("contactphone").value;
  if (/^\d{10}$/.test(p)) {

  } else {
    alert("Invalid number; must be ten digits");
    return false;
  }
  var z = document.getElementById("yourquery").value;
  if(z==""){
    alert("Please enter your query.")
    return false;
  }
  alert("Your query has been submitted. We will contact you within 24 hours.");
  return true;
}
