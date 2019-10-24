document.getElementById('btn1').addEventListener('click', displayMessage);

function displayMessage() {
let verbEnding = document.getElementById('verb').value;
let pluralNoun = document.getElementById('plunoun').value;
let adjective = document.getElementById('adjective').value;
let preVerb = document.getElementById('preverb').value;
let noun = document.getElementById('noun').value;

let message = 'There are too many ' + verbEnding + ' ' + pluralNoun + ' on this ' +
adjective + ' airplane, I screamed. "Somebody has to ' + preVerb + ' on the' + noun + ' to solve this problem!'

document.getElementById('output').innerHTML = message;
}