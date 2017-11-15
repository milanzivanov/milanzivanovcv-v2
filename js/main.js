console.log('This is the Main.js file. It should be the 3rd and final file');
// modal
let modal = document.getElementById("simpleModal");
let modalBtn = document.getElementById("modalBtn");
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen to open click
modalBtn.addEventListener("click", openModal);
// listen to close click
closeBtn.addEventListener("click", closeModal);
// listen to outside click
window.addEventListener("click", clickOutside);

// function to open modal
function openModal() {
    modal.style.display = "block";
}
// function to close modal
function closeModal() {
    modal.style.display = "none";
}
// // function to close modal when clicked outside
function clickOutside(e) {
    if(e.target === modal) {
        modal.style.display = "none";
    }
}

// particlesjs
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100
      },
      "color": {
        "value": "#ddd"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#ddd"
        }
      },
      "image":{
        "src": "some link"
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim":{
          "enable": false,
          "speed": 1
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 100,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ddd",
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none"
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      },
      "modes": {
        "repulse": {
          "distance": 50,
          "duration": 0.4
        }
      }
    }
});