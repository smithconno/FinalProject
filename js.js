var promise = d3.csv("data/Martial-status-data.csv");

promise.then(
function(data){
console.log(data)
})

var promise = d3.csv("data/Parental-presence-data.csv");

promise.then(
function(data){
console.log(data)
})
var setup = function(array2D)
{

    console.log("selectedshape", selectedShape)
    d3.select("svg")
        .attr("width", screen.width)
        .attr("height", screen.height)
        .append("g")
        .attr("id", "graph")
        .attr("transform", "translate(" + margins.left + ","+margins.top+")");
    
    var width= screen.width - margins.left-margins.right;
    var height = screen.height - margins.top - margins.bottom;
    
    var xScale = d3.scaleLinear()
                    .domain([0, 38])
                    .range([0,width])
    
    var yScale = d3.scaleLinear()
                    .domain([0, 10])
                    .range([height, 0])

    
    var xAxis = d3.axisBottom(xScale)
    var yAxis = d3.axisLeft(yScale)
    
    d3.select("svg")
        .append("g")
        .classed("axis", true)
    
    d3.select(".axis")
        .append("g")
        .attr("id", "xAxis")
        .attr("transform", "translate(" + margins.left + "," + (margins.top+height) + ")")
        .call(xAxis)
    
      d3.select(".axis")
        .append("g")
        .attr("id", "yAxis")
        .attr("transform", "translate(25," + margins.top + ")")
        .call(yAxis)




