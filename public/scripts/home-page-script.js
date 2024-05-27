$(function() {
    let hours = new Date().getHours()
    let greeting = $('.greeting-time')
    hours <= 5 ? $(greeting).text('Доброй ночи, ') 
    : hours <= 10 ? $(greeting).text('Доброе утро, ') 
    : hours <= 16 ? $(greeting).text('Добрый день, ') 
    : $(greeting).text('Добрый вечер, ')

    particlesJS('particles-js',
        {
            "particles": {
            "number": {
                "value": 110,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#f9f9f9"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#f9f9f9",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
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
                "repulse": {
                    "distance": 110
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );
})