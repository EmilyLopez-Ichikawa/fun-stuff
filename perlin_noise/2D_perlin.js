var zoff = 0;
var inc = 0.01;
var zinc = 0.08;

function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
}

function draw() {
    var yoff = 0;

    loadPixels();
    for (var y = 0; y < height; y++) {
        var xoff = 0;

        for (var x = 0; x < width; x++) {
            var brightness = noise(xoff, yoff, zoff) * 255;
            setPixel(x, y, brightness);
            xoff += inc;
        }
        yoff += inc;
    }

    updatePixels();
    zoff += zinc;
}

function setPixel(x, y, brightness) {
    var index = (x + y * width) * 4;

    pixels[index + 0] = brightness;
    pixels[index + 1] = brightness;
    pixels[index + 2] = brightness;
    pixels[index + 3] = 255;
}