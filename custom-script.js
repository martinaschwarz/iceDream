// Boolean variable to keep track of log in status
var loggedIn = false;

// Function to validate login data, called by login button
function validateLogin() {
  // Variables for the Username & Password text fields and the error div
  var user = document.getElementById("usrname").value;
  var pass = document.getElementById("passwrd").value;
  var err = document.getElementById("login-error");

  // If the username is empty show the error div and display a corresponding message inside
  if ( user == "") {
    err.style.display = "block";
    err.innerHTML = "Username cannot be empty!"
  } 
  // If the username doesn't include a @ or . ie. isn't a valid email address display the error div and display a corresponding message
  else if (user.includes("@") == false || user.includes(".") == false) {
    err.style.display = "block";
    err.innerHTML = "Please enter a valid email address!"
  } 
  // If the password is empty show the error div and display a corresponding message inside
  else if ( pass == "") {
    err.style.display = "block";
    err.innerHTML = "Password cannot be empty!";
  } 
  // If both username and password are correct set the login status to true...
  else if (user == "user@user.com" && pass == "pass") {
    loggedIn = true;
    // ...dismiss the Login modal...
    $('#loginModal').modal('hide');
    // ...and hide both login buttons and display a welcome message in place of the button below the carousel
    document.getElementById("login-btn-main").style.display = "none";
    document.getElementById("login-btn-other").style.display = "none";
    document.getElementById("userwelcome").innerHTML = "<p class='h2 font-weight-lighter text-center'>Welcome back, User!</p>"
  } 
  // If the username and password were filled out incorrectly show the error div and display a corresponding message inside
  else {
    err.style.display = "block";
    err.innerHTML = "Incorrect username or password. Please try again!"
  }
}

// Variables to hold each element with a certain class name
// These variables are dynamically assigned by the PHP loop in ice-dream.php that gets all products from the database and displays them on the page
var item = document.getElementsByClassName("product");
var price = document.getElementsByClassName("cost");

// initiate two empty arrays
var items = [];
var prices = [];

// Add each element with the class name "product" to the items array, ie. the name of each existing product
for(var i = 0; i < item.length; i++) {
  items[i] = item[i].innerHTML;
}

// Add each element with the class name "cost" to the prices array, ie. the proce for each existing product
for (var i = 0; i < price.length; i++) {
  prices[i] = price[i].innerHTML;
}

// Initiate a variable holding the total price of the order as displayed in the dropdown list of the shopping cart
var grandTotal = Number(document.getElementById("orderTotal").innerHTML);

// A note on the below functions dealing with updating the shopping cart:
// Unfortunately I wasn't able to figure out how to dynamically assign local storage keys or create function names
// Ideally, I would have generated that functionality dynamically within a loop for each item, as it is the exact same for each one

