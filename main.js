// A form for user information submission
// The ability to select whether the donation will be a single amount or per lap
// A table to display each donor's submission information
// A button labeled Donate to process the submission
// A button labeled Cancel to clear the submission form
// The donor information should be stored as JS objects that contain their content type as keys and the submitted information as the value. {name: "John Donut", pledge: 70}

// All donor information objects should be stored in a private array in an IIFE.

// Make sure the donor array cannot be accessed by the other modules except through an accessor (getter) method.

// The IIFE should expose, in its public interface, a method named addDonor that accepts a single argument. That argument's value should be the user information object.

// You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

// Styling

// For display on the page, use Bootstrap to style the form and table elements. Use Bootstrap's grid system and styling classes to get the following effects.

// At desktop size display the table on the left and form on the right with some space around the sides
// The page should have the same display on a tablet in landscape mode, but with no space at the sides
// On mobile/vertical tablet the table should display above the form
// The table entries should be alternately striped



var donate = document.getElementById("donateBtn");
donate.addEventListener("click", function() {
	var nameInput = document.getElementById("exampleInputName2").value;
	var emailInput = document.getElementById("exampleInputEmail2").value;
	var money = document.getElementById("exampleInputAmount").value;
	console.log("hello");
	console.log(nameInput, emailInput, money);

});
