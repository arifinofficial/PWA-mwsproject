var mymap = L.map('mapid').setView([-8.673176, 115.226704], 16);
var responeImage = document.querySelector('.gambar');
var responeReview = document.querySelector('.review');
       
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXJpZmlub2ZmaWNpYWwiLCJhIjoiY2puZ2JxcWR6MDFlbDNrcXRzaTV4OWh0ciJ9.ArfVFk_VoWZRgfZnPlbsIg'
}).addTo(mymap);

function showLocation(img, review, title) {
    document.getElementById('gmb').innerHTML = `<img src="${img}">`;
    document.getElementById('review').innerHTML =`<h1>${title}</h1> <br>` + review;
}

placesList = [];
const url = 'data/peta.json';
fetch(url)
.then(response => response.json())
.then(data => {
    let { places } = data;
    places.forEach((value, i) => {
        placesList.push(L.marker(value.lokasi).addTo(mymap));
        placesList[i].bindPopup(value.sponsor);
        placesList[i].on('click', () => showLocation(value.gambar, value.review, value.sponsor));
    });
})
.catch(err =>{
    console.log("Error" + err);
})


