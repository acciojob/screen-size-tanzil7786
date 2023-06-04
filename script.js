//your JS code here. If required.

const sizedElement = document.createElement("h1");
sizedElement.innerText =`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

document.body.append(sizedElement);

window.onresize = function(){
	sizedElement.innerText =`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

}