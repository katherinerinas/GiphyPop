

$(document).ready(function(){

$("#searchButton").on("click", function(event){
event.preventDefault();
var userSearch=$('.Searchbar').val().trim();

var buttonTitles = ["Musicals", "Movies", "Cars","Sailboats"];


function displayButtons(){

//$(displayButtons).empty();
}

for (var i = 0; i< buttonTitles.length; i++) {


//$('#giphyButtons').html('<button class="buttonTitles">'+buttonTitles +'</button>').show();	
//$(".buttonTitles").attr("src", buttonTitles.images).show(); 

	$('#test').html('hello');

  var giphyDiv = $("<div class='newGif'>");
 



function displaygif(){
	//generate a button for each topic
event.preventDefault();
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


	var newButton = $("<buttons>");
	$(".searchbar").html(newButton);

 
$(document).on("click", ".item", displayGif);

renderButtons();

//Animate/still click function for buttons//


 // var state=$(newButton).attr("data-state");

 // if (state=="still"){
  // $(this).attr("src", $(this.attr("data-animate"));
  //  $(this).attr("data-state","animate");
            //state= "animated";

   //}else{ 
 // $(this).attr("src", $(this).attr("data-still"));
//$(this).attr("data-state","still");
                //state="still";



  

         });
      };	
   };
  });
});























