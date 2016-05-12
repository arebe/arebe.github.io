// ht http://bl.ocks.org/mbostock/3750558
var width = 960,
    height = 500;

var force = d3.layout.force()
    .size([width, height])
    .charge(-1200)
    .linkDistance(220)
    .on("tick", tick);

var drag = force.drag()
    .on("dragstart", dragstart);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");

d3.json("data/graph.json", function(error, graph) {
  force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

  link = link.data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .on("click", linkclick);


var node = svg.selectAll(".node")
    .data(graph.nodes)
    .enter().append("g")
    .attr("class", "node")
    .on("dblclick", dblclick)
    .call(force.drag);

node.append("circle")
    .attr("r", 20);

node.append("text")
      .attr("dx", 10)
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.name })
      .style("stroke", "gray");

});

function tick() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

   d3.selectAll("circle").attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
   d3.selectAll("text").attr("x", function (d) { return d.x; })
        .attr("y", function (d) { return d.y; });
}

function dblclick(d) {
  d3.select(this).classed("fixed", d.fixed = false);
}

function dragstart(d) {
  d3.select(this).classed("fixed", d.fixed = true);
}

function linkclick(d){
  console.log("link clicked: "+d.index);
   var target = "#modal"+d.index;
      $(target).trigger('openModal');
}