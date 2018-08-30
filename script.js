// document.getElementById('output').style.visibility = 'hidden';


document.getElementById('lbsinput').addEventListener('input', function (e) {
    // document.getElementById('output').style.visibility = 'visible';

    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = (lbs / 0.0022046).toFixed(3);
    document.getElementById('kgOutput').innerHTML = (lbs / 2.2046).toFixed(3);
    document.getElementById('ozOutput').innerHTML = (lbs * 16).toFixed(3);
    document.getElementById('tonsOutput').innerHTML = (lbs * 0.00045359237).toFixed(3);
});