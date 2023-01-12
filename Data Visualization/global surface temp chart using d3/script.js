/*

Monthly Global Land Surface Temperature Chart (1753-2015) using D3.js and Javascript.

Coded to pass the freeCodeCamp class project:
https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-heat-map

using this JSON file for the data:
https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json

Todo:
Cells
  function to calculate color of cell
legend
  use color function
debug
  why are my data points mapped upside down on the y axis

Todo Optional:

*/

d3.json ('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')
  .then(data => {

  // VARIABLES

  const w = 1200,
        h = 500,
        paddingLeft = 100,
        paddingRight = 10,
        paddingTop = 10,
        paddingBottom = 100;

// temperature ranges for colors:
// 2.8-3.9, 3.9-5.0, 5.0-6.1, 6.1-7.2, 7.2-8.3, 8.3-9.5, 9.5-10.6, 10.6-11.7, 11.7-12.8
  let colors = [
    "#4575b4",
    "#74add1",
    "#abd9e9",
    "#e0f3f8",
    "#ffffbf",
    "#fee090",
    "#fdae61",
    "#f46d43",
    "#d73027"
  ]

  // FUNCTIONS

  function colorCalc (value) {
    if (value < 3.9) {
      return colors[0];
    } else if (value >= 3.9 && value < 5.0) {
      return colors[1];
    } else if (value >= 5.0 && value < 6.1) {
      return colors[2];
    } else if (value >= 6.1 && value < 7.2) {
      return colors[3];
    } else if (value >= 7.2 && value < 8.3) {
      return colors[4];
    } else if (value >= 8.3 && value < 9.5) {
      return colors[5];
    } else if (value >= 9.5 && value < 10.6) {
      return colors[6];
    } else if (value >= 10.6 && value < 11.7) {
      return colors[7];
    } else if (value >= 11.7) {
      return colors[8];
    }
  }

  // SVG D3 CONTAINER

  let svg = d3.select('#svg')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  // x axis
  // scaleBand() requires for the domain to be an array

  let xScale = d3.scaleBand()
    .domain(data.monthlyVariance.map((d) => d.year)) // filtered below in .tickValues()
    //.domain(xDomainArray)
    .range([0, w - paddingLeft - paddingRight]);
  let xAxis = d3
    .axisBottom(xScale)
    .tickValues(
      xScale.domain().filter(function (year) {
        // return only years that are divisible by 10
        return year % 10 === 0;
      })
    )
    .tickFormat(function (year) {
      var date = new Date(0);
      date.setUTCFullYear(year);
      var format = d3.utcFormat('%Y');
      return format(date);
    })
    .tickSize(10, 1);
  svg
    .append("g")
    .attr("transform", "translate(" + paddingLeft + "," + (h - paddingBottom) + ")")
    .call(xAxis);
  svg
    .append("g")
    .append("text")
    .attr("text-anchor", "end")
    .attr("x", w * .5 + paddingLeft - paddingRight)
    .attr("y", h - paddingBottom + paddingTop + 40)
    .text("Years");

  // y axis

  let yScale = d3
    .scaleBand()
    .domain([12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    .range([h - paddingBottom - paddingTop, 0]);
  let yAxis = d3
    .axisLeft(yScale)
    .tickValues(yScale.domain())
    .tickFormat(function (month) {
      var date = new Date(0);
      date.setUTCMonth(month);
      var format = d3.utcFormat('%B');
      return format(date);
    })
    .tickSize(10, 1);;
  svg
    .append("g")
    .attr("transform", "translate(" + paddingLeft + "," + paddingTop + ")")
    .call(yAxis);
  svg
    .append("g")
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "end")
    .attr("x", -h * .5 + paddingBottom)
    .attr("y", 20)
    .text("Months");

  // chart cells

  svg
    .append("g")
    .attr('transform', 'translate(' + paddingLeft + ',' + paddingTop + ')')
    .selectAll("rect")
    .data(data.monthlyVariance)
    .enter()
    .append("rect")
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d.month))
    .attr('width', d => xScale.bandwidth(d.year))
    .attr('height', d => yScale.bandwidth(d.month))
    .attr("fill", d => colorCalc(d.variance + 8.66))
    ;



            })
  .catch(e => console.log(e));
