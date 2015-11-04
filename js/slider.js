function updateSlider(slideAmount) {

    if(slideAmount === "0") {
        document.getElementById("overlay").src="img/0.png";
    }else if(slideAmount === "1") {
        document.getElementById("overlay").src="img/1.png";
    } else if(slideAmount === "2") {
        document.getElementById("overlay").src="img/2.png";
    } else if(slideAmount === "3") {
        document.getElementById("overlay").src="img/3.png";
    }  else if(slideAmount === "4") {
        document.getElementById("overlay").src="img/4.png";
    } else if(slideAmount === "5") {
        document.getElementById("overlay").src="img/5.png";
    } 
}

$(function(){

    var currentValue = $("#rangeValue");

    $("#slide").change(function(){
        currentValue.html(this.value);
    });

    // Trigger the event on load, so
    // the value field is populated:

    $("#slide").change();

});