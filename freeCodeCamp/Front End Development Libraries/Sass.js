// SASS is not supported natively by browsers, it must be compiled into native CSS before using it
// SASS is a css extention language / preprocessor

// extend allows your to borrow rules from another css element
.big-panel {
  @extend .panel;
  width: 150px;
}

// partials are separate files or modules of css code to import in
// they start with _ , end with .scss, and are imported with @import
// but omit the _ and .scss when importing it
_mixins.scss
@import 'mixins'


// @while create css rules until a condition is met
// create a simple grid system:
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}

//  @each loops over each item in a list or map
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
// or a map:
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
// they both create this:
.blue-text {
  color: blue;
}
.red-text {
  color: red;
}
.green-text {
  color: green;
}

// @for like a for loop in javascript (start to end or start through end)
// start through end example that creates 12 column grid layout
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
// start to end example:
@for $j from 1 to 6 {
  .text-#{$j} { font-size: 15px * $j; }
}

// @if @else if @else works just like if statements in javascript
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else {
    color: black;
  }
}

// a mixin is a group of css that can be reused (like a function for css)
@mixin box-shadow($x, $y, $blur, $c){
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
// sass supports nesting css rules {{}}
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}

color: $headings-color; // use a variable
$headings-color: green; // declare a variable
