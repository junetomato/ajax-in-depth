<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>the Flow</title>
    <style>
    @import url('https://rsms.me/inter/inter.css');
    html { font-family: 'Inter', sans-serif; }
    @supports (font-variation-settings: normal) {
        html { font-family: 'Inter var', sans-serif; }
    }
    </style>
</head>
<body>

    <button id="click-me">ClickMe</button>
    номер страницы: <input type="number" value="" id="page-number">

    <div id="result"></div>


    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="service.js"></script>
    <script src="main.js"></script>
</body>
</html>
