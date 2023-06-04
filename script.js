//your JS code here. If required.


// const sizedElement = document.createElement("h1");
// sizedElement.innerText =`Width : ${expectedWidth} and Height: ${expectedHeight}`;
// document.body.append(sizedElement);

function getSize(){
	var expectedWidth=document.documentElement.clientWidth;
	var expectedHeight=document.documentElement.clientHeight;
	document.getElementById('sizeInfo').innerHTML = "<h1>Width: " + expectedWidth + " and Height: " + expectedHeight + "</h1>";

}






