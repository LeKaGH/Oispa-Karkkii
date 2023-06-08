// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "https://lekagh.github.io/Oispa-Karkkii/img/2.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/4.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/8.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/16.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/32.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/64.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/128.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/256.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/512.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/1024.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/2048.png",
        "https://lekagh.github.io/Oispa-Karkkii/img/super.png"

    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