// Function to check local storage each time the page loads and update the shopping cart accordingly
// The name of each product added to local sotrage is added to the dropdown summary of the order along with the total price per product and the overall total cost of the order
// The total price per product is calculated by multiplying the unit price - coming from the array - with the quantity - coming from local storage
window.onload = function init() {

  // Check if Item1 exists in local storage and if so add the product name and the price depending on quantity to the shopping cart
  // Add the total price of the product to the overall cost of the order
  if (localStorage.Item1) {
    document.getElementById("summary").innerHTML += 
      "<div class='d-flex justify-content-between align-items-center'><p>" + items[0] + "</p><p id='total1'>€ " + localStorage.Item1*prices[0] + "</p></div>";
    grandTotal += localStorage.Item1*prices[0];
  }

  // Check if Item2 exists in local storage and if so add the product name and the price depending on quantity to the shopping cart
  // Add the total price of the product to the overall cost of the order
  if (localStorage.Item2) {
    document.getElementById("summary").innerHTML += 
      "<div class='d-flex justify-content-between align-items-center'><p>" + items[1] + "</p><p id='total2'>€ " + localStorage.Item2*prices[1] + "</p></div>";
    grandTotal += localStorage.Item2*prices[1];
  }

  // Check if Item3 exists in local storage and if so add the product name and the price depending on quantity to the shopping cart
  // Add the total price of the product to the overall cost of the order
  if (localStorage.Item3) {
    document.getElementById("summary").innerHTML += 
      "<div class='d-flex justify-content-between align-items-center'><p>" + items[2] + "</p><p id='total3'>€ " + localStorage.Item3*prices[2] + "</p></div>";
    grandTotal += localStorage.Item3*prices[2];
  }

  // Check if Item4 exists in local storage and if so add the product name and the price depending on quantity to the shopping cart
  // Add the total price of the product to the overall cost of the order
  if (localStorage.Item4) {
    document.getElementById("summary").innerHTML += 
      "<div class='d-flex justify-content-between align-items-center'><p>" + items[3] + "</p><p id='total4'>€ " + localStorage.Item4*prices[3] + "</p></div>";
    grandTotal += localStorage.Item4*prices[3];
  }

  // Check if Item5 exists in local storage and if so add the product name and the price depending on quantity to the shopping cart
  // Add the total price of the product to the overall cost of the order
  if (localStorage.Item5) {
    document.getElementById("summary").innerHTML += 
      "<div class='d-flex justify-content-between align-items-center'><p>" + items[4] + "</p><p id='total5'>€ " + localStorage.Item5*prices[4] + "</p></div>";
    grandTotal += localStorage.Item5*prices[4];
  }

  // Check if Item6 exists in local storage and if so add the product name and the price depending on quantity to the shopping cart
  // Add the total price of the product to the overall cost of the order
  if (localStorage.Item6) {
    document.getElementById("summary").innerHTML += 
      "<div class='d-flex justify-content-between align-items-center'><p>" + items[5] + "</p><p id='total6'>€ " + localStorage.Item6*prices[5] + "</p></div>";
    grandTotal += localStorage.Item6*prices[5];
  }

  // Display the overall cost of the order below the order summary in the checkout dropdown of the shopping cart
  document.getElementById("orderTotal").innerHTML = grandTotal;
}

// Function to increase the quantity of Item1 by 1 in its quantity text field, called by the addItem button on the product card
function addItem1() {
  document.getElementById("item1").stepUp();
}

// Function to decrease the quantity of Item1 by 1 in its quantity text field, called by the removeItem button on the product card
function removeItem1() {
  document.getElementById("item1").stepDown();
}

// A note on the following 6 functions below:
// I faced an issue with the onclick functionality so instead I added a clickEvent, called by the addToCart buttons on each product card
// Code block taken from: https://stackoverflow.com/questions/39610661/how-to-change-the-button-text-on-click-for-a-short-duration-only-using-javascrip

// Function to add Item1 to the shopping cart
document.getElementById("item1-toCart").addEventListener("click", function (clicked) {
  return function () {
    // Check if a quantity of at least 1 has been selected
    if (document.getElementById("item1").value > 0) {
      if (!clicked) {
        // Check if Item1 already has an entry in the local storage
        if (localStorage.Item1) {
          // Add the quantity of the current selection to the quantity already stored in local storage as the value for Item1
          localStorage.Item1 = Number(localStorage.Item1) + Number(document.getElementById("item1").value);
          // Update the total price for Item1 in the checkout summary of the shopping cart according to the new quantity
          document.getElementById("total1").innerHTML = "€ " + localStorage.Item1*prices[0];
          // Add the price of the added quantity the variable storing overall cost of the order
          grandTotal += Number(document.getElementById("item1").value)*prices[0];
        } 
        // If no record exists in local storage for Item1, create the key Item1 and set the value to the quantity set in the quantity text field of the product card
        else {
          localStorage.Item1 = Number(document.getElementById("item1").value);
          // Add the product name of Item1 and the total price of the item depending on quantity to the order summary in the shopping cart
          document.getElementById("summary").innerHTML += 
            "<div class='d-flex justify-content-between align-items-center'><p>" + items[0] + "</p><p id='total1'>€ " + localStorage.Item1*prices[0] + "</p></div>";
          // Add the price of the product to the variable holding the overall price of the order
          grandTotal += localStorage.Item1*prices[0];
        }
        // Store the current button text of the addToCart button in a variable
        var def = this.innerHTML;
        // Temporarily change the button text to a confirmation text
        this.innerHTML = "Added to Cart!";
        // Update the overall price of the order displayed in the shopping cart dropdown to what is currently stored in the variable "grandTotal", which was updated in the above statement
        document.getElementById("orderTotal").innerHTML = grandTotal;
        clicked = true;
        // Set a timeout of 1 second to display the updated button text and then reset it back to the original
        setTimeout(function () {
          this.innerHTML = def;
          clicked = false;
        }.bind(this), 1000);
        // Set a timeout of 1 second and then reset the quantity in the quantity text field on the product card back to 0
        setTimeout(function () {
          document.getElementById("item1").value = 0;
        }.bind(this), 1000);
      }
    }
  };
}(false), this);

