/*

Monthly Global Land Surface Temperature Chart (1753-2015) using D3.js and Javascript.

Coded to pass the freeCodeCamp class project:
https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-heat-map

using this JSON file for the data:
https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json

Todo:
cells
legend
calculate color of cell via a function

Todo Optional:
yaxis: Calculate the yaxis month name via a function call to reduce duplicity
*/

d3.json ('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')
  .then(data => {

  // variables

  const w = 1200,
        h = 500,
        paddingLeft = 100,
        paddingRight = 50,
        paddingTop = 10,
        paddingBottom = 100;

  // svg container

  let svg = d3.select('#svg')
    .append('svg')
    .attr('width', w)
    .attr('height', h)

  // x axis

  // create an array for the x scale domain to use
  let xDomainArray = [];
  for (let i = 1753; i <= 2015; i++) {
    xDomainArray.push(i);
  }
  xDomainArray = xDomainArray.filter((d,i) => !(i%15));  // filter to only show 1 in every 15 ticks

  // scaleBand() requires for the domain to be an array
  let xScale = d3.scaleBand()
  //.domain(data.monthlyVariance.map( (d) => d.year)) // shows all years including duplicates, would need to be filtered
  .domain(xDomainArray)
  .range([0, w - paddingLeft - paddingRight]);

  let xAxis = d3
    .axisBottom(xScale)
    .ticks(30); // format x axis as "d" so it doesn't read as numbers with an apostrophe

  svg.append("g")
    .attr("transform", "translate(" + paddingLeft + "," + (h - paddingBottom) + ")")
    .call(xAxis);

  svg.append("g")
    .append("text")
    .attr("text-anchor", "end")
    .attr("x", w * .5 + paddingLeft - paddingRight)
    .attr("y", h - paddingBottom + paddingTop + 40)
    .text("Years");

  // y axis

  let yScale = d3
    .scaleBand()
    .domain([new Date("2001 12 01"), new Date("2001 11 01"), new Date("2001 10 01"), new Date("2001 09 01"), new Date("2001 08 01"), new Date("2001 07 01"), new Date("2001 06 01"), new Date("2001 05 01"), new Date("2001 04 01"), new Date("2001 03 01"), new Date("2001 02 01"), new Date("2001 01 01")])
    .range([h - paddingBottom - paddingTop, 0]);
  let yAxis = d3
    .axisLeft(yScale)
    .tickFormat(d3.timeFormat("%B"));
  svg.append("g")
    .attr("transform", "translate(" + paddingLeft + "," + paddingTop + ")")
    .call(yAxis);

  svg.append("g")
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "end")
    .attr("x", -h * .5 + paddingBottom)
    .attr("y", 20)
    .text("Months");

  // chart

  svg.append("g")
    .selectAll("rect")
    .data(data.monthlyVariance)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("x", 100)
    .attr("y", (d, i) => yScale(d.month))
    .attr("width", 9)
    .attr("height", 15)
    .attr("fill", "blue");



            })
  .catch(e => console.log(e));
