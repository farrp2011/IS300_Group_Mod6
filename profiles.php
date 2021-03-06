<!DOCTYPE html>

<?php 
    include_once './site_defintions.php';
?>

<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?php echo SITE_NAME_SHORT?> -- Profiles</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">

    <!-- Custom styles for this template -->
    <link href="css/business-casual.css" rel="stylesheet">

  </head>

  <body>

    <div class="tagline-upper text-center text-heading text-shadow text-white mt-5 d-none d-lg-block"><?php echo SITE_NAME?></div>
    <div class="tagline-lower text-center text-expanded text-shadow text-uppercase text-white mb-5 d-none d-lg-block"><?php echo STREET?> | <?php echo CITY?>, <?php echo STATE?> | <?php echo PHONE?></div>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-faded py-lg-4">
      <div class="container">
        <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#"><?php echo SITE_NAME_SHORT?></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="index.php">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="about.php">About</a>
            </li>
            <li class="nav-item active px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="profiles.php">Profiles</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="contact.php">Contact</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="Game.php">Games</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">

      <div class="bg-faded p-4 my-4">
        <hr class="divider">
        <h2 class="text-center text-lg text-uppercase my-0"><strong>Profiles</strong>
          
        </h2>
        <hr class="divider">
      </div>
        
      <div class="bg-faded p-4 my-4">
        <div class="card card-inverse">
          <!--<img class="card-img img-fluid w-100" src="img/slide-3.jpg" alt="">-->
            <iframe class="profile_view" src="http://localhost/IS300_Group_Mod6/view/paul.html">
              <p>Your browser does not support iframes.</p>
            </iframe>
        </div>
      </div>
        
      <div class="bg-faded p-4 my-4">
        <div class="card card-inverse">
          <!--<img class="card-img img-fluid w-100" src="img/slide-3.jpg" alt="">-->
            <iframe class="profile_view" src="http://localhost/IS300_Group_Mod6/view/tobiyah.html">
              <p>Your browser does not support iframes.</p>
            </iframe>
        </div>
      </div>

      <div class="bg-faded p-4 my-4">
        <div class="card card-inverse">
          <!--<img class="card-img img-fluid w-100" src="img/slide-3.jpg" alt="">-->
            <iframe class="profile_view" src="http://localhost/IS300_Group_Mod6/view/jennifer_s/sipes_jennifer.html">
              <p>Your browser does not support iframes.</p>
            </iframe>
        </div>
      </div>

      <div class="bg-faded p-4 my-4">
        <div class="card card-inverse">
          <!--<img class="card-img img-fluid w-100" src="img/slide-3.jpg" alt="">-->
            <iframe class="profile_view" src="http://localhost/IS300_Group_Mod6/view/paul.html">
              <p>Your browser does not support iframes.</p>
            </iframe>
        </div>
      </div>

      <!-- Pagination -->
      <div class="bg-faded p-4 my-4">
        <ul class="pagination justify-content-center mb-0">
          <li class="page-item">
            <a class="page-link" href="#">&larr; Older</a>
          </li>
          <li class="page-item disabled">
            <a class="page-link" href="#">Newer &rarr;</a>
          </li>
        </ul>
      </div>

    </div>
    <!-- /.container -->

    <footer class="bg-faded text-center py-5">
      <div class="container">
        <p class="m-0">Copyright &copy; <?php echo GROUP_NAME ?> 2017</p>
      </div>
    </footer>

    <!-- Bootstrap core JavaScript -->
    <script src="controller/goldenRatio.js"></script>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  </body>

</html>