// Function to increase the quantity of Item2 by 1 in its quantity text field, called by the addItem button on the product card
function addItem2() {
  document.getElementById("item2").stepUp();
}

// Function to decrease the quantity of Item2 by 1 in its quantity text field, called by the removeItem button on the product card
function removeItem2() {
  document.getElementById("item2").stepDown();
}

// Function to add Item2 to the shopping cart
document.getElementById("item2-toCart").addEventListener("click", function (clicked) {
  return function () {
    // Check if a quantity of at least 1 has been selected
    if (document.getElementById("item2").value > 0) {
      if (!clicked) {
        // Check if Item2 already has an entry in the local storage
        if (localStorage.Item2) {
          // Add the quantity of the current selection to the quantity already stored in local storage as the value for Item2
          localStorage.Item2 = Number(localStorage.Item2) + Number(document.getElementById("item2").value);
          // Update the total price for Item2 in the checkout summary of the shopping cart according to the new quantity
          document.getElementById("total2").innerHTML = "€ " + localStorage.Item2*prices[1];
          // Add the price of the added quantity the variable storing overall cost of the order
          grandTotal += Number(document.getElementById("item2").value)*prices[1];
        } 
        // If no record exists in local storage for Item2, create the key Item2 and set the value to the quantity set in the quantity text field of the product card
        else {
          localStorage.Item2 = Number(document.getElementById("item2").value);
          // Add the product name of Item2 and the total price of the item depending on quantity to the order summary in the shopping cart
          document.getElementById("summary").innerHTML += 
            "<div class=' d-flex justify-content-between align-items-center'><p>" + items[1] + "</p><p id='total2'>€ " + localStorage.Item2*prices[1] + "</p></div>";
          // Add the price of the product to the variable holding the overall price of the order
          grandTotal += localStorage.Item2*prices[1];
        }
        // Store the current button text of the addToCart button in a variable
        var def = this.innerHTML;
        // Temporarily change the button text to a confirmation text
        this.innerHTML = "Added to Cart!";
        // Update the overall price of the order displayed in the shopping cart dropdown to what is currently stored in the variable "grandTotal", which was updated in the above statement
        document.getElementById("orderTotal").innerHTML = grandTotal;
        clicked = true;
        // Set a timeout of 1 second to display the updated button text and then reset it back to the original
        setTimeout(function () {
          this.innerHTML = def;
          clicked = false;
        }.bind(this), 1000);
        // Set a timeout of 1 second and then reset the quantity in the quantity text field on the product card back to 0
        setTimeout(function () {
          document.getElementById("item2").value = 0;
        }.bind(this), 1000);
      }
    }
  };
}(false), this);

// Function to increase the quantity of Item3 by 1 in its quantity text field, called by the addItem button on the product card
function addItem3() {
  document.getElementById("item3").stepUp();
}

// Function to decrease the quantity of Item3 by 1 in its quantity text field, called by the removeItem button on the product card
function removeItem3() {
  document.getElementById("item3").stepDown();
}

// Function to add Item3 to the shopping cart
document.getElementById("item3-toCart").addEventListener("click", function (clicked) {
  return function () {
    // Check if a quantity of at least 1 has been selected
    if (document.getElementById("item3").value > 0) {
      if (!clicked) {
        // Check if Item3 already has an entry in the local storage
        if (localStorage.Item3) {
          // Add the quantity of the current selection to the quantity already stored in local storage as the value for Item3
          localStorage.Item3 = Number(localStorage.Item3) + Number(document.getElementById("item3").value);
          // Update the total price for Item3 in the checkout summary of the shopping cart according to the new quantity
          document.getElementById("total3").innerHTML = "€ " + localStorage.Item3*prices[2];
          // Add the price of the added quantity the variable storing overall cost of the order
          grandTotal += Number(document.getElementById("item3").value)*prices[2];
        } 
        // If no record exists in local storage for Item3, create the key Item3 and set the value to the quantity set in the quantity text field of the product card
        else {
          localStorage.Item3 = Number(document.getElementById("item3").value);
          // Add the product name of Item3 and the total price of the item depending on quantity to the order summary in the shopping cart
          document.getElementById("summary").innerHTML += 
            "<div class=' d-flex justify-content-between align-items-center'><p>" + items[2] + "</p><p id='total3'>€ " + localStorage.Item3*prices[2] + "</p></div>";
          // Add the price of the product to the variable holding the overall price of the order
          grandTotal += localStorage.Item3*prices[2];
        }
        // Store the current button text of the addToCart button in a variable
        var def = this.innerHTML;
        // Temporarily change the button text to a confirmation text
        this.innerHTML = "Added to Cart!";
        // Update the overall price of the order displayed in the shopping cart dropdown to what is currently stored in the variable "grandTotal", which was updated in the above statement
        document.getElementById("orderTotal").innerHTML = grandTotal;
        clicked = true;
        // Set a timeout of 1 second to display the updated button text and then reset it back to the original
        setTimeout(function () {
          this.innerHTML = def;
          clicked = false;
        }.bind(this), 1000);
        // Set a timeout of 1 second and then reset the quantity in the quantity text field on the product card back to 0
        setTimeout(function () {
          document.getElementById("item3").value = 0;
        }.bind(this), 1000);
      }
    }
  };
}(false), this);

// Function to increase the quantity of Item4 by 1 in its quantity text field, called by the addItem button on the product card
function addItem4() {
  document.getElementById("item4").stepUp();
}

// Function to decrease the quantity of Item4 by 1 in its quantity text field, called by the removeItem button on the product card
function removeItem4() {
  document.getElementById("item4").stepDown();
}

