
$(document).ready(function(){
var buttonTitles = ["kittens", "movies", "cars","sailboats"];

function displayGiphInfo(){

var Giphy= $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + Giphy + "&api_key=0Gp6ray3KMseqpNgN29oNppBLd1G066q&limit=10";

$.ajax({
	url: queryURL,
	method:"GET"
})

.done(function(response) {

var results = response.data;

$("#gifs-go-here").empty();

for (var i =0; i<results.length;i++){

 var gifDiv = $("<div class='item'>");
 var gifRating= results[i].rating;
 var p=$("<p>").html("Rating: " + gifRating);

var giphImage = $("<img>");
giphImage.attr("src", results[i].images.fixed_height_still.url);
giphImage.attr("data-state", "still");
giphImage.attr("data-animate", results[i].images.fixed_height.url);
giphImage.attr("data-still", results[i].images.fixed_height_still.url);

   gifDiv.prepend(p);
   gifDiv.prepend(giphImage);
   $("#gifs-go-here").prepend(gifDiv); 
     
     }
  });
}
 function renderButtons() {
 $("#giphyButtons").empty();

for (var i=0; i<buttonTitles.length; i++){


      var a = $("<button>");
      a.addClass("giff");
      a.attr("data-name", buttonTitles[i]);
      a.text(buttonTitles[i]);
     $("#giphyButtons").append(a);
   } 

}

$("#searchButton").on("click", function(event){
 event.preventDefault();


var Giphy= $("#addGiphy").val().trim();


buttonTitles.push(Giphy);


renderButtons();

 });

$(document).on("click", ".giff", displayGiphInfo);


renderButtons();

//Animate/still click function for buttons//

$(document).on("click", "img", function () {
   var state= $(this).attr("data-state");
    console.log("this is working!");
  if (state=="still"){
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state","animate");
  } else { 
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state","still");
  };
});




});
