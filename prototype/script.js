$(document).ready(function() {
    
    /* var circleRadii = [40, 20, 10];
    
    var svgContainer = d3.select("body").append("svg")
        .attr("width", 200)
        .attr("height", 200);
    
    var circles = svgContainer.selectAll("circle")
        .data(circleRadii)
        .enter()
        .append("circle");
    
    var circleAttributes = circles
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("r", function(d) {return d;})
        .style("fill", function(d) {
            var returnColor;
            if (d === 40) {returnColor = "green";}
            else if (d === 20) {returnColor = "purple";}
            else if (d === 10) {returnColor = "red";}
            return returnColor;
        });
    */
    
    /* var spaceCircle = [30, 70, 110];
    
    var svgContainer = d3.select("body").append("svg")
        .attr("width", 200)
        .attr("height", 200);
    
    var circles = svgContainer.selectAll("circle")
        .data(spaceCircle)
        .enter()
        .append("circle");
    
    var circleAttributes = circles
        .attr("cx", function(d) {return d;})
        .attr("cy", function(d) {return d;})
        .attr("r", 20)
        .style("fill", function(d) {
            var returnColor;
            if (d == 30) {returnColor = "green";}
            else if (d == 70) {returnColor = "purple";}
            else if (d == 110) {returnColor = "red";}
            return returnColor;
        });
    */
   
    /* var jsonCircles = [
        {
            "x_axis": 30,
            "y_axis": 30,
            "radius": 20,
            "color": "green"
        }, 
        {
            "x_axis": 70,
            "y_axis": 70,
            "radius": 20,
            "color": "purple"
        }, 
        {
            "x_axis": 110,
            "y_axis": 100,
            "radius": 20,
            "color": "red"
        }
    ];
    
    var svgContainer = d3.select("body").append("svg")
        .attr("width", 200)
        .attr("height", 200);
    
    var circles = svgContainer.selectAll("circle")
        .data(jsonCircles)
        .enter()
        .append("circle");
    
    var circleAttributes = circles
        .attr("cx", function(d) {return d.x_axis;})
        .attr("cy", function(d) {return d.y_axis;})
        .attr("r", function(d) {return d.radius;})
        .style("fill", function(d) {return d.color;})
    */
    
    /* var svgContainer = d3.select("body").append("svg")
        .attr("width", 200)
        .attr("height", 200);
    
    var rectangle = svgContainer.append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 50)
        .attr("height", 100);
    
    var circle = svgContainer.append("ellipse")
        .attr("cx", 100)
        .attr("cy", 50)
        .attr("rx", 25)
        .attr("ry", 10)
        .style("fill", "red");
    
    var line = svgContainer.append("line")
        .attr("x1", 5)
        .attr("y1", 5)
        .attr("x2", 50)
        .attr("y2", 50)
        .attr("stroke-width", 2)
        .attr("stroke", "green");
    */
    
        
    var lineFunction = d3.svg.line()
        .x(function(d) {return d.x;})
        .y(function(d) {return d.y;})
        .interpolate("linear");
    
});