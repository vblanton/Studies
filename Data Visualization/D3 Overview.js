// A library to help visualize/use data/files


d3.select("a"); // assign the first anchor tag in the DOM to the variable "anchor"
const anchor = d3.select("a") // assign it to a variable
d3.append("tag") // adds an element to the document, adds an HTML node and returns the handle to that node
d3.text("text") // sets the text of the selected node, or gets the current text, to set the value, pass a string as an argument in the paranthesis
selection.text((d) => d + " text") // .text method can take a string or callback function
.selectAll("tag") // returns an array of HTML nodes for all items that match the input string
.data(dataset) // pass data set as an argument to attach the data to elements, parses each data entry and runs the chained methods after it for each one, like forEach()
.enter() // will create extra elements if there is more data than available elements
.style("key", "value") // add inline CSS styles
.style("color", (d) => {}); // add callback to style for each data piece
.attr("class", "container"); // add an HTML attribute to any element, such as a class
.attr("property", (d, i) => {}) // the i is the index of the data point (optional)
.call() // allows a function to be called into which the selection itself is passed as the first argument.
.min([array]) // returns lowest value in an array, numerical, date, alphabetical, or unicodealy (emoji), can pass a function to it like: d3.min(flights, d => d.price), can accept a threshold value to search above by doing a function with an if statement
.max([array]) // returns highest value in an array
.minIndex([array]) // returns index of min
.maxIndex([array]) // returns index of max
.extend([array]) // returns [min, max]


// using .call()
function colorAll(selection) {
  selection
    .style('fill', 'orange');
}

d3.selectAll('circle')
  .call(colorAll);

// scales (area to plot svg within)
// note you can chain scale methods

const scale = d3.scaleLinear(); // linear scale / quantitative data
scale.domain([x, y]); // the input information/values, takes an array of at least two elements as an argument
scale.range([x, y]); // shown x axis lowest to highest, which domain is plotted to fit, takes an array of at least two elments as an argument

// finding min/max values in a dataset for use with a domain
d3.min(dataset) // min value in a dataset
.max(dataset) // max value in a dataset
const minX = d3.min(dataset, (d) => d[0]); // or as a callback function to just look at x values in an arary of x, y

// axis
const xAxis = d3.axisBottom(xScale);
.axisLeft(yScale)
.axisRight() // assuming this exists
.axisTop() // assuming this exists

// chain your methods!
d3.select("body")
  .append("h1")
  .text("Learning D3");

// svg
// you can style with internal svg styling (fill) or with CSS
// x, y coordinates (0, 0) origin in upper-left corner


<svg />
<rect /> // rectangle, x, y, height, width
<circle /> // circle, cx, cy, r

// g, or group element
// transform attribute to position a g element
// translate... one type of transform, to move the element x, y
// call...
svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);

d3.append("rect")
  .attr("width", "25")
  .attr("height", "100")
  .attr("x", "0")
  .attr("y", "0");

// to manipulate rect's you must call them to an svg const
svg.selectAll("rect")

// colors in svg are assigned with "fill" directly or via CSS
// labels with "text", which has x and y attributes and needs data
.append("text")
.text((d) => d)
.attr("x", (d, i) => i * 30)
.attr("y", (d, i) => h - (3 * d) - 3);

// assign the tooltip with "title"
.append("title")
.text((d) => d)
