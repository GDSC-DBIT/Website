
//add addEventListener to the form
document.querySelector('.contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  //e.preventDefault();

 // document.getElementById("contactForm").reset();
  
  //document.querySelector('.contactForm').reset();
  swal("Thank You for Contacting Us", "We'll get back to you soon!", "success");
}





