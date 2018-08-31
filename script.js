// document.getElementById('output').style.visibility = 'hidden';


document.getElementById('lbsinput').addEventListener('input', function (e) {
    // document.getElementById('output').style.visibility = 'visible';

    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = (lbs / 0.0022046).toFixed(3);
    document.getElementById('kgOutput').innerHTML = (lbs / 2.2046).toFixed(3);
    document.getElementById('ozOutput').innerHTML = (lbs * 16).toFixed(3);
    document.getElementById('tonsOutput').innerHTML = (lbs * 0.00045359237).toFixed(3);
});

document.getElementById('graminput').addEventListener('input', function (e) {
    // document.getElementById('output').style.visibility = 'visible';

    let gram = e.target.value;
    document.getElementById('poundsOutput').innerHTML = (gram / 453.59237).toFixed(3);
    document.getElementById('kgOutput2').innerHTML = (gram / 1000).toFixed(3);
    document.getElementById('ozOutput2').innerHTML = (gram / 28.34952).toFixed(3);
    document.getElementById('tonsOutput2').innerHTML = (gram * 1000000).toFixed(3);
});

document.getElementById('kginput').addEventListener('input', function (e) {
    // document.getElementById('output').style.visibility = 'visible';

    let kg = e.target.value;
    document.getElementById('gramsOutput3').innerHTML = (kg * 1000).toFixed(3);
    document.getElementById('poundsOutput3').innerHTML = (kg / 0.45359237).toFixed(3);
    document.getElementById('ozOutput3').innerHTML = (kg / 0.02834952).toFixed(3);
    document.getElementById('tonsOutput3').innerHTML = (kg / 1000).toFixed(3);
});

document.getElementById('ounceinput').addEventListener('input', function (e) {
    // document.getElementById('output').style.visibility = 'visible';

    let ounce = e.target.value;
    document.getElementById('gramsOutput4').innerHTML = (ounce * 28.3495).toFixed(3);
    document.getElementById('kgOutput4').innerHTML = (ounce * 0.02834952).toFixed(3);
    document.getElementById('poundsOutput4').innerHTML = (ounce / 16).toFixed(3);
    document.getElementById('tonsOutput4').innerHTML = (ounce / 16).toFixed(3);
});