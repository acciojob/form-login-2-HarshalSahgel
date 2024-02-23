//your JS code here. If required.
document.querySelector("form").addEventListener("submit", function(){

	const firstName = document.getElementById("first").value;
	const LastName = document.getElementById("Last").value;
	const phoneNo = document.getElementById("num").value;
	const email = document.getElementById("email").value;

	const alertMessage = `First Name : ${firstName}
						Last Name : ${LastName}
						Phone Number: ${phoneNo}
						Email ID : ${email}`;
	
	alert(alertMessage);
})