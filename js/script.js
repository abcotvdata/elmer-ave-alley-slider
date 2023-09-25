/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//jquery code here

	// $(".slideything").slider({
	// 	// value: 40,
	// 	// min: 0,
	// 	// max: 100,
	// 	// step: 10,
	// 	// slide: function(e,ui){
	// 	// 	console.log(ui.value);
	// 	// 	$(".boxything").css(
	// 	// 		"width", ui.value + "%")

	// 	// }
	// });

	$(".slideything").slider({
		value: 0,
		min: 0,
		max: 1,
		step: 0.1,
		slide: function(e,ui){
			console.log(ui.value);
		 	$(".box2").css("opacity", ui.value)
		 	$(".box1").css("opacity", 1-ui.value)

		 }
	});


}); //end document.ready block
