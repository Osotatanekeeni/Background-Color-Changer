function random_bg_color() {
    // Get a random number between 0 to 256
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Construct a color with the given values
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    //Set the background color to the new color
    document.body.style.backgroundColor = bgColor;
}