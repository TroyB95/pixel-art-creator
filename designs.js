// Select color input
const colorPicker = document.querySelector('#colorPicker');
let color = 'black';

colorPicker.addEventListener('change', function(e){
	 color = e.target.value;
	 console.log(color);
})

// Select size input
let width = 0;
let height = 0;

const sizePicker = document.querySelector('#sizePicker');
const heightSelector = document.querySelector('#inputHeight');
const widthSelector = document.querySelector('#inputWidth');

widthSelector.addEventListener('change', function(e){
	width = e.target.value;
})

heightSelector.addEventListener('change', function(e){
	height = e.target.value;
})



// When size is submitted by the user, call makeGrid()
const canvas = document.querySelector('#pixelCanvas');

sizePicker.addEventListener('submit', function(e){
	e.preventDefault();
	makeGrid();
	
})

function makeGrid() {
	canvas.innerHTML = '';

	for(var i = 0; i < height; i++){
		const row = document.createElement('TR');
		canvas.appendChild(row);

		for(var j = 0; j < width; j++){
			const col = document.createElement('TD');
			row.appendChild(col);
			
		}
	}	

	// When a user clicks a cell, change its background color
		canvas.addEventListener("click", function(e) {
  			if (e.target && e.target.nodeName == "TD") {
    			e.target.style.backgroundColor = color;
  			}
	});

}














