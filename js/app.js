const el = document.getElementById('cat'),
    clicks = document.getElementById('clicks');

let count = 0;

el.addEventListener('click', addClick, false);

function addClick(){
  clicks.firstChild.nodeValue = ++count;
}