// Function to add Item4 to the shopping cart
document.getElementById("item4-toCart").addEventListener("click", function (clicked) {
  return function () {
    // Check if a quantity of at least 1 has been selected
    if (document.getElementById("item4").value > 0) {
      if (!clicked) {
        // Check if Item4 already has an entry in the local storage
        if (localStorage.Item4) {
          // Add the quantity of the current selection to the quantity already stored in local storage as the value for Item4
          localStorage.Item4 = Number(localStorage.Item4) + Number(document.getElementById("item4").value);
          // Update the total price for Item4 in the checkout summary of the shopping cart according to the new quantity
          document.getElementById("total4").innerHTML = "€ " + localStorage.Item4*prices[3];
          // Add the price of the added quantity the variable storing overall cost of the order
          grandTotal += Number(document.getElementById("item4").value)*prices[3];
        } 
        // If no record exists in local storage for Item4, create the key Item4 and set the value to the quantity set in the quantity text field of the product card
        else {
          localStorage.Item4 = Number(document.getElementById("item4").value);
          // Add the product name of Item4 and the total price of the item depending on quantity to the order summary in the shopping cart
          document.getElementById("summary").innerHTML += 
            "<div class=' d-flex justify-content-between align-items-center'><p>" + items[3] + "</p><p id='total4'> € " + localStorage.Item4*prices[3] + "</p></div>";
          // Add the price of the product to the variable holding the overall price of the order
          grandTotal += localStorage.Item4*prices[3];
        }
        // Store the current button text of the addToCart button in a variable
        var def = this.innerHTML;
        // Temporarily change the button text to a confirmation text
        this.innerHTML = "Added to Cart!";
        // Update the overall price of the order displayed in the shopping cart dropdown to what is currently stored in the variable "grandTotal", which was updated in the above statement
        document.getElementById("orderTotal").innerHTML = grandTotal;
        clicked = true;
        // Set a timeout of 1 second to display the updated button text and then reset it back to the original
        setTimeout(function () {
          this.innerHTML = def;
          clicked = false;
        }.bind(this), 1000);
        // Set a timeout of 1 second and then reset the quantity in the quantity text field on the product card back to 0
        setTimeout(function () {
          document.getElementById("item4").value = 0;
        }.bind(this), 1000);
      }
    }
  };
}(false), this);

// Function to increase the quantity of Item5 by 1 in its quantity text field, called by the addItem button on the product card
function addItem5() {
  document.getElementById("item5").stepUp();
}

// Function to decrease the quantity of Item5 by 1 in its quantity text field, called by the removeItem button on the product card
function removeItem5() {
  document.getElementById("item5").stepDown();
}

// Function to add Item5 to the shopping cart
document.getElementById("item5-toCart").addEventListener("click", function (clicked) {
  return function () {
    // Check if a quantity of at least 1 has been selected
    if (document.getElementById("item5").value > 0) {
      if (!clicked) {
        // Check if Item5 already has an entry in the local storage
        if (localStorage.Item5) {
          // Add the quantity of the current selection to the quantity already stored in local storage as the value for Item5
          localStorage.Item5 = Number(localStorage.Item5) + Number(document.getElementById("item5").value);
          // Update the total price for Item5 in the checkout summary of the shopping cart according to the new quantity
          document.getElementById("total5").innerHTML = "€ " + localStorage.Item5*prices[4];
          // Add the price of the added quantity the variable storing overall cost of the order
          grandTotal += Number(document.getElementById("item5").value)*prices[4];
        } 
        // If no record exists in local storage for Item5, create the key Item5 and set the value to the quantity set in the quantity text field of the product card
        else {
          localStorage.Item5 = Number(document.getElementById("item5").value);
          // Add the product name of Item5 and the total price of the item depending on quantity to the order summary in the shopping cart
          document.getElementById("summary").innerHTML += 
            "<div class=' d-flex justify-content-between align-items-center'><p>" + items[4] + "</p><p id='total5'>€ " + localStorage.Item5*prices[4] + "</p></div>";
          // Add the price of the product to the variable holding the overall price of the order
          grandTotal += localStorage.Item5*prices[4];
        }
        // Store the current button text of the addToCart button in a variable
        var def = this.innerHTML;
        // Temporarily change the button text to a confirmation text
        this.innerHTML = "Added to Cart!";
        // Update the overall price of the order displayed in the shopping cart dropdown to what is currently stored in the variable "grandTotal", which was updated in the above statement
        document.getElementById("orderTotal").innerHTML = grandTotal;
        clicked = true;
        // Set a timeout of 1 second to display the updated button text and then reset it back to the original
        setTimeout(function () {
          this.innerHTML = def;
          clicked = false;
        }.bind(this), 1000);
        // Set a timeout of 1 second and then reset the quantity in the quantity text field on the product card back to 0
        setTimeout(function () {
          document.getElementById("item5").value = 0;
        }.bind(this), 1000);
      }
    }
  };
}(false), this);

