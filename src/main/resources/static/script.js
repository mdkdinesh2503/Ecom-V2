// Login Password visible part starts here

function myFunction() {
  var visible = document.getElementById("Password");
  if (visible.type === "password") {
    visible.type = "text";
  } else {
    visible.type = "password";
  }
}

// Login Password visible part ends here
