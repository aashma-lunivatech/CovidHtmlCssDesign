function validateform(){
    var name= document.myform.name.value;
    var phone = document.myform.phone.value;
    var texts = document.myform.text.value;

    if(name==null|| name==""){
alert("Name is required");
return false;
    }
    else if(phone.length<10){
        alert("phone must be atleast 10 value");
        return false;
    }
    else if(texts==null| texts==""){
        alert("message is required");
        return false;
    }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





