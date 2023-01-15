     /**
    Simple data visualization scatterplot graph using D3.js v7 and data from here:
    https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json
    using this as an example:
    https://scatterplot-graph.freecodecamp.rocks/

    Optional Todo:
     - replace all hardcoded padding with variables and move y axis text to left side of axis
     - make tooltip prettier
     - use .timeParse() for all Date objects (https://github.com/d3/d3/blob/main/API.md#time-formats-d3-time-format)
     -
    **/

    // Code
    // use d3.json to grab the json file and use the JS promise framework to use it.

    d3.json ('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')
      .then(data => {

      // width/height for svg canvas

      const w = 850,
            h = 550,
            paddingw = 40,
            paddingh = 40;

      // Parent/main graph SVG

      let graphSVG = d3.select('#d3graph')
        .append('svg')
        .attr('width', w)
        .attr('height', h);

      // Tooltip
      let tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      // Axis
      // range is the size of the axis in pixels
      // domain is the range of data plotted to the axis

      let yScale = d3.scaleTime()
        .domain([d3.min(data, d => new Date(`2000 01 01 00:${d.Time}`)), d3.max(data, d => new Date(`2000 01 01 00:${d.Time}`))])
        .range([0, h - paddingh]);

      let yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%M:%S')).ticks(10);

      graphSVG.append('g')
        .attr("transform", "translate(40, 20)") // where to begin the y axis
        .call(yAxis);

      let xScale = d3.scaleLinear()
      .domain([d3.min(data, (d) => d.Year), 1 + d3.max(data, (d) => d.Year)])
      .range([0, w - paddingw]);

      // format the xAxis to be dates so it doesn't put an apostrophe in as a number
      let xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d')).ticks(20);

      graphSVG.append('g')
        // position the x axis 40 pixels right and height - 20 pixels down so you can still see it
        .attr("transform", "translate(40," + (h - 20) + ")")
        .call(xAxis);



      // scatter plot

    graphSVG.append('g')
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr("cx", d => paddingw + xScale(d.Year))
      .attr("cy", d => 20 + yScale(new Date(`2000 01 01 00:${d.Time}`)))
      .attr("r", 8)
      .attr("stroke", "black")
      .attr("stroke-width", "1px")
      .attr("fill", (d, i) => {
        if (d["Doping"] == "") {
          return "rgba(255, 127, 14, 80%)"
        } else { return "rgba(31, 119, 180, 80%)"}
      })
      // add tooltip on mouseover
      .on("mouseover", function(event, d) {
       tooltip.transition()
         .duration(100)
         .style("opacity", .9);
       tooltip.html("<strong>" + d["Name"] + ":</strong> " + d["Nationality"] + "<br />" + "Year: " + d["Year"] + "<br />" + "Time: " + d["Time"] + "<br />" + "<em>" + d["Doping"] + "</em>")
         .style("left", (event.pageX + 10) + "px")
         .style("top", (event.pageY - 30) + "px");
      })
      .on("mouseout", function(d) {
      tooltip.transition()
        .duration(250)
        .style("opacity", 0);
      });

        // Text

      graphSVG.append("text")
          .attr("transform", "rotate(-90)")
          .attr("x", -200)
          .attr("y", 135)
          .attr("dy", "-5.1em")
          .attr("text-anchor", "end")
          .style("font-size", "15px")
          .style("font-weight", "bold")
          .text("Time in Minutes");

      const legend=graphSVG.append("g")
                        .attr("id", "legend")
                        .attr("style","font-size:15px; text-anchor:end")

      legend.append("text")
        .attr("x", 820)
        .attr("y", 250)
        .text("No doping allegations")
      legend.append("rect")
        .attr("fill", "orange")
        .attr("x", 825)
        .attr("y", 237)
        .attr("width", 16)
        .attr("height", 16)

      legend.append("text")
         .attr("id", "legend")
         .attr("x", 820)
         .attr("y", 270)
         .text("Riders with doping allegations")
      legend.append("rect")
         .attr("fill","dodgerblue")
         .attr("x", 825)
         .attr("y", 258)
         .attr("width", 16)
         .attr("height", 16)

              })
      .catch(e => console.log(e));