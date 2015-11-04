var zoomCounter = 0;

$('.zoom').panzoom({
  minScale: 1,
  maxScale: 15,
  increment: 1,
  $zoomIn: $(".zoom-in, .postalcode_btn"),
  $zoomOut: $(".zoom-out"),
  $reset: $(".reset")
});

$('.zoom-in').click(function(){
    zoomCounter++;
    if(zoomCounter >= 15){
      $("#streetview").fadeIn();
      $(".buttons").addClass("boxed");
    }
});

$('.zoom-out').click(function(){
    zoomCounter--;
    console.log(zoomCounter);
    if(zoomCounter <= 14){
      $("#streetview").fadeOut();
      $(".buttons").removeClass("boxed");
    }
});

$('.reset').click(function(){
    zoomCounter = 0;
    $("#streetview").fadeOut();
    $(".buttons").removeClass("boxed");
});

$('.postalcode_btn').click(function(){
    $("#streetview").fadeIn();
    $(".buttons").addClass("boxed");
});

$('#streetview i').click(function() {
   $('#closeup').fadeToggle();
});

$('#streetview #closeup').click(function() {
   $('#closeup').fadeToggle();
});

$("#streetview #closeup figure").click(function(e) {
    e.stopPropagation();
});

$("#map svg:first-of-type").clone().appendTo(".zoom");
d3.selectAll("#map svg:last-of-type path")
  .attr("fill-opacity", "1")
  .attr("fill", "LightYellow")
  .attr("stroke-width", "0");