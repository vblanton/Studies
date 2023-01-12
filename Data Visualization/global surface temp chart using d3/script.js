/*

Monthly Global Land Surface Temperature Chart (1753-2015) using D3.js and Javascript.

Coded to pass the freeCodeCamp class project:
https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-heat-map

using this JSON file for the data:
https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json

Todo:
legend
  finish implementation
  use color function
tooltips
  ...
debug
  why are my data points mapped upside down on the y axis

Todo Optional:

*/

d3.json ('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')
  .then(data => {

  // VARIABLES

  const w = 1200,
        h = 500,
        paddingLeft = 75,
        paddingRight = 10,
        paddingTop = 10,
        paddingBottom = 100;

// colors for temperature ranges:

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

  let legend = [
    2.8,
    3.9,
    5.0,
    6.1,
    7.2,
    8.3,
    9.5,
    10.6,
    11.7,
    12.8
  ]

  // FUNCTIONS

  // calculte the color of the cell
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
    } else {
      return colors[8];
    }
  }



  // SVG D3 CONTAINER

  let svg = d3.select('#svg')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  // TOOLTIP
  // let tip = d3
  //   .tip()
  //   .attr('class', 'd3-tip')
  //   .attr('id', 'tooltip')
  //   .html(function (d) {
  //     return d;
  //   });

  // https://d3-graph-gallery.com/graph/interactivity_tooltip.html:
  //   var Tooltip = d3.select("#div_template")
  //       .append("div")
  //       .style("opacity", 0)
  //       .attr("class", "tooltip")
  //       .style("background-color", "white")
  //       .style("border", "solid")
  //       .style("border-width", "2px")
  //       .style("border-radius", "5px")
  //       .style("padding", "5px")
  // X AXIS
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

  // Y AXIS

  let yScale = d3
    .scaleBand()
    .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    .range([h - paddingBottom - paddingTop, 0]);
  let yAxis = d3
    .axisLeft(yScale)
    .tickFormat(function (month) {
      let date = new Date("2000 01 01");
      date.setUTCMonth(month - 1);
      let format = d3.utcFormat("%b");
      return format(date);
    })
    .tickSize(10, 1);
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
    .attr('transform', 'translate(' + (paddingLeft + 1) + ',' + paddingTop + ')')
    .selectAll("rect")
    .data(data.monthlyVariance)
    .enter()
    .append("rect")
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d.month))
    .attr('width', d => xScale.bandwidth(d.year))
    .attr('height', d => yScale.bandwidth(d.month))
    .attr("fill", d => colorCalc(d.variance + 8.66))
    .on('mouseover', function (event, d) {
      let date = new Date(d.year, d.month);
      let str =
        "<span class='date'>" +
        d3.utcFormat('%Y - %B')(date) +
        '</span>' +
        '<br />' +
        "<span class='temperature'>" +
        d3.format('.1f')(data.baseTemperature + d.variance) +
        '&#8451;' +
        '</span>' +
        '<br />' +
        "<span class='variance'>" +
        d3.format('+.1f')(d.variance) +
        '&#8451;' +
        '</span>';
      tip.attr('data-year', d.year);
      tip.show(str, this);
    })
    .on('mouseout', tip.hide);;

  // legend

  let legendScale = d3
    .scaleBand()
    .domain([2.8, 3.9, 5.0, 6.1, 7.2, 8.3, 9.5, 10.6, 11.7, 12.8])
    .range([0, 400]);
  let legendAxis = d3
    .axisBottom(legendScale)
    .tickValues(legendScale.domain())
    .tickSize(10, 1);
  svg
    .append("g")
    .attr("transform", "translate(" + paddingLeft + ", 465)")
    .call(legendAxis);
    // TODO BELOW
  svg
    .append("g")
    .attr("transform", "translate(" + paddingLeft + 20 + ", 450)")
    .selectAll("rect")
    .data(legend)
    .enter()
    .append("rect")
    .attr('x', 0)
    .attr('y', 0)
    .attr("width", 30)
    .attr("height", 20)
    .attr("fill", "blue");




            })
  .catch(e => console.log(e));
