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


    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="service.js"></script>
    <script src="main.js"></script>
</body>
</html>
