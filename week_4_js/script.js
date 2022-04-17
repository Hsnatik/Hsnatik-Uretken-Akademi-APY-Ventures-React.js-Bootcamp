let container = document.querySelector('#galeri')
let getLink = 'https://source.unsplash.com/random/'

for(let i = 0; i < 8; i++) {
    const img = document.createElement('img')
    img.src = `${getLink}${getRandom()}`
    container.appendChild(img)
}

function getRandom() {
    return `${getNumara()}x${getNumara()}`
}

function getNumara() {
    var dizi = new Array(1,2,3,4,5,6,7,8,9)
    var hei = dizi[Math.floor(Math.random() * dizi.length)];
    return hei + 250
}
document.getElementById("galeri").onmousemove = function() {mouseEnter()};

