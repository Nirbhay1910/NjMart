function myfunction1(){
  document.getElementById("login").style.display = "block";
}
function myfunction2(){
  document.getElementById("login").style.display = "none";
}
function signupfunction(){
  document.getElementById("signup").style.display = "block";
}
function signupclose(){
  document.getElementById("signup").style.display = "none";
}
function closesignupAndopenLogin(){
  document.getElementById("signup").style.display = "none";
  document.getElementById("login").style.display = "block";
}
function validateLogIn(){
  var x = document.getElementById("email-login").value;
  if(x==""){
    alert("Email field can't be empty");
    return false;
  }
  if(x.indexOf('@')==-1){
    alert("Email field must contain @ ");
    return false;
  }
  if(x.search(".com")==-1){
    alert("Email field must contain .com ");
    return false;
  }
  var y = document.getElementById("password-login").value;
  if(y==""){
    alert("Password field can't be empty");
    return false;
  }
  return true;
}
function validatesignup(){
  var y = document.getElementById("username").value;
  if(y==""){
    alert("Username can't be empty");
    return false;
  }
  var x = document.getElementById("email-signup").value;
  if(x==""){
    alert("Email field can't be empty");
    return false;
  }
  if(x.indexOf('@')==-1){
    alert("Email field must contain @ ");
    return false;
  }
  if(x.search(".com")==-1){
    alert("Email field must contain .com ");
    return false;
  }
  var p = document.getElementById("phone").value;
  if (/^\d{10}$/.test(p)) {

  } else {
    alert("Invalid number; must be ten digits");
    return false;
}
  var z = document.getElementById("password-signup").value;
  if(z==""){
    alert("Password field can't be empty");
    return false;
  }
  var s = document.getElementById("confirm-password-signup").value;
  if(s!=z){
    alert("Password didn't match in confirm password field. Please retry!");
    return false;
  }
  return true;
}
var pagechecker = 1;
pagination(pagechecker);

// Next/previous controls
function checkPages(n) {
  pagination(pagechecker += n);
}
function currentpage(n){
  pagination(pagechecker = n);
}
function pagination(n){
  var i=0;
  var card1 = document.getElementsByClassName("card1");
  var card2 = document.getElementsByClassName("card2");
  var pager = document.getElementsByClassName("pages");
  if (n > 2) {pagechecker = 1}
  if(n < 1){pagechecker = 2}
  for(i=0;i<card2.length;i++){
    card1[i].style.display = "none";
    card2[i].style.display = "none";
  }
  for (i = 0; i < pager.length; i++) {
      pager[i].className = pager[i].className.replace(" active", "");
  }
  pager[pagechecker-1] = pager[pagechecker-1].className+=(" active");
  if(pagechecker==1){
    for(i=0;i<card1.length;i++)
    card1[i].style.display = "inline-block";
  }
  else{
    for(i=0;i<card2.length;i++)
    card2[i].style.display = "inline-block";
  }
}
var rep = 0;
function addtocart(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("men1-add-to-cart").style.display = "none";
    document.getElementById("men1-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("men1-add-to-cart").style.display = "block";
    document.getElementById("men1-added-to-cart").style.display = "none";
  }
}
function addtocart2(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("men2-add-to-cart").style.display = "none";
    document.getElementById("men2-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("men2-add-to-cart").style.display = "block";
    document.getElementById("men2-added-to-cart").style.display = "none";
  }
}
function addtocart3(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("men3-add-to-cart").style.display = "none";
    document.getElementById("men3-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("men3-add-to-cart").style.display = "block";
    document.getElementById("men3-added-to-cart").style.display = "none";
  }
}
function addtocart4(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("men4-add-to-cart").style.display = "none";
    document.getElementById("men4-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("men4-add-to-cart").style.display = "block";
    document.getElementById("men4-added-to-cart").style.display = "none";
  }
}
function addtocart5(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("men5-add-to-cart").style.display = "none";
    document.getElementById("men5-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("men5-add-to-cart").style.display = "block";
    document.getElementById("men5-added-to-cart").style.display = "none";
  }
}
function addtocart6(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("men6-add-to-cart").style.display = "none";
    document.getElementById("men6-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("men6-add-to-cart").style.display = "block";
    document.getElementById("men6-added-to-cart").style.display = "none";
  }
}
function woaddtocart(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("women1-add-to-cart").style.display = "none";
    document.getElementById("women1-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("women1-add-to-cart").style.display = "block";
    document.getElementById("women1-added-to-cart").style.display = "none";
  }
}
function woaddtocart2(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("women2-add-to-cart").style.display = "none";
    document.getElementById("women2-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("women2-add-to-cart").style.display = "block";
    document.getElementById("women2-added-to-cart").style.display = "none";
  }
}
function woaddtocart3(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("women3-add-to-cart").style.display = "none";
    document.getElementById("women3-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("women3-add-to-cart").style.display = "block";
    document.getElementById("women3-added-to-cart").style.display = "none";
  }
}
function woaddtocart4(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("women4-add-to-cart").style.display = "none";
    document.getElementById("women4-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("women4-add-to-cart").style.display = "block";
    document.getElementById("women4-added-to-cart").style.display = "none";
  }
}
function woaddtocart5(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("women5-add-to-cart").style.display = "none";
    document.getElementById("women5-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("women5-add-to-cart").style.display = "block";
    document.getElementById("women5-added-to-cart").style.display = "none";
  }
}
function woaddtocart6(n,m){
  var tot = rep + n;
  document.getElementById("noofitems2").innerHTML = tot;
  rep = rep+n;
  if(m==0){
    document.getElementById("women6-add-to-cart").style.display = "none";
    document.getElementById("women6-added-to-cart").style.display = "block";
  }
  else{
    document.getElementById("women6-add-to-cart").style.display = "block";
    document.getElementById("women6-added-to-cart").style.display = "none";
  }
}
