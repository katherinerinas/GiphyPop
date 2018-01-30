alert("HELLO!");

$(document).ready(function){


var Topics=["Musicals", "Movies", "Cars","Sailboats"]


function(displayButtons);{


}


	$(displayButtons).empty();


 for (var i = 0; i < Topics.length; i++) {

 var a= $("<button>");
 a.addClass("giphgetters");
 a.attr("data-name", Topics[i]);
 a.text(Topics[i]);


$("#buttons-view").append(a);

   }
}

$("#add-giph").on("click",function(event) {
	event.preventDefault();



}

renderButtons();
});















}



























}