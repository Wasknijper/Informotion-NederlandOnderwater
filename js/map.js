var data = netherlands;

var mapHeight = 600;
var mapWidth = 600;

//http://stackoverflow.com/a/16780756 - how to make a simple tooltip in d3

var tooltip = d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("");


var svgLines = d3.select("#map svg:first-of-type")
   .attr("width", mapWidth)
   .attr("height", mapHeight)
   .attr("viewBox", "0 0 339 410")
   .append("g")
   .attr("id", "mapGroup");

var mapProvinces = svgLines.selectAll(".province")
   .data(data)
   .enter().append("path")
   .attr("d", function(d, i){ 
   			return data[i]._d;
   		})
   .attr("fill-opacity","0")
   .attr("fill", "#6B88C5")
   .attr("stroke", "white")
   .attr("stroke-width", "0.5")
   .attr("stroke-opacity", "0.5")
   .on("mouseover", function(d){return tooltip.style("visibility", "visible").text(d._gem);})
   .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
   .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
   .on("click", function(d){
    d3.selectAll("svg:first-of-type path").style("fill-opacity", "0");
    d3.select(this).style("fill-opacity", "0.7");
    drawTitle(d._gem, d._aantal, d._natteVoeten);
   });

var drawTitle = function(gemeenteNaam, inwoners, natteVoeten) {
  d3.select("#extraInfo").attr("class", "selected");
  d3.select("#extraInfo h1").text(gemeenteNaam);
  d3.select("#extraInfo .aantalInwoners span").text(inwoners);
  d3.select("#extraInfo .natteVoeten span").text(natteVoeten);
};


var groupWidth = document.getElementById("mapGroup").getBoundingClientRect().width;
var groupHeight = document.getElementById("mapGroup").getBoundingClientRect().height;

document.getElementById("overlay").style.width = Math.ceil(groupWidth + 45) + "px";
document.getElementById("overlay").style.height = Math.ceil(groupHeight - 30) + "px";

document.getElementById("overlay_sat").style.width = Math.ceil(groupWidth - 9) + "px";
document.getElementById("overlay_sat").style.height = Math.ceil(groupHeight - 14) + "px";

document.getElementsByTagName("svg")[0].setAttribute("width", groupWidth);
document.getElementsByTagName("svg")[0].setAttribute("height", groupHeight);
