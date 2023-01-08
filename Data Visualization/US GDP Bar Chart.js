/**
  The following is a simple bar chart using d3 and the data from
  https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

  it has:
  - a css tooltip
  - highlights current bar on mouseover
  - x and y axis info
  - gets data from json output

optional improvements todo:
fancier tooltip (add a comma for money, format date to be more readable)
calculate height of bars dynamically based off largest value object in dataset (currently hardcoded)
**/


// grabs the json file using d3 and uses the promise framework (then/catch)
// then I compose the entire chart within

d3.json ('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
  .then(data => {

  // width and height of chart

  const w = 850,
        h = 450;

  // create parent level svg for the chart

  let chartSVG = d3
    .select('#chart')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  // tooltip div
  let tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // bar chart

    let barWidth = (w - 40) / data.data.length;

    chartSVG.append('g')
        .selectAll("rect")
        .data(data.data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d, i) => 40 + i * barWidth)
        .attr("y", (d, i) => ((h - 35) - d[1] * (h - 35) / 18064.7))
        .attr("width", barWidth)
        .attr("height", (d, i) => d[1] * (h - 35) / 18064.7)
        // add tooltip on mouseover
        .on("mouseover", function(event, d) {
           tooltip.transition()
             .duration(100)
             .style("opacity", .9);
           tooltip.html(d[0] + "\n" + "$" + d[1] + " Billion")
             .style("left", (event.pageX) + "px")
             .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
          tooltip.transition()
            .duration(250)
            .style("opacity", 0);
        });

 // chart x and y axis
 // using linear for y and time/date for x

  let xScale = d3.scaleTime()
    .domain([new Date("1947-01-01"), new Date("2015-07-01")])
    .range([0, w - 40]);
  let xAxis = d3.axisBottom(xScale);

chartSVG.append('g')
  .attr("transform", "translate(40," + (h - 35) + ")")
  .call(xAxis);

  let yScale = d3.scaleLinear().domain([0, 18064.7]).range([h - 35, 0]);
  let yAxis = d3.axisLeft(yScale);

  chartSVG.append('g')
    .attr("transform", "translate(40,0)")
    .call(yAxis);

  chartSVG
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -200)
      .attr('y', 60)
      .text('Gross Domestic Product');

    chartSVG
      .append('text')
      .attr('x', w / 2 + 50)
      .attr('y', h - 2)
      .text('More Information: http://www.bea.gov/national/pdf/nipaguid.pdf')
      .attr('id', 'url');


        })
  .catch(e => console.log(e));


// html and css

<html>

<head>
  <script src="https://d3js.org/d3.v7.min.js"></script>
</head>

<body>
  <div id="container">
    <div id="title">
      <h1>United States GDP</h1>
    </div>
    <div id="chart"></div>
</body>

</html>

body {
  background: #708090;
}
#container {
  width: 950px;
  height: 600px;
  background: white;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
#title {
  margin: auto;
  width: 350px;
  height: 100px;
}
#title h1 {
  font-size: 40px;
  font-weight: 100;
  padding: 20px 0;
}
#chart {
  margin: auto;
  width: 850px;
  height: 450px;
}
#url {
  text-align: right;
  margin-right: 80px;
  font-size: 14px;
}

.bar {
  fill: #58bcff;
}
.bar:hover {
  fill: white;
}

title {
  background-color: white;
}

div.tooltip {
  position: absolute;
  text-align: center;
  width: 100px;
  height: 30px;
  padding: 2px;
  font: 12px sans-serif;
  background: white;
  border: 0px;
  border-radius: 5px;
  pointer-events: none;
}
