// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, random, background, fill, color, rect, ellipse, square,
stroke, noStroke, noFill, strokeWeight, colorMode,  width, height, text, HSB,
line, mouseX, mouseY, loadImage, Caman, src, saveCanvas*/

//  p5.js
let photo, myImg;
let originalWidth, originalHeight;
let downloadNow;
let c;

// function preload() {
//   myImg = document.querySelector("#output");
//   photo = loadImage(myImg.src)
// }
function setup() {
  //inititalize some variables)
  originalWidth = 400;
  originalHeight = 400;

  // Grey square for image
  // c = createCanvas(width, 400);
  // createCanvas(width, 400);
  // background(55);

  downloadNow = false;
  
  // to have the image as the background of the canvas, the image and canvas must be the same size (in pixels)
  
}

function imgSize() {
  
//   let files = document.getElementById("file");
//   files.addEventListener("change", (event) => {
//     const fileList = event.target.files;
//     console.log(fileList);
//       });
//   let fileArray = [];
  
//   var image = document.getElementById("output");
//   let uploadNewURL = URL.createObjectURL(event.target.files[0]);
//   image.src = uploadNewURL;
  
  myImg = document.querySelector("#output");
  // URL = URL.createObjectURL(myImg.src);
  photo = loadImage(myImg.src);
  originalWidth = myImg.naturalWidth;
  originalHeight = myImg.naturalHeight;
  console.log(originalWidth)
  alert("Original width=" + originalWidth + ", " + "Original height=" + originalHeight + "." + " Adjusting Canvas Size...");
}

// var loadFile = function(event) {
//       // const files = document.getElementById("files");
//       // files.addEventListener("change", event => {
//       //   const fileList = event.target.files;
//       //   console.log(fileList);
//       //   });
        
//       var image = document.getElementById("output");
//       image.src = URL.createObjectURL(event.target.files[0]);
//     }
                            




// function loadFile(event) {
//   let photoURL = URL.createObjectURL(event.target.files[0]);
//   photo = loadImage(photoURL);
//   myImg = document.querySelector("#output");
//   originalWidth = myImg.naturalWidth;
//   originalHeight = myImg.naturalHeight;
//   alert("Original width=" + originalWidth + ", " + "Original height=" + originalHeight + "." + " Adjusting Canvas Size...");
//   console.log(myImg.src);
  
// }


//DRAW FUNC
// function draw() {
//   // Grey square for image
//   let c = createCanvas(originalWidth, originalHeight);
//   //c.parent("experiment")
//   // createCanvas(originalWidth, originalHeight);
//   background(51);
//   // if (!object.getAttribute("data-params") {
//     // data attribute doesn't exist or is empty    */
  
  
  
//   //THIS DOWNLOAD ONLY WORKS FOR THE P5JS CANVAS
//   if (downloadNow) {
//     saveCanvas(c, 'myCover', 'jpg');
//     downloadNow = false;
//   }
  
// }
    



//loading the image
  // var img = document.createElement("img");
  // img.src = "img.png";
  // var src = document.getElementById("UploadPhoto");
  // src.appendChild(img);


var loadFile = function(event) {
      var image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
    };

// manual filters
//dw about the red dots for caman, it still works

//LIGHT EFFECTS
var brightnessRangeVar = document.getElementById("brightnessRange");
brightnessRangeVar.addEventListener("change", brightnessEffect);
// var currentBrightness = 50;

function brightnessEffect(event) {
  Caman("#output", function() {
    console.log("Brightness+")
    this.brightness(10).render();
  })
};

function lowerBrightnessEffect(event) {
  Caman("#output", function() {
    console.log("Brightness-")
    this.brightness(-10).render();
  })
}

function exposureEffect(event) {
  Caman("#output", function() {
    console.log("exposure+")
    this.exposure(10).render();

  })
};

function lowerExposureEffect(event) {
  Caman("#output", function() {
    console.log("exposure-")
    this.exposure(-10).render();

  })
};

