import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }
  width: number = 100;
  height: number = 100;
  myStyle: Object = {
    'position': 'absolute',
    'width': '100%',
    'height': '100%',
    'z-index': 0,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };
  myParams: object = {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "../assets/images/bg-image-29.jpg",
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
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 3,
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
        "color": "#000",
        "opacity": 1,
        "width": 1.5
      },
      "move": {
        "enable": true,
        "speed": 4,
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
          "enable": true,
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
          "size": 20,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
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
  };
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function (event) {
      // array with texts to type in typewriter
      var dataText = ["Passion.", "Value.", "Results."];

      // type one text in the typwriter
      // keeps calling itself until the text is finished
      function typeWriter(text, i, fnCallback) {
          // chekc if text isn't finished yet
          if (i < (text.length)) {
              // add next character to h1
              document.getElementById("changingText").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
              // wait for a while and call this function again for next character
              setTimeout(function () {
                  typeWriter(text, i + 1, fnCallback)
              }, 100);
          }
          // text finished, call callback if there is a callback function
          else if (typeof fnCallback == 'function') {
              // call callback after timeout
              setTimeout(fnCallback, 700);
          }
      }
      // start a typewriter animation for a text in the dataText array
      function StartTextAnimation(i) {
          if (typeof dataText[i] == 'undefined') {
              setTimeout(function () {
                  StartTextAnimation(0);
              }, 500);
          }
          // check if dataText[i] exists
          if (i < dataText[i].length) {
              // text exists! start typewriter animation
              typeWriter(dataText[i], 0, function () {
                  // after callback (and whole text has been animated), start next text
                  StartTextAnimation(i + 1);
              });
          }
      }
      // start the text animation
      StartTextAnimation(0);

  });
  }

}
