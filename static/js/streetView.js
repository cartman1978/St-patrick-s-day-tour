const positions = [
  { lat: 53.27011121893687, lng: -9.057669825747146 },
  { lat: 53.27079455034868, lng: -9.057184346199156 },
  { lat: 53.27154523986438, lng: -9.056765921584395 }
];

const povs = [
  {
    heading: 0,
    pitch: 0,
  },
  {
    heading: 0,
    pitch: 0,
  },
  {
    heading: 0,
    pitch: 0,
  },

]


const panorama = new google.maps.StreetViewPanorama(
  document.getElementById("street-view"),
  {
    position: positions[0],
    pov: {
      heading: 0,
      pitch: 0,
    },
  }
);

const tour = {
  currentPosition: 0
};

function changePosition(e, n) {
  panorama.setPosition(positions[n]);
  panorama.setPov(povs[n]);
  tour.currentPosition = [n];
}

document.querySelector('#map-nav-first').addEventListener('click', changePosition(0));
document.querySelector('#map-nav-previous').addEventListener('click', changePosition(tour.currentPosition-1));
document.querySelector('#map-nav-next').addEventListener('click', changePosition(tour.currentPosition+1));
document.querySelector('#map-nav-last').addEventListener('click', changePosition(positions.length-1));