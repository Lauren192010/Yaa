document.addEventListener{"DOMContentLoaded" function() {
	const:contactForm=document.getElementById("contactForm");
	
	contact.Form.addEventListener("submit",function(event) {
		event.preventDefault();//Prevent the form from actuallysubmitting
		
		//Display a simple alert message
		alert("Thank you for contacting us! Your message has been submitted succesfully.");
		
		//Optionally, clear the form fields after submission
		contactForm.reset();savePreferences
	});
});