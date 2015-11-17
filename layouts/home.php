<nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="active"><a href="./">Default <span class="sr-only">(current)</span></a></li>
              <li><a href="#/login">Login</a></li>
              <li><a href="#/registration">Sign Up</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>




            <!-- /.navbar-collapse -->
       
        <!-- /.container -->
    </nav>

    <!-- Page Content -->
    <div class="container">

        <div class="row">

            <div class="col-md-3">
                <p class="lead">Shop Name</p>
                <div class="list-group">
                    <a href="#" class="list-group-item">Category 1</a>
                    <a href="#" class="list-group-item">Category 2</a>
                    <a href="#" class="list-group-item">Category 3</a></br>
                    
<label>Price</label>
<div class="checkbox">
    <label>
      <input type="checkbox"  ng-model="query" ng-change=setValue(0,2000)  >Rs 2000 and Below 
    </label>
  </div>

  <div class="checkbox">
    <label>
      <input type="checkbox"  ng-model="query2" ng-change=setValue(2000,3000) >Rs 2000 - Rs 3000 
    </label>
  </div>

  <div class="checkbox">
    <label>
      <input type="checkbox"  ng-model="query3" ng-change=setValue(3000,4000) >Rs 3000 - Rs 4000
    </label>
  </div>

  <div class="checkbox">
    <label>
      <input type="checkbox"  ng-model="query4" ng-change=setValue(4000,6000) >Rs 4000 and Above 
    </label>
  </div></br>

 
<label>Brand</label>

 <div class="checkbox">
    <label>
      <input type="checkbox" ng-model="brand1" ng-change=find("Micromax")>Micromax 
    </label>
  </div>
 
<div class="checkbox">
    <label>
      <input type="checkbox" ng-model="brand2" ng-change=find("karbon")>Karbon 
    </label>
  </div>
 
<div class="checkbox">
    <label>
      <input type="checkbox" ng-model="brand3" ng-change=find("Bsnl")>Bsnl 
    </label>
  </div></br></br>
<label>Sort By</label>
  <div class="checkbox">
    <label>
     <input type="checkbox" ng-model="high" ng-change=sorthigh()>High Price 
    </label>
    
  </div>

<div class="checkbox">
    <label>
      <input type="checkbox" ng-model="low" ng-change=sortlow()>Low Price 
    </label>
     
  </div>





                </div>
            </div>

            <div class="col-md-9">

                <div class="row carousel-holder">

                    <div class="col-md-12">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img class="slide-image" src="images/images 2.jpg" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="images/images.jpg" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="images/online-shopping-1.jpg" alt="">
                                </div>
                            </div>
                            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="row">
                   
                    <div class="col-sm-4 col-lg-4 col-md-4" ng-repeat="user in data.data1 |orderBy:sortKey:reverse | limitTo:5 track by $index">
                        <div class="thumbnail">
                            <img src={{user.image}} alt="comming soon" ng-model='image' style="
                             width: 90px;"/>
                            <div class="caption">
                                <h5 class="pull-right" ng-model='price'>Price:{{user.price}}</h5>
                                <h5><label ng-model='product'>{{user.Product_name}}</label>
                                </h5>
                                <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </p>
                            </div>
                        </div>
                    </div>            
                                     <ul class="pagination">
                                        <li ng-repeat="i in getNumber(myNumber) track by $index"><a href="#" ng-click=orderby($index) >{{$index + 1}}</a></li> 
                                    </ul>
                                  
                              


                </div>

            </div>

        </div>

    </div>
    <!-- /.container -->

    <div class="container">

        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
            </div>
        </footer>

    </div>
    <!-- /.container -->

    <!-- jQuery -->
   