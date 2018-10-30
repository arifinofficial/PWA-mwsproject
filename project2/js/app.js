var mymap = L.map('mapid').setView([-8.701660,115.169856], 13);
var responeImage = document.querySelector('.gambar');
var responeReview = document.querySelector('.review');
       
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXJpZmlub2ZmaWNpYWwiLCJhIjoiY2puZ2JxcWR6MDFlbDNrcXRzaTV4OWh0ciJ9.ArfVFk_VoWZRgfZnPlbsIg'
}).addTo(mymap);

let arr_marker = [
    [-8.744998, 115.182891],
    [-8.721549, 115.182493],
    [-8.699893, 115.185033],
    [-8.676610, 115.206523],
    [-8.651693, 115.195377],
    [-8.697119, 115.168683],
];

for (i of arr_marker){
    let popup = L.marker(i).addTo(mymap).on('click', clickMyMap);
    popup.bindPopup("Koordinat " + i);
    // popup.on('click', clickMyMap);
}


function clickMyMap(e){
    let imgContent = '';
    let review = '';
    // if(e.latlng.toString() == "LatLng(-8.721549, 115.182493)")
    // {
    //     imgContent = '<p>Dewa Ruci</p>';
    // }
    switch (e.latlng.toString()) {
        case 'LatLng(-8.721549, 115.182493)':
            imgContent = '<img src="https://geo1.ggpht.com/maps/photothumb/fd/v1?bpb=ChAKDnNlYXJjaC5UQUNUSUxFEiAKEgndalsirkbSLRGEt7D1NGuYtioKDQAAAAAVAAAAABoGCMgBEJgD&gl=ID"> <br> Image &copy; Google Maps';
            review = '<h1>Simpang Siur / Simpang Dewa Ruci</h1> <p>Lokasi ini berada pada perbatasan Jl. Sunset Road &amp; Jl. Bypass Ngurah Rai. Jam padat lalulintas biasanya terjadi pada pukul 07.00 - 09.00, 12.00 - 14.00, dan 16.00 - 19.00 pada hari kerja.</p>';
            break;
        case 'LatLng(-8.744998, 115.182891)':
            imgContent = '<img src="https://geo0.ggpht.com/maps/photothumb/fd/v1?bpb=ChAKDnNlYXJjaC5UQUNUSUxFEiAKEgnxSpU3D0TSLRF-_R8W6ShbyCoKDQAAAAAVAAAAABoGCMgBEJgD&gl=ID"> <br> Image &copy; Google Maps';
            review = '<h1>Bundaran Bandara Ngurah Rai</h1> <p>Lokasi ini berada pada Jl. Bypass Ngurah Rai. Jam padat lalulintas biasanya terjadi pada pukul 07.00 - 09.00, 12.00 - 14.00, dan 16.00 - 19.00 pada hari kerja.</p>';
            break;
        case 'LatLng(-8.699893, 115.185033)':
            imgContent = '<img src="https://geo0.ggpht.com/cbk?panoid=mztrVkvvSlzWg0HiC5JL4g&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=200&yaw=304.37878&pitch=0&thumbfov=100"> <br> Image &copy; Google Maps';
            review = '<h1>Pertigaan Jl. Nakula</h1> <p>Lokasi ini berada di antara Jl. Imam Bonjol &amp; Jl. Nakula. Jam padat lalulintas biasanya terjadi pada pukul 12.00 - 14.00 dan 16.00 - 19.00 pada hari kerja.</p>';
            break;
        case 'LatLng(-8.67661, 115.206523)':
            imgContent = '<img src="https://geo0.ggpht.com/maps/photothumb/fd/v1?bpb=ChAKDnNlYXJjaC5UQUNUSUxFEiAKEglJg075w0DSLRHGzQrUDrI37SoKDQAAAAAVAAAAABoGCMgBEJgD&gl=ID"> <br> Image &copy; Google Maps';
            review = '<h1>Simpang Enam</h1> <p>Lokasi ini berada di Jl. Teuku Umar. Jam padat lalulintas biasanya terjadi pada pukul 12.00 - 14.00 dan 16.00 - 19.00 pada hari kerja.</p>';
            break;
        case 'LatLng(-8.651693, 115.195377)':
            imgContent = '<img src="https://geo2.ggpht.com/cbk?panoid=JZkXkerg8tw9Umk66HU9Lw&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=200&yaw=254.03517&pitch=0&thumbfov=100"> <br> Image &copy; Google Maps';
            review = '<h1>Perempatan Gunung Agung</h1> <p>Lokasi ini berada di antara Jl. Gunung Agung &amp; Jl. Mahendradatta. Jam padat lalulintas biasanya terjadi pada pukul 12.00 - 14.00 dan 16.00 - 19.00 pada hari kerja.</p>';
            break;
        case 'LatLng(-8.697119, 115.168683)':
            imgContent = '<img src="https://geo3.ggpht.com/cbk?panoid=wT7XsdfHp3vOrDJm8mMprg&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=200&yaw=97.73086&pitch=0&thumbfov=100"> <br> Image &copy; Google Maps';
            review = '<h1>Perempatan Jl. Raya Seminyak</h1> <p>Lokasi ini berada di antara JL. Raya Seminyak, Jl. Nakula, &amp; JL. Arjuna. Jam padat lalulintas biasanya terjadi pada pukul 12.00 - 14.00 dan 16.00 - 20.00 pada hari kerja dan hari libur.</p>';
            break;
        default:
            imgContent = '<p>OPPS....</p>';
            break;
    }
    responeImage.innerHTML=imgContent;
    responeReview.innerHTML=review;
}