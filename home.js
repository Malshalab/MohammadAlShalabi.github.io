function Show(){
    var x = document.getElementById('contact-form') ;
    x.style.display='flex';
}

function HideContact(){
    var x =document.getElementById('contact-form');
    x.style.display='none';
}

function showHideResume(){
    var x = document.getElementById("resume");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function navbarFunction(x){
    x.classList.toggle("change");
}

