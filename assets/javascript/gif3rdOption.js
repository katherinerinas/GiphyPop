
$(document).ready(function(){

$("#searchButton").on("click", function(){

event.preventDefault();

var buttonTitles = ["Musicals", "Movies", "Cars","Sailboats"];


function displayButtons(){
$(displayButtons).empty();


      var a = $("<button>");
      a.addClass("giff");
      a.attr("data-name", buttonTitles[i]);
      a.text(buttonTitles[i]);
     $("#giphyButtons").append(a);



}


for (var i = 0; i< buttonTitles.length; i++) {
	
$("#buttonTitles").attr("src=buttonTitles.images.original_still", function(){
$('.giphyButtons').append('<button id="buttonTitles">'+ buttonTitles[i]+'</button>').show();
	});

	//generate a button for each topic

	//$(this).on("click", $("<button class=newGif>"));

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        buttonTitles + "&api_key=0Gp6ray3KMseqpNgN29oNppBLd1G066q&limit=10";

        $.ajax({
        	url: queryURL,
        	method:"GET"
        })
  
 .then(function(response){
 	
 	var results = response.data;

 

 var gifDiv = $("<div class='item'>");
var gifRating= results[i].rating;
 var p=$("<p>").html("Rating: " + gifRating);

var giphImage = $("<img>");
giphImage.attr("src", results[i].images.fixed_height_still.url);

gifDiv.prepend(p);
gifDiv.prepend(giphImage);

$("#gifs-go-here").prepend(gifDiv);


	




	});

	};
  });
});
