
let img_src = [
    'disney-clipart-2.png',
    'disney-clipart-14.png',
    'disney-clipart-3.gif',
    'leprechaun.png',
    'Leprechaun_with_Beer.png',
    'saint-patricks-day-mickey.png'
];

// Name images included
let image_type = img_src.map(function(cuurentEl, index) { return "image" + index });

// Configure particles-js
pJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // No of images
            "density": {
                "enable": true,
                "value_area": 320 // Specify area (Lesser is greater density)
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": image_type, // Add images to particle-js
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 4
            }
        },
        "opacity": {
            "value": .9, // Adjust opactiy
            "random": false,
            "anim": {
                "enable": false,
                "speed": 2,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 45, // Adjust the image size
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 1,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 4, // Speed of particle motion
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 50,
                "duration": 0.1
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});