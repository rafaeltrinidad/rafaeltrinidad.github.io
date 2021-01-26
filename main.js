

// This website helped me develop the scroll to top button: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Get the button
var mybutton = document.getElementById("myBtn");

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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//These websites helped me create enlarged image overlays: https://www.w3schools.com/howto/howto_css_modal_images.asp
/* https://stackoverflow.com/questions/37926298/javascript-modal-close-image-by-clicking-anywhere-outside-the-image */


// create references to the modal...
var modal = document.getElementById('myModal');
modal.addEventListener('click',function(){
this.style.display="none";
})
// to all images -- note I'm using a class!
var images = document.getElementsByClassName("myImages");
// the image in the modal
var modalImg = document.getElementById("img01");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

/* This website helped me with creating the email validation page: https://www.w3resource.com/javascript/form/email-validation.php */

function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Email successfully recorded!");
document.form1.text1.focus();
return true;
}
else
{
alert("Invalid email address!");
document.form1.text1.focus();
return false;
}
}
