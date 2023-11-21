// CANVAS JS
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const stx = canvas.getContext("2d");
const ytx = canvas.getContext("2d");
const dtx = canvas.getContext("2d");
const etx = canvas.getContext("2d");


ctx.beginPath();
ctx.arc(100,70,60, 0, 2*Math.PI);
ctx.stroke();

ctx.fillStyle = "white";
ctx.strokeStyle = "#0099FF";
ctx.fill();

stx.beginPath();
stx.arc(120,70,45,0, 2*Math.PI);
stx.stroke();
stx.strokeStyle = "#0099FF";
stx.fillStyle = "#0099FF";
stx.fill();


dtx.beginPath();
dtx.arc(180,70,60, 0, 2*Math.PI);
dtx.stroke();
dtx.fillStyle = "white";
dtx.strokeStyle = "#0099FF";
dtx.fill();

etx.beginPath();
etx.arc(150,70,45,0, 2*Math.PI);
etx.stroke();
etx.strokeStyle = "#0099FF";
etx.fillStyle = "#0099FF";
etx.fill();

// Draw Star
ytx.beginPath();
// Define a start point
ytx.moveTo(142,45);
// Define points
ytx.lineTo(157,95);
ytx.lineTo(117,65);
ytx.lineTo(167,65);
ytx.lineTo(127,95);
ytx.lineTo(142,45);

ytx.strokeStyle = "white";
ytx.fillStyle = "white";
ytx.fill();
// Draw it
ytx.stroke();



// BARCHART CODE  d3js
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    //width = 460 - margin.left - margin.right,
    width = 400 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("./data/mehmet.energibruk.csv", function(data) {
    
// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.komponent; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 200])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.komponent); })
    .attr("y", function(d) { return y(d.energi); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.energi); })
    .attr("fill", "#0099FF")

})
