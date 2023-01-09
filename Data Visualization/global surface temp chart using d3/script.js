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

  // OLD: create an array for the x scale domain to use
  // let xDomainArray = [];
  // for (let i = 1753; i <= 2015; i++) {
  //   xDomainArray.push(i);
  // }
  // xDomainArray = xDomainArray.filter((d,i) => !(i%15));  // filter to only show 1 in every 15 ticks

  // scaleBand() requires for the domain to be an array
  let xScale = d3.scaleBand()
    .domain(data.monthlyVariance.map((d) => d.year)) // needs to be filtered
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
    .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
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

  // chart

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
    .attr("fill", "grey")
    ;



            })
  .catch(e => console.log(e));
