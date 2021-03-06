<!-- index.html -->
<!DOCTYPE html>
<!-- define angular app -->
<html ng-app="wellMetApp">

<head>
    <!-- JASMINE -->
    <!-- <link rel="shortcut icon" type="image/png" href="../jasmine/lib/jasmine-2.3.4/jasmine_favicon.png">
        <link rel="stylesheet" type="text/css" href="../jasmine/lib/jasmine-2.3.4/jasmine.css">

        <script type="text/javascript" src="../jasmine/lib/jasmine-2.3.4/jasmine.js"></script>
        <script type="text/javascript" src="../jasmine/lib/jasmine-2.3.4/jasmine-html.js"></script>
        <script type="text/javascript" src="../jasmine/lib/jasmine-2.3.4/boot.js"></script>
 -->
    <!-- SCROLLS -->
    <!-- load bootstrap and fontawesome via CDN -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />

    <link rel="stylesheet" href="/css/style.css" />

    <!-- SPELLS -->
    <!-- load angular and angular route via CDN -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-route.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-mocks.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-animate.js"></script>
    <script src="/scripts/ui-bootstrap-tpls-0.14.3.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js"></script>
    <script src="/scripts/script.js"></script>
    <base href="/" />
</head>

<!-- HEADER AND NAVBAR -->
<header>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="/">Well Met!</a>
            </div>

            <ul class="nav navbar-nav navbar-right">
                <li><a href="/"><i class="fa fa-home"></i> Home</a></li>
                <li><a href="/contact"><i class="fa fa-comment"></i> Contact</a></li>
            </ul>
        </div>
    </nav>
</header>

<!-- MAIN CONTENT AND INJECTED VIEWS -->
<div id="main">
    {{ message }}
    <div ng-view></div>
    <!-- angular templating -->
    <!-- this is where content will be injected -->

</div>

</body>

</html>