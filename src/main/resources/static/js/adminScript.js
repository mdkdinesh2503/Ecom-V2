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
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<div class="product-list" title="${product.title}" onclick="window.location.href='adminViewProducts'">
                          <img src="${product.image}" />
                          <h3>${product.title}...</h3>
                          <a href="adminViewProducts" class="product-btn">view <i class="fas fa-eye"></i></a>
                        </div>`;

    document.getElementById("admin-products").appendChild(div);
  });
}

// Product Display ends here

// Validation

function mobileValidate() {
  var mobileValue = document.getElementById("mobile").value;
  var SuccessMsg = document.getElementById("mobileSuccessMsg");
  var ErrorMsg = document.getElementById("mobileErrorMsg");
  var mobileValidate = "^[6-9]{1}[0-9]{9}$";

  if (!mobileValue.match(mobileValidate)) {
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
}

function emailValidate() {
  var emailRegister = document.getElementById("email").value;
  var SuccessMsg = document.getElementById("emailSuccessMsg");
  var ErrorMsg = document.getElementById("emailErrorMsg");
  var emvalidate =
    "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

  if (!emailRegister.match(emvalidate)) {
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
}

function passwordValidate() {
  var passwordRegister = document.getElementById("password").value;
  var SuccessMsg = document.getElementById("passSuccessMsg");
  var ErrorMsg = document.getElementById("passErrorMsg");
  var passvalidate = "^(.{0,6}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$";

  if (passwordRegister.match(passvalidate)) {
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
}

function categoryValidate() {
  var categoryValue = document.getElementById("category").value;
  var SuccessMsg = document.getElementById("categorySuccessMsg");
  var ErrorMsg = document.getElementById("categoryErrorMsg");
  var categoryValidate = "^[a-zA-Z]+$";

  if (!categoryValue.match(categoryValidate)) {
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
}

// Star Rating

let stars = document.getElementsByClassName("star");
let output = document.getElementById("rating");

function rate(n) {
  remove();
  for (let i = 0; i < n; i++) {
    if (n == 1) cls = "one-star";
    else if (n == 2) cls = "two-star";
    else if (n == 3) cls = "three-star";
    else if (n == 4) cls = "four-star";
    else if (n == 5) cls = "five-star";
    stars[i].className = "star " + cls;
  }
  output.value = n;
}

function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}
