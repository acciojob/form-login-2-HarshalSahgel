//your JS code here. If required.
const data = {};
document.querySelector("form").addEventListener("submit", function(event){

	 event.preventDefault();
			
	data.firstName = document.getElementById("first").value;
    data.LastName = document.getElementById("Last").value;
	data.phoneNo = document.getElementById("num").value;
	data.email = document.getElementById("email").value;

	const alertMessage = `First Name : ${data.firstName} Last Name : ${data.LastName} Phone Number: ${data.phoneNo} Email ID : ${data.email}`;
	
	alert(alertMessage);
})