/**
 * United States Educational Attainment Chloropleth Map
 * 
 * For this project: https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-choropleth-map
 * Example: https://choropleth-map.freecodecamp.rocks/
 * US Education Data:https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json
 * US County Data:https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json
 * 
 * Inspired by Van B-C's map: https://codepen.io/vanbc18/pen/gOoxrLK
 * 
 * 
 * Todo: 
 * clearer division between states (a border)
 * Legend with more markers
 * responsive design
**/

// Global Variables

let educationJSON = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
let countiesJSON = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

Promise.all([d3.json(countiesJSON), d3.json(educationJSON)])
  .then((dataset) => ready(dataset[0], dataset[1]))
  .catch(err => console.log(err));

let ready = (countyData, eduData) => {

// Local Variables

const w = 960;
const h = 600;

let size = 20;
let domain = [10, 20, 30, 40, 50, 60, 70];
const path = d3.geoPath();
const obj = countyData.objects;
const counties = obj.counties;
// const bOrH = eduData.map(d => d.bachelorsOrHigher); //an array of all bachelors status

//gets the colors for our map 
const colorScale = d3.scaleThreshold()
  .domain(domain)
  .range(d3.schemeBlues[8]); //d3.schemeColor just returns an array of colors



// the choropleth map container
let svg = d3.select("#svg")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

// the tooltip
let tooltip = d3.select("body")
  .append("div")
  .attr("id", "tooltip");

// ATTEMPT AT ADDING BORDER AROUND STATES:

// const dataStates = topojson.feature(countyData, states).features;

// svg.append("g")
//     .data(dataStates)
//     .enter()
//     .append("path")
//     .attr("class", "state")
//     .attr("d", path)
    // .attr("fill" black);


// converting TopoJSON to GeoJSON
const data = topojson.feature(countyData, counties).features; 

// the actual map
svg.append("g")
  .selectAll("path")
  .attr("class", "counties")
  .data(data)
  .enter()
  .append("path") //super important
  .attr("class", "county")
  .attr("d", path) // super important
  .attr("data-fips", (d) => d.id)
  .attr("data-education", (d) => eduData.find(item => item.fips == d.id).bachelorsOrHigher) //need find() to match countyData with eduData !
  .attr("fill", (d) => colorScale(eduData.find(item => item.fips == d.id).bachelorsOrHigher) || 0)
  // .attr("stroke", white)
  .on("mouseover", (event, d) => {
    const education = eduData.find(item => item.fips == d.id);
    tooltip.style("visibility", "visible")
           .style("cursor", "default")
           .style("left", event.pageX+0+"px")
           .style("top", event.pageY-70+"px")
           .attr("data-education", education.bachelorsOrHigher)
           .text(() => "State: " + education.state + ",\n Area: " + education.area_name + ", " + education.bachelorsOrHigher + "%")})
 .on("mouseout", () => tooltip.style("visibility", "hidden"));


 // the legend part
 let legendBox = svg.append("g")
 .attr("id", "legend");

let legendScale = d3.scaleOrdinal()
  .domain(domain)
  .range(d3.schemeBlues[8]);

legendBox.selectAll("rect")
    .data(domain)
    .enter()
    .append("rect")
    .attr("x", w - 40)
    .attr("y", (d,i) => 310 + i*(size)) // 310 is where the first rect appears. size is the distance between dots
    .attr("width", size)
    .attr("height", size)
    .attr("fill", d => legendScale(d));

// legend axis in %
const legendDomain = [2.6, 75.1];
const yScale = d3.scaleLinear()
.domain(legendDomain)
.range([310, 449]);

const yAxis = d3.axisLeft(yScale)
.tickValues(legendDomain)
.tickFormat(d => d + " %")
.tickSize(10)
// .ticks(5)
; 

svg.append("g")
.call(yAxis)
.attr("transform", "translate(920, 0)");

svg.append("text")
.attr("x", w - 69)
.attr("y", 290)
.text("Legend: ")
.attr("font-size", 14)
};