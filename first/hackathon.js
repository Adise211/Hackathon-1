

// Part 1: instruction ==> press button ==> invisible
function pressToStart(){
	let theButton = document.getElementsByClassName("startbutton")[0];
	let theTitle = document.getElementById("instruction");

	theButton.addEventListener("click", function() {
		theTitle.style.display = "none";
		countDownToStart();

	})

}


pressToStart();


// Part 2: timer counting down to play
function countDownToStart () {
	let count = document.getElementById("count")
	let newDiv = document.createElement("div")
	count.appendChild(newDiv);
	newDiv.classList.add("countdown");

	let counter = 5;
	let id = setInterval(function () {
		console.log(counter);
		newDiv.textContent = counter
		counter --
		if (counter <= -1 ) {
			clearInterval(id)
			count.style.display = "none";
			createTheText();
			createShapes();
		}

	},1000)

}



// "Game over" banner

function sayGameOver () {
	let getTo = document.getElementById("player");
	let divOne = document.createElement("div");
	getTo.appendChild(divOne);
	divOne.classList.add("itsover");
	let txtIn = document.createTextNode("Game Over");
	divOne.appendChild(txtIn);
	console.log(divOne);

}



// "Bravo!" banner if the user won

function sayBravo () {
	let getTo2 = document.getElementById("player");
	let divTwo = document.createElement("div");
	getTo2.appendChild(divTwo);
	divTwo.classList.add("winner");
	let say = document.createTextNode("Bravo !");
	divTwo.appendChild(say);
}









// Part 3 : the game will be displayed once the counter ends

// 3.1 create new divs inside the text section
// 3.2 insert some text to any div (the descrption of the forms)
// 3.3 make any describe-div draggable :
let theDes = [
"Thanks to him we are able to ride on the bicycle",
"If you look at the sky after midnight you might see him and lots of him",
"He is the simbol of love",
"Some kids like to drew him as a roof",
"He is very simple",
"He is the perfect shape in geometry",
"You could see him as the borad in classes",
"His name will remind you the animal octopus"
]

let indexShape = ["Squere","Rectangle","Circle","Triangle","Star","Line","Heart"];           // I will was that also at step number 4
let indexTxt = ["Circle","Star","Heart","Triangle","Line","Squere","Rectangle"];


function createTheText () {
	for (let i = 0; i < indexTxt.length; i ++) {
		let aside = document.getElementsByClassName("decription")[0];
	 	let addDivs = document.createElement("div");

	 	addDivs.textContent = theDes[i]
	 	addDivs.classList.add("des")
	 	aside.appendChild(addDivs);
	 	addDivs.dataset.shape = indexTxt[i];

		addDivs.setAttribute('id',indexTxt[i]);

		addDivs.addEventListener("dragover",function(event) {
			event.preventDefault();
	    	event.dataTransfer.dropEffect = "move";
		})

		addDivs.addEventListener("drop",function(event) {
			event.preventDefault();

	    // Extract id of element and get it's reference
	    let idShape = event.dataTransfer.getData("text/plain");
	    let div = document.getElementById(idShape); 
	    
	    if (event.target.dataset.shape === div.dataset.shape) {
				event.target.textContent = 'OK';
				event.target.style.border = "2px black solid";
				event.target.style.backgroundColor = "gold";
				//for (let counter = 0;counter < 8; counter++) {
					//if (counter === 7 ) {
				 	sayBravo();                          // If everything is corecct - the "Barvo" banner will show up
				 	// let getToForms2 = document.getElementById("forms");
				 	// let getToDec2 = document.getElementsByClassName("decription")[0];
				 	// console.log(getToDec2);
				 	// getToForms2.style.visibility = "hidden"
				 	// getToDec2.style.visibility = "hidden"
				
				 	//}	
				//}
				    
			

			} else {
	 
				sayGameOver();   // If one match was incorecct - the banner "Game Over" will be display 
				let getToForms = document.getElementById("forms");
				let getToDec = document.getElementsByClassName("decription")[0];
				console.log(getToDec);
				getToForms.style.visibility = "hidden"
				getToDec.style.visibility = "hidden"
				
				
				

			}
		


		})


 	}
 	

}




// Part 4: the shapes that will be displayed

function createShapes () {
	for (let s = 0; s < indexShape.length; s ++) {
		let forms = document.getElementById("forms");
		console.log(forms)
	 	let addNewDivs = document.createElement("div");
	 	addNewDivs.classList.add(`shape`+ `${indexShape[s]}`);
	 	addNewDivs.setAttribute('id',indexShape[s]);
	 	forms.appendChild(addNewDivs);
	 	addNewDivs.setAttribute("draggable",true);
		addNewDivs.dataset.shape = indexShape[s];


		addNewDivs.addEventListener("dragstart",function(event){
			event.dataTransfer.setData("text/plain", event.target.id); // "draggable-element"
			// define allowed effects
			event.dataTransfer.effectsAllowed = "move";
			// change cursor style
			event.target.style.cursor = "move";

		})


		addNewDivs.addEventListener("dragend",function(event) {
			event.target.style.visibility = "hidden";
		})


	
	}
}

















