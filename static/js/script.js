//set my map view
const map = L.map('mapid').setView([51.89797, -8.47061], 13);

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
    iconUrl: 'static/images/Saint-Patrick.png',
    iconSize: [38, 40], // size of the icon
    iconAnchor: [22, 38], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26], // point from which the popup should open relative to the iconAnchor
});

const polygon = L.polygon([
    [51.897395, -8.45089],
    [53.339432, -6.272335],
    [53.338242, -6.269557]
], {
    color: '#009C5E',
    fillColor: '#FFD06C',
    fillOpacity: 0.5,
}).addTo(map).bindPopup("Parade");

//render markers with my icon
L.marker([51.897395, -8.45089], { icon: myIcon }).addTo(map).bindPopup('Docklands');
L.marker([51.896762, -8.470631], { icon: myIcon }).addTo(map).bindPopup("Parade Starts");
L.marker([51.904386, -8.442478], { icon: myIcon }).addTo(map).bindPopup("End Parade");
