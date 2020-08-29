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


// modalpopup


function showmencard1(){
  document.getElementById("men1").style.display = "block";
}
function closemen1card(){
  document.getElementById("men1").style.display = "none";
}
function showmencard2(){
  document.getElementById("men2").style.display = "block";
}
function closemen2card(){
  document.getElementById("men2").style.display = "none";
}
function showmencard3(){
  document.getElementById("men3").style.display = "block";
}
function closemen3card(){
  document.getElementById("men3").style.display = "none";
}
function showmencard4(){
  document.getElementById("men4").style.display = "block";
}
function closemen4card(){
  document.getElementById("men4").style.display = "none";
}
function showmencard5(){
  document.getElementById("men5").style.display = "block";
}
function closemen5card(){
  document.getElementById("men5").style.display = "none";
}
function showmencard6(){
  document.getElementById("men6").style.display = "block";
}
function closemen6card(){
  document.getElementById("men6").style.display = "none";
}
function showwomencard1(){
  document.getElementById("women1").style.display = "block";
}
function closewomen1card(){
  document.getElementById("women1").style.display = "none";
}
function showwomencard2(){
  document.getElementById("women2").style.display = "block";
}
function closewomen2card(){
  document.getElementById("women2").style.display = "none";
}
function showwomencard3(){
  document.getElementById("women3").style.display = "block";
}
function closewomen3card(){
  document.getElementById("women3").style.display = "none";
}
function showwomencard4(){
  document.getElementById("women4").style.display = "block";
}
function closewomen4card(){
  document.getElementById("women4").style.display = "none";
}
function showwomencard5(){
  document.getElementById("women5").style.display = "block";
}
function closewomen5card(){
  document.getElementById("women5").style.display = "none";
}
function showwomencard6(){
  document.getElementById("women6").style.display = "block";
}
function closewomen6card(){
  document.getElementById("women6").style.display = "none";
}
