document.querySelectorAll('input[type=color]').forEach(function(picker) {

    var targetLabel = document.querySelector('label[for="' + picker.id + '"]'),
        codeArea = document.createElement('span');

    codeArea.innerHTML = picker.value;
    targetLabel.appendChild(codeArea);

    picker.addEventListener('change', function() {
        codeArea.innerHTML = picker.value;
        targetLabel.appendChild(codeArea);
    });
});

function showperview() {
    document.getElementById('showperviewscreen').style.display = "block";
}

function hideperview() {
    document.getElementById('showperviewscreen').style.display = "none";
}