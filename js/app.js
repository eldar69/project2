let slideInterval = 4000;

function getFigures() {
return document.getElementById('carousel').getElementsByTagName('figure');
}

function moveForward() {
    var pointer;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }