// animations with Animate.css
animated
hinge // hinges and falls
fadeOut
bounce
shake

//targeting elements
.children() // access children of an element
.parent().css("color", "blue") // access parent of whatever element you are selecting, then chain other functions after it
$(".target:nth-child(3)") // target every 3rd element named .target (starting from 1)
$(".target:odd") // target every odd element with class .target (starting from 0)
$(".target:even") // target every even .target element (starting from 0)

// jQuery functions
.clone("").appendTo("#element") // copy an element to another element, requires append after to decide where to put it
.appendTo("#element") // select an HTML element and move it into a different place
.html("") // replace any html tags and text within an element
.text("") // replace any text (no tags)
.prop("disabled", "true") // allows you to change the properties of buttons
.css("color", "blue") // change the css of an element
.remove() // remove an html element entirely
.removeClass("btn-default"); // remove a class
$(".well").addClass("animated shake"); // target a class and add classes
$("button").addClass("animated bounce"); // target an element and add classes
$("#target3").addClass("animated fadeOut"); // target an id and add classes

// general stuff
$ // all jQuery code starts with a $
$(document).ready(function() { }); // a function that will run after page loads, basically put all code here
<script></script> // everything goes inside of this
