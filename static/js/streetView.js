const positions = [
  { lat: 53.27011121893687, lng: -9.057669825747146 },
  { lat: 53.27079455034868, lng: -9.057184346199156 },
  { lat: 53.27156276553156, lng: -9.056785212463108 },
  { lat: 53.27181299233833, lng: -9.055605040510063 },
  { lat: 53.27199264145975, lng: -9.054575072237048 },
  { lat: 53.27231344158099, lng: -9.053416357930836 },
  { lat: 53.27262140741972, lng: -9.053008662165237 },
  { lat: 53.273057688560186, lng: -9.052289830157473 },
  { lat: 53.27368002309445, lng: -9.051452980937581 },
  { lat: 53.27437933662953, lng: -9.050583945226704 },
  { lat: 53.27520694981238, lng: -9.049092637014786 },
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
    heading: 90,
    pitch: 0,
  },
  {
    heading: 70,
    pitch: 0,
  },
  {
    heading: 80,
    pitch: 0,
  },
  {
    heading: 80,
    pitch: 0,
  },
  {
    heading: 60,
    pitch: 0,
  },
  {
    heading: 50,
    pitch: 0,
  },
  {
    heading: 40,
    pitch: 0,
  },
  {
    heading: 55,
    pitch: 0,
  },
  {
    heading: 65,
    pitch: 0,
  }
];

var panorama;

function initMap() {
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"),
    {
      position: positions[0],
      pov: {
        heading: 0,
        pitch: 0,
      },
    }
    );
}

const tour = {
  currentPosition: 0
};

function changePosition(n) {
  console.log(1);
  if (n < 0) {
    n = positions.length - 1;
  }
  if (n > positions.length - 1) {
    n = 0;
  }
  panorama.setPosition(positions[n]);
  panorama.setPov(povs[n]);
  tour.currentPosition = n;
}

const firstButton = document.querySelector('#map-nav-first');
const previousButton = document.querySelector('#map-nav-previous');
const nextButton = document.querySelector('#map-nav-next');
const lastButton = document.querySelector('#map-nav-last');


firstButton.addEventListener('click', function () {
  changePosition(0);
});

previousButton.addEventListener('click', function (){
  changePosition(tour.currentPosition-1);
});

nextButton.addEventListener('click', function () {
  changePosition(tour.currentPosition+1);
});

lastButton.addEventListener('click', function() {
  changePosition(positions.length-1);
});
