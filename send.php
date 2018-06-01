<html>
    <style media="screen">* {overflow: hidden !important;}</style>
    <head>

      <meta charset="utf-8">
      <title>Script | Get Going With JS</title>
      <link href="https://fonts.googleapis.com/css?family=Caveat|Permanent+Marker|Ubuntu" rel="stylesheet">
      <!-- resit browser to defualt -->
      <link rel="stylesheet" href="css/fontawesome-all.css">
      <link rel="stylesheet" href="css/normalize.css" media="screen" title="no title" charset="utf-8">
      <link rel="stylesheet" href="css/test.css" media="screen" title="no title" charset="utf-8">
      <link rel="stylesheet" href="css/styles.css" media="screen" title="no title" charset="utf-8">

  </head>
<!-- There we go ..-->
<body class="txt-center">
  <!-- start navigation bar -->
    <nav>
        <div class="navbar">
          <div class="container">
            <a href="index.html" class="clearlink nav-link"><img class="logo" src="images/script.png" alt="Script"/></a>
            <a href="contact.html" class="clearlink nav-link"><span class="cont-link blue">Contact Prof!</span></a>
          </div>
        </div>
      <div class="clearfix"></div>
    </nav>
  <!-- __end navigation bar -->

  <!-- start of header
  ======================================================================================= -->

    <header class="header" style="height:800px;">
      <div class="container">
        <h1 class="grey">Thanks, <?php echo $_POST["name"]; ?></h1>
        <br>
        <br>
        <h2 class="des-p grey">
            Will get back to you within 3 working days! <?php echo $_POST["email"]; ?>
        </h2>
      </div>
    </header>
  <div class="clearfix"></div>
  <!-- __end of header
  ======================================================================================= -->
</body>
</html>
