var xoff1 = 0;
var xoff2 = 10000;
var inc = 0.01;
var start = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    // oneDimensionLine();
    // oneDimensionSpace();
    oneDimensionGraphed();
}

function oneDimensionLine() {
    var x = noise(xoff1) * width;
    ellipse(x, 200, 24, 24);

    xoff1 += 0.01;
}

function oneDimensionSpace() {
    var x = noise(xoff1) * width;
    var y = noise(xoff2) * width;
    ellipse(x, y, 24, 24);

    xoff1 += 0.01;
    xoff2 += 0.01;
}

function oneDimensionGraphed() {
    stroke(255);
    noFill();
    beginShape();
    var xoff = start;
    for (var x = 0; x < width; x++) {
        var y = noise(xoff) * height;
        vertex(x, y)
        xoff += inc;
    }
    endShape();
    start += inc;
    // noLoop();
}