function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(1);
	background(255, 245, 238);
	clock = new Clock(hour(), minute(), second());

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255, 245, 238);
	document.getElementById("title").innerHTML = clock.toString();


	clock.set(hour(), minute(), second());
	let widthHr = map(clock.hr, 0, 24, 0, width);
	let widthMin = map(clock.min, 0, 60, 0, width);
	let widthSec = map(clock.sec, 0, 60, 0, width);
	noStroke();

	/* Hours*/
	fill(255, 60, 90);
	rect(0, 0 * windowHeight / 3, widthHr, height / 3);

	/* Minutes */
	fill(150, 255, 70);
	rect(0, 1 * windowHeight / 3, widthMin, height / 3);

	/* Seconds */
	fill(70, 50, 255);
	rect(0, 2 * windowHeight / 3, widthSec, height / 3);


	textAlign(CENTER, CENTER);
	textSize(128);
	fill(255, 106, 69);
	text(clock.toString(), width / 2, height / 2);

}