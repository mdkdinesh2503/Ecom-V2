// Product Display starts here

let products = null;
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    showProducts();
  });

function showProducts() {
  products.forEach((product) => {
    const discount = product.price * (product.discount / 100);
    const rating = product.rating.rate;
    const star1 = rating > 0.5 && rating <= 1.5 ? "fill-rate" : "";
    const star2 = rating > 1.5 && rating <= 2.5 ? "fill-rate" : "";
    const star3 = rating > 2.5 && rating <= 3.5 ? "fill-rate" : "";
    const star4 = rating > 3.5 && rating <= 4.5 ? "fill-rate" : "";
    const star5 = rating > 4.5 ? "fill-rate" : "";
    const div = document.createElement("div");
    div.classList.add("product");
    if (product.discount == 0) {
      div.innerHTML = `
    <div class="categories-product" title="${product.title}">
                    <img src="${product.image}" />
                    <h3>${product.title}...</h3>
                    <div class="cat-container">
                        <div class="cat-content">
                           <div class="rating">
                                <div class="star">
                                  <i class="fas fa-star ${star5} ${star4} ${star3} ${star2} ${star1}"></i>
                                  <i class="fas fa-star ${star5} ${star4} ${star3} ${star2}"></i>
                                  <i class="fas fa-star ${star5} ${star4} ${star3}"></i>
                                  <i class="fas fa-star ${star5} ${star4}"></i>
                                  <i class="fas fa-star ${star5}"></i>
                                </div>
                                <p class="rate-count">(${product.rating.count})</p>
                            </div>
                            <div class="amount">
                                <h4>&#8377;${product.price}</h4>
                            </div>
                        </div>
                        <i class="fas fa-shopping-cart" title="Add to Cart"></i>
                    </div>
                </div>
    `;
    } else {
      div.innerHTML = `
    <div class="categories-product" title="${product.title}">
                    <h2>-${product.discount}%</h2>
                    <img src="${product.image}" />
                    <h3>${product.title}...</h3>
                    <div class="cat-container">
                        <div class="cat-content">
                           <div class="rating">
                                <div class="star">
                                <i class="fas fa-star ${star5} ${star4} ${star3} ${star2} ${star1}"></i>
                                <i class="fas fa-star ${star5} ${star4} ${star3} ${star2}"></i>
                                <i class="fas fa-star ${star5} ${star4} ${star3}"></i>
                                <i class="fas fa-star ${star5} ${star4}"></i>
                                <i class="fas fa-star ${star5}"></i>
                                </div>
                                <p class="rate-count">(${product.rating.count})</p>
                            </div>
                            <div class="amount">
                                <h4>&#8377;${discount}</h4>
                                <h5>&#8377;${product.price}</h5>
                            </div>
                        </div>
                        <i class="fas fa-shopping-cart" title="Add to Cart"></i>
                    </div>
                </div>
    `;
    }

    document.getElementById("all-products").appendChild(div);
  });
}

// Product Display ends here

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

// Register Validation ends here

// Register form submit starts here

const registerForm = document.getElementById("registerFormValue");

registerForm.addEventListener("submit", function (event) {
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
    popup();
    setInterval(() => {
      window.location.href = "login";
    }, 3000);
    return false;
  }
});

function openLoginPannel() {
  window.location.href = "login";
}

// Register form submit ends here

// login validation starts here

function loginForm(event) {
  event.preventDefault();

  var UserName = document.getElementById("username").value;
  var Password = document.getElementById("password").value;

  if (UserName == "admin" && Password == "admin") {
    popup();
    setInterval(() => {
      window.location.href = "adminDashboard";
    }, 3000);

    return false;
  } else if (UserName == "mdk" && Password == "mdk") {
    popup();
    setInterval(() => {
      window.location.href = "userDashboard";
    }, 3000);

    return false;
  } else {
    alert("Invalid Crendentials");
  }
}

function popup() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

// login validation ends here
