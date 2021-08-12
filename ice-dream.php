<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

    <!-- Font family -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

    <!-- Favicons created using favicon.io -->
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon_io/apple-touch-icon.png">
    <link rel="icon" href="images/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon_io/favicon-16x16.png">

    <!-- Link to custom CSS file -->
    <link rel="stylesheet" href="custom-style.css">

    <title>iceDream</title>

  </head>
  <body>

    <!-- Start of PHP connection -->
    <!-- Connect to G00387926 database -->
    <?php
      $dbhost = "localhost";
      $dbuser = "root";
      $dbpassword = "";
      $dbname = "G00387926";

      // Store all connection variables in one variable
      $connection = mysqli_connect($dbhost, $dbuser, $dbpassword, $dbname);

      // Test if connection was successful
      if(mysqli_connect_errno()) {
        die("DB Connection failed: " .
          mysqli_connect_error() .
            "(" . mysqli_connect_errno() . ")"
        );
      }

      // Display error if connection unsuccessful
      if (!$connection) {
        die('Could not connect: ' . mysqli_error());
      }

      // Initiate variable to store all data stored in the PRODUCTS table of the database
      $result = mysqli_query($connection, "SELECT * FROM PRODUCTS");
    ?>

    <!-- Bootstrap Navbar component - Top Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <a class="navbar-brand" href="#" id="logo-header">iceDream</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" style="justify-content: flex-end;">
        <!-- Shopping Cart component -->
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shopping Cart
        </a>
        <!-- Order summary, initialises as empty, holds all product names and prices (depending on quantity) as added to cart -->
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" style="max-width: 500px; min-width: 330px; padding: 35px; float: right;">
          <div id="summary">
          </div>
          <hr>
          <!-- Overall total cost of order, initialises as 0, is updated as products are added to cart -->
          <div class="h6 d-flex justify-content-between align-items-center">
        	<p>Order Total:</p>
          	<p>€ <span id="orderTotal">0</span></p>
          </div>
          <hr>
          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkout button calls validateCheckout() function -->
         	  <button class="btn btn-outline-custom my-2 btn-md" onclick="validateCheckout();">Checkout</button>
            <!-- Clear All button calls clearAll() function -->
            <button class="btn btn-outline-clear my-2 btn-sm" onclick="clearAll();">Clear All</button>
          </div>
        </div>
        <!-- Login button triggers Login Modal -->
        <button class="btn btn-outline-custom my-2 btn-md" id="login-btn-main" data-toggle="modal" data-target="#loginModal">Login</button>
      </div>
    </nav>
    <!-- END of Bootstrap Navbar component -->
    <br>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <!-- Bootstrap Carousel component shows 3 different images -->
          <div id="carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <!-- Main page title -->
              <div class="display-4" id="main-title">iceDream iceCream</div>
              <!-- First carousel image -->
              <div class="carousel-item active">
                  <img src="images/slide1.jpg" class="d-block w-100">
              </div>
              <!-- Second carousel image -->
              <div class="carousel-item">
                <img src="images/slide2.jpg" class="d-block w-100">
              </div>
              <!-- Third carousel image -->
              <div class="carousel-item">
                <img src="images/slide3.jpg" class="d-block w-100">
              </div>
            </div>
          </div>
          <!-- END of Bootstrap Carousel component -->

        </div>
      </div>
      <br><br>
      <div class="row">
        <div class="col-lg-12">
          <!-- Main page tagline -->
          <p id="tagline">~ Ireland's finest ice cream, delivered to your door in minutes. ~</p>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-lg-12 text-center" id="userwelcome">
          <!-- Second login button triggers Login Modal -->
          <button class="btn btn-outline-custom my-2 btn-lg" id="login-btn-other" data-toggle="modal" data-target="#loginModal">LOGIN TO ORDER</button>
        </div>
      </div>
      <br>
      <br>
      <br>
      <div class="row">
        <div class="col-lg-12">
          <!-- Header for products listed below -->
          <h2>Choose your favourite flavours:</h2>
        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <!-- Loop through the database table and for each existing row, do the following... -->
        <?php 
          while ($row = mysqli_fetch_array($result)) {
            echo "
              <!-- Display a new column and place a Bootstrap Card component inside -->
              <div class='col-lg-4'>

                <!-- Boostrap Card component -->
                <div class='card' style='width: 20rem;'>
                  <!-- Get the URL stored in the IMAGE column of the table to display each product image -->
                  <img src='" . $row['IMAGE'] . "'class='card-img-top'>
                  <div class='card-body'>
                    <div class='d-flex justify-content-between align-items-center'>
                      <!-- Get the name and price for each product from the NAME and PRICE columns of the table to display on each card -->
                      <h5 class='card-title product' id='name" . $row['ID'] . "'>" . $row['NAME'] . "</h5>
                      <h5 class='card-title'>€ <span class='cost' id='price" . $row['ID'] . "'>" . $row['PRICE'] . "</span></h5>
                    </div>
                     <p class='card-text'>How many scoops would you like?</p>
                     <div>
                     <!-- Text field for product quantity, using two bootstrap buttons to add or remove in steps of 1 -->
                      <div class='input-group mb-3' style='width: 45%; float: left;''>
                        <!-- Button to decrease quantity by 1 -->
                        <div class='input-group-prepend'>
                           <button class='btn btn-outline-dark qty-custom btn-sm' type='button' id='button-addon1' onclick='removeItem" . $row['ID'] . "();'>-</button>
                        </div>
                        <!-- Text field showing the current quantity selected for each product -->
                        <input type='number' class='form-control text-right' placeholder='0' min='0' id='item" . $row['ID'] . "'>
                        <!-- Button to increase quantity by 1 -->
                        <div class='input-group-append'>
                           <button class='btn btn-outline-dark qty-custom btn-sm' type='button' id='button-addon2' onclick='addItem" . $row['ID'] . "();'>+</button>
                        </div>
                      </div>
                      <!-- Button to add chosen quantity of selected product to the shopping cart -->
                      <button class='btn btn-outline-custom btn-md' id='item" . $row['ID'] . "-toCart' style='float: right;'>Add to Cart</button>
                     </div>
                  </div>
                </div> 
                <!-- END of Boostrap Card component -->
                <br><br>
              </div>
            ";
          }
          // Release returned data
          mysqli_free_result($result);
          // Close database connection
          mysqli_close($connection);
        ?>
        <!-- END of PHP connection -->
      </div>
      <br>
      <br>

      <!-- Bootstrap Navbar component - Footer Nav -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <!-- About button triggers About Modal -->
            <li class="nav-item">
              <a class="nav-link" href="" data-toggle="modal" data-target="#aboutModal">The Inside Scoop</a>
            </li>
          </ul>
          <!-- Footer page title -->
          <span class="navbar-text" id="logo-footer">
            iceDream
          </span>
        </div>
      </nav>
      <!-- END of Bootstrap Navbar component -->
    </div>

    <!-- Boostrap Modal component - Login Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- Header of Login Modal -->
            <h5 class="modal-title" id="loginModalLabel">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <br>
            <form>
              <!-- Error message initialises as empty, content generated dynamically depending on type of error, check performed when login button is clicked -->
              <div id="login-error">
              </div>
              <!-- Username field, accepts email only -->
              <div class="form-group">
                <input type="email" class="form-control" id="usrname" placeholder="Username">
              </div>
              <!-- Password field -->
              <div class="form-group">
                <input type="password" class="form-control" id="passwrd" placeholder="Password">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <!-- Button to dismiss modal -->
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>
            <!-- Login button calls validateLogin() function -->
            <button type="button" class="btn btn-outline-custom" onclick="validateLogin();">Login</button>
          </div>
        </div>
      </div>
    </div>
    <!-- END of Bootstrap Modal component -->

    <!-- Bootstrap Modal component - Checkout Modal -->
    <div class="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="checkoutModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- Header of Checkout Modal -->
            <h5 class="modal-title" id="checkoutModalLabel">Checkout</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- Order checkout confirmation -->
          <div class="modal-body">
            <br>
            <p class="h5 text-center">Thank you for your order!</p> 
            <br>
            <p class="text-center">Your ice dream will be delivered shortly.</p>
          </div>
          <div class="modal-footer">
            <!-- Button to dismiss modal and reset shopping cart, calls clearAll() function -->
            <button type="button" class="btn btn-outline-custom" data-dismiss="modal" onclick="clearAll();">Awesome</button>
          </div>
        </div>
      </div>
    </div>
    <!-- END of Bootstrap Modal component -->

    <!-- Bootstrap Modal component - Alert Modal -->
    <div class="modal fade" id="alertModal" tabindex="-1" aria-labelledby="alertModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- Header of Alert Modal -->
            <h5 class="modal-title" id="alertModalLabel">Nearly there...</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- Modal body initialises as empty, content dynamically generated, depending on what action triggers modal -->
          <div class="modal-body">
            <br>
            <p class="text-center" id="message"></p> 
            <br>

          </div>
          <div class="modal-footer">
            <!-- Button to dismiss modal -->
            <button type="button" class="btn btn-outline-custom" data-dismiss="modal">Okay</button>
          </div>
        </div>
      </div>
    </div>
    <!-- END of Bootstrap Modal component -->

    <!-- Bootstrap Modal component - About Modal -->
    <div class="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- Header of About Modal -->
            <h5 class="modal-title" id="exampleModalLabel">The Inside Scoop</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- About info -->
          <div class="modal-body">
            <br>
            <p class="text-center">This is a college assignment for the H.Dip in Software Development, Semester 3, Web App Development.</p> 
            <p class="text-center">Martina Schwarz, G00387926</p>
          </div>
          <div class="modal-footer">
            <!-- Button to dismiss modal -->
            <button type="button" class="btn btn-outline-custom" data-dismiss="modal">Okay Then</button>
          </div>
        </div>
      </div>
    </div>
    <!-- END of Bootstrap Modal component -->

    <!-- Link to custom JavaScript file -->
    <script type="text/javascript" src="custom-script.js"></script>

    <!-- Bootstrap JavaScript; jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

  </body>
</html>