function contrastEffect(event) {
  Caman("#output", function() {
    console.log("contrast+")
    this.contrast(10).render();
  })
};

function lowerContrastEffect(event) {
  Caman("#output", function() {
    console.log("contrast-")
    this.contrast(-10).render();
  })
};

//COLOR EFFECCTS

function hueEffect(event) {
  Caman("#output", function() {
    console.log("HUE+")
    this.hue(10).render();
  })
};

function lowerHueEffect(event) {
  Caman("#output", function() {
    console.log("HUE-")
    this.hue(-10).render();
  })
};

function vibranceEffect(event) {
  Caman("#output", function() {
    console.log("vibrance+")
    this.vibrance(10).render();
  })
};

function lowerVibranceEffect(event) {
  Caman("#output", function() {
    console.log("vibrance-")
    this.vibrance(-10).render();
  })
};

function saturationEffect(event) {
  Caman("#output", function() {
    console.log("saturation+")
    this.saturation(10).render();
  })
};

function lowerSaturationEffect(event) {
  Caman("#output", function() {
    console.log("saturation-")
    this.saturation(-10).render();
  })
};

function sepiaEffect(event) {
  Caman("#output", function() {
    console.log("sepia+")
    this.sepia(10).render();
  })
};
  
function lowerSepiaEffect(event) {
  Caman("#output", function() {
    console.log("sepia-")
    this.sepia(-10).render();
  })
};

//OTHER
function addBlur(event) {
  Caman("#output", function() {
    console.log("Channels")
    this.stackBlur(5).render();
  })
}

function lowerBlur(event) {
  Caman("#output", function() {
    console.log("Channels")
    this.stackBlur(-5).render();
  })
}

function addNoise(event) {
  Caman("#output", function() {
    console.log("noise+")
    this.noise(5).render();
  })
}

//FILTERS
function greyscale() {
  Caman("#output", function() {
    this.greyscale().render();
  })
}

function invert() {
  Caman("#output", function() {
    this.invert().render();
  })
}

function vintage(event) {
  Caman("#output", function() {
    this.vintage().render();
  })
}

function herMajesty(event) {
  Caman("#output", function() {
    this.herMajesty().render();
  })
}

function lomo(event) {
  Caman("#output", function() {
    this.lomo().render();
  })
}

function crossProcess(event) {
  Caman("#output", function() {
    this.crossProcess().render();
  })
}

function clarity(event) {
  Caman("#output", function() {
    this.clarity().render();
  })
}

function sinCity(event) {
  Caman("#output", function() {
    this.sinCity().render();
  })
}

function sunrise(event) {
  Caman("#output", function() {
    this.sunrise().render();
  })
}

function love(event) {
  Caman("#output", function() {
    this.love().render();
  })
}

function grungy(event) {
  Caman("#output", function() {
    this.grungy().render();
  })
}

function glowingSun(event) {
  Caman("#output", function() {
    this.glowingSUn().render();
  })
}

function orangePeel(event) {
  Caman("#output", function() {
    this.orangePeel().render();
  })
}

function jarques(event) {
  Caman("#output", function() {
    this.jarques().render();
  })
}

function pinhole(event) {
  Caman("#output", function() {
    this.pinhole().render();
  })
}

function oldBoot(event) {
  Caman("#output", function() {
    this.oldBoot().render();
  })
}

function hazyDays(event) {
  Caman("#output", function() {
    this.hazyDays().render();
  })
}

function nostalgia(event) {
  Caman("#output", function() {
    this.nostalgia().render();
  })
}

function hemingway(event) {
  Caman("#output", function() {
    this.hemingway().render();
  })
}

function concentrate(event) {
  Caman("#output", function() {
    this.concentrate().render();
  })
}

function showOptions() {
  console.log("HEY");
}

function download() {
  //downloadNow = true;
  
  Caman("#output", function() {
      this.render(function() {
        this.save('png');
      });
    });
}