// Function to increase the quantity of Item6 by 1 in its quantity text field, called by the addItem button on the product card
function addItem6() {
  document.getElementById("item6").stepUp();
}

// Function to decrease the quantity of Item6 by 1 in its quantity text field, called by the removeItem button on the product card
function removeItem6() {
  document.getElementById("item6").stepDown();
}

// Function to add Item6 to the shopping cart
document.getElementById("item6-toCart").addEventListener("click", function (clicked) {
  return function () {
    // Check if a quantity of at least 1 has been selected
    if (document.getElementById("item6").value > 0) {
      if (!clicked) {
        // Check if Item6 already has an entry in the local storage
        if (localStorage.Item6) {
          // Add the quantity of the current selection to the quantity already stored in local storage as the value for Item6
          localStorage.Item6 = Number(localStorage.Item6) + Number(document.getElementById("item6").value);
          // Update the total price for Item6 in the checkout summary of the shopping cart according to the new quantity
          document.getElementById("total6").innerHTML = "€ " + localStorage.Item6*prices[5];
          // Add the price of the added quantity the variable storing overall cost of the order
          grandTotal += Number(document.getElementById("item6").value)*prices[5];
        } 
        // If no record exists in local storage for Item6, create the key Item6 and set the value to the quantity set in the quantity text field of the product card
        else {
          localStorage.Item6 = Number(document.getElementById("item6").value);
          // Add the product name of Item6 and the total price of the item depending on quantity to the order summary in the shopping cart
          document.getElementById("summary").innerHTML += 
            "<div class=' d-flex justify-content-between align-items-center'><p>" + items[5] + "</p><p id='total6'>€ " + localStorage.Item6*prices[5] + "</p></div>";
          // Add the price of the product to the variable holding the overall price of the order
          grandTotal += localStorage.Item6*prices[5];
        }
        // Store the current button text of the addToCart button in a variable
        var def = this.innerHTML;
        // Temporarily change the button text to a confirmation text
        this.innerHTML = "Added to Cart!";
        // Update the overall price of the order displayed in the shopping cart dropdown to what is currently stored in the variable "grandTotal", which was updated in the above statement
        document.getElementById("orderTotal").innerHTML = grandTotal;
        clicked = true;
        // Set a timeout of 1 second to display the updated button text and then reset it back to the original
        setTimeout(function () {
          this.innerHTML = def;
          clicked = false;
        }.bind(this), 1000);
        // Set a timeout of 1 second and then reset the quantity in the quantity text field on the product card back to 0
        setTimeout(function () {
          document.getElementById("item6").value = 0;
        }.bind(this), 1000);
      }
    }
  };
}(false), this);

// Function to validate the checkout option, called by the checkout button
function validateCheckout() {
  // If the order total is 0, ie. no items have been added to the order, trigger the alert modal and display a corresponding message
  if (document.getElementById("orderTotal").innerHTML == 0) {
    $('#alertModal').modal('show');
    document.getElementById("message").innerHTML = "Looks like you haven't added anything to your cart yet!";
  } 
  // If the user isn't logged in trigger the alert modal and display a corresponding message
  else if (loggedIn == false) {
    $('#alertModal').modal('show');
    document.getElementById("message").innerHTML = "Please log in to complete your order!";
  } 
  // If the user is logged in and products have been added to the order trigger the checkout modal
  else {
    $('#checkoutModal').modal('show');
  }
}

// Function to clear all items from the shopping cart, called by the Clear All button as well as the Awesome button in the checkout confirmation modal
function clearAll() {
  // Clear everything from local storage
  localStorage.clear();
  // Remove all elements from the order summary in the shopping cart dropdown
  document.getElementById("summary").innerHTML = "";
  // Set the variable holding the overall total cost of the order back to 0
  grandTotal = 0;
  // Update the total cost as displayed in the shopping cart dropdown accordingly
  document.getElementById("orderTotal").innerHTML = grandTotal;
}
