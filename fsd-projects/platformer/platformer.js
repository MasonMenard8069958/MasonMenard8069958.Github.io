$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(300, 605,100, 5);
   createPlatform(300, 470,100, 5);
   createPlatform(300, 335,100, 5);
   createPlatform(600, 220,6, 5);
   createPlatform(800, 375,6, 5);
   createPlatform(1100, 355,6, 5);
   createPlatform(1300, 300,6, 5);

    // TODO 3 - Create Collectables
    createCollectable('steve',325, 525); 
    createCollectable('steve',325, 400); 
    createCollectable('steve',325, 280);
    createCollectable('steve',580, 170);
    createCollectable('steve',780, 320);
    createCollectable('steve',1080, 305); 
    createCollectable('steve',1280, 250); 
 



    
    // TODO 4 - Create Cannons
    createCannon('right', 690, 950);
    createCannon('top' , 600,2000);
    createCannon('top' , 1300,2000);
    createCannon('right', 760, 4);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
