<html>
<head>
    <title>Conversion Chart</title>
    <link href="css/conversion.css" rel="stylesheet">
<head>
<body>
    <h1>Conversion Chart</h1>
    <div>
        <p>
            <div id="chartInputs">
                <input type="number" id="amountValue" min="1" value="1">

                <select id="unit">
                    <option value="Select a Unit">Select a Unit</option>
                    <option value="Teaspoon">Teaspoon</option>
                    <option value="Tablespoon">Tablespoon</option>
                    <option value="Ounce">Ounce</option>
                    <option value="Cup">Cup</option>
                    <option value="Pint">Pint</option>
                    <option value="Quart">Quart</option>
                    <option value="Gallon">Gallon</option>
                </select>

                <label>=</label>
            </div>
        </p>
    <div>
    <div id="chartDiv"></div>

    <script src="js/conversion.js"></script>
</body>
<html>
