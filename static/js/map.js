//set my map view
const map = L.map('mapid').setView([53.350499, -6.260577], 13);

//render the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//popup lat and lng with a click on the map
const popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

//set my icon marker
const myIcon = L.icon({
    iconUrl: 'img/Saint-Patrick.png',
    iconSize: [38, 40], // size of the icon
    iconAnchor: [22, 38], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26], // point from which the popup should open relative to the iconAnchor
});

const polygon = L.polygon([
    [53.352625, -6.261532],
    [53.339432, -6.272335],
    [53.338242, -6.269557]
], {
    color: '#009C5E',
    fillColor: '#FFD06C',
    fillOpacity: 0.5,
}).addTo(map).bindPopup("Parade");

//render markers with my icon
L.marker([53.352625, -6.261532], { icon: myIcon }).addTo(map).bindPopup('Start Parade');
L.marker([53.339432, -6.272335], { icon: myIcon }).addTo(map).bindPopup("Saint Patrick's Cathedral");
L.marker([53.338242, -6.269557], { icon: myIcon }).addTo(map).bindPopup("End Parade");