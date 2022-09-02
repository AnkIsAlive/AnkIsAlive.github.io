// [X]User should be able to submit a form on the page to generate multiple memes
// [X] User should be able to click on a button to remove meme from the page
// [X]When the meme form is submitted, values in the forms should clear

let img = document.getElementsByTagName("img");
let form = document.querySelector("form");
const button = document.querySelector("button");

form.addEventListener("submit", function (e) {
	e.preventDefault(); //submit needs to be run to start function
	const meme = document.createElement("div"); //creates meme
	const textTop = document.createElement("div"); // creates top text div
	const textBottom = document.createElement("div"); // creates bottom text div
	const img = document.createElement("img"); //creates <img> under div class="meme"

	//img.src targets imageInput element from HTML
	img.src = document.getElementById("imageInput").value;
  img.addEventListener('click', function(e) { //EVENT LISTNER CLICK
    e.target.parentNode.remove() // TARGET PARENT AND REMOVE METHOD!
  })
  
	textTop.classList.add("textTop"); //adds "textTop" class to Top Text Input
	textTop.innerHTML = document.getElementById("topText").value;

	textBottom.classList.add("textBottom"); //adds "textBottom" class to Bottom Text Input
	textBottom.innerHTML = document.getElementById("bottomText").value;

	//add class "meme" to inputs and combine
	//(textTop,textBottom,img) together
	//send appended elements to div.meme-gen
	meme.classList.add("meme");
	meme.append(textTop);
	meme.append(textBottom);
	meme.append(img);
	let memeLocation = document.getElementById("meme-gen");
	memeLocation.append(meme);

	form.reset(); //After func(submit) above runs reset all forms (imageInput,topInput,bottomInput)
});
