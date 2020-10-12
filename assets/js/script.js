var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 40,
  gutter: 20,
  fitWidth: true
});

imagesLoaded(elem).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});



// document.body.onload = function(){
//   document.body.style.display = "block"
// };

// function hide(ID) {
// 	let curr = document.getElementById(ID);
// 	curr.style.display = "none";
// 	// curr.style.opacity = 0;
// }

// function show(ID) {
// 	let curr = document.getElementById(ID);
// 	// curr.classList.remove("hidden");
// 	curr.style.opacity = 1;
// 	curr.style.display = "block";
// }



// let ohyos = document.getElementById("background-ohyos");
// ohyos.onmouseover = function() {

// 	//hide("cover");
// 	//hide("background");
// 	hide("ohyos");
// 	// hide("covid-description");
// 	show("ohyos-detail");

// }

// ohyos.onmouseout = function() {

// 	//show("cover");
// 	//hide("background");
// 	show("ohyos");
// 	// show("covid-description");
// 	hide("ohyos-detail");

// }

// let funty = document.getElementById("background-funty");
// funty.onmouseover = function() {

// 	//hide("cover2");
// 	//hide("background");
// 	hide("funty");
// 	show("funty-detail");

// }

// funty.onmouseout = function() {

// 	//show("cover2");
// 	//hide("background");
// 	show("funty");
// 	hide("funty-detail");

// }

// let herm = document.getElementById("background-herm");
// herm.onmouseover = function() {

// 	//hide("cover2");
// 	//hide("background");
// 	hide("herm");
// 	show("herm-detail");

// }

// herm.onmouseout = function() {

// 	//show("cover2");
// 	//hide("background");
// 	show("herm");
// 	hide("herm-detail");

// }

// function munt() {
//   window.open("munt.pdf");
// }



// document.getElementById("background-herm").onclick = hermitage;
// document.getElementById("background2").onclick = munt;
