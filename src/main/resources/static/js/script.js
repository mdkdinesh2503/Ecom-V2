// Login Password visible part starts here

function activeCheckBox() {
	var checkBox = document.getElementById("myCheck");
	if (checkBox.checked == true) {
		var visible = document.getElementById("password");
		if (visible.type === "password") {
			visible.type = "text";
		} else {
			visible.type = "password";
		}
	}
}

function showPassword() {
	var visible = document.getElementById("password");
	if (visible.type === "password") {
		visible.type = "text";
	} else {
		visible.type = "password";
	}
}

// Login Password visible part ends here

// Register Validation starts here

function mobileValidate() {
	var mobileValue = document.getElementById("mobile").value;
	var mobileError = document.getElementById("mobileBorder");
	var SuccessMsg = document.getElementById("mobileSuccessMsg");
	var ErrorMsg = document.getElementById("mobileErrorMsg");
	var mobileValidate = "^[6-9]{1}[0-9]{9}$";

	if (!mobileValue.match(mobileValidate)) {
		mobileError.style.borderBottom = ".1rem solid red";
		ErrorMsg.style.display = "block";
		ErrorMsg.style.visibility = "visible";
		SuccessMsg.style.display = "none";
		SuccessMsg.style.visibility = "hidden";
		return false;
	}

	ErrorMsg.style.display = "none";
	ErrorMsg.style.visibility = "hidden";
	SuccessMsg.style.display = "block";
	SuccessMsg.style.visibility = "visible";
	mobileError.style.borderBottom = ".1rem solid green";
}

function emailValidate() {
	var emailRegister = document.getElementById("email").value;
	var emailError = document.getElementById("emailBorder");
	var SuccessMsg = document.getElementById("emailSuccessMsg");
	var ErrorMsg = document.getElementById("emailErrorMsg");
	var emvalidate =
		"^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

	if (!emailRegister.match(emvalidate)) {
		emailError.style.borderBottom = ".1rem solid red";
		ErrorMsg.style.display = "block";
		ErrorMsg.style.visibility = "visible";
		SuccessMsg.style.display = "none";
		SuccessMsg.style.visibility = "hidden";
		return false;
	}

	ErrorMsg.style.display = "none";
	ErrorMsg.style.visibility = "hidden";
	SuccessMsg.style.display = "block";
	SuccessMsg.style.visibility = "visible";
	emailError.style.borderBottom = ".1rem solid green";
}

function passwordValidate() {
	var passwordRegister = document.getElementById("password").value;
	var passwordError = document.getElementById("passwordBorder");
	var SuccessMsg = document.getElementById("passSuccessMsg");
	var ErrorMsg = document.getElementById("passErrorMsg");
	var passvalidate = "^(.{0,6}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$";

	if (passwordRegister.match(passvalidate)) {
		passwordError.style.borderBottom = ".1rem solid red";
		ErrorMsg.style.display = "block";
		ErrorMsg.style.visibility = "visible";
		SuccessMsg.style.display = "none";
		SuccessMsg.style.visibility = "hidden";
		return false;
	}

	ErrorMsg.style.display = "none";
	ErrorMsg.style.visibility = "hidden";
	SuccessMsg.style.display = "block";
	SuccessMsg.style.visibility = "visible";
	passwordError.style.borderBottom = ".1rem solid green";
}

const registerForm = document.getElementById("registerFormValue");

registerForm.addEventListener("submit", function(event) {
	event.preventDefault();
	var mobileValidate = "^[6-9]{1}[0-9]{9}$";
	var emailValidate =
		"^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";
	var passwordValidate = "^(.{0,6}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$";
	var mobile = document.getElementById("mobile").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (!mobile.match(mobileValidate)) {
		alert("Mobile Nuber should Only Contains Numbers!");
		return false;
	} else if (!email.match(emailValidate)) {
		alert("Enter proper email id!");
		return false;
	} else if (password.match(passwordValidate)) {
		alert(
			"password Should contains min 7 digits, uppercase, lowercase, number and special character"
		);
		return false;
	} else {
		var blur = document.getElementById("registerBlur");
		blur.classList.toggle("active");
		var RegisterPopup = document.getElementById("register-popup");
		RegisterPopup.classList.toggle("active");

		setInterval(openLoginPage, 3000);
		return false;
	}
});

function openLoginPage() {
	window.location.href = 'login.html';
}

// Register Validation ends here

// login validation starts here

function loginForm(event) {
	event.preventDefault();

	var UserName = document.getElementById("username").value;
	var Password = document.getElementById("password").value;

	if (UserName == "admin" && Password == "admin") {
		var Destroy1 = document.getElementById("loginBlur");
		Destroy1.classList.toggle("active");
		var AdminLoginPopup = document.getElementById("admin-popup");
		AdminLoginPopup.classList.toggle("active");

		setInterval(adminDashboard, 3000);

		return false;
	} else if (UserName == "mdk" && Password == "mdk") {
		var Destroy = document.getElementById("loginBlur");
		Destroy.classList.toggle("active");
		var UserLoginPopup = document.getElementById("user-popup");
		UserLoginPopup.classList.toggle("active");

		setInterval(userDashboard, 3000);

		return false;
	} else {
		alert("Invalid Crendentials");
	}
}

function userDashboard() {
	window.location.href = 'userDashboard.html';
}

function adminDashboard() {
	window.location.href = 'adminDashboard.html';
}

// login validation ends here
