



var promise1 = d3.csv("data/combined.csv");

/*promise1.then(
function(data){
console.log(data)
}) */

/*var promise2 = d3.csv("data/Parental-presence-data.csv");

promise2.then(
function(data){
console.log(data)
    setup(data)
}) */

var promise = d3.json("usa.json");

Promise.all([promise1, promise])
.then(
function(data){
    console.log(data)
    console.log(data[1].features,data[0])
    var hash = combine(data[1].features,data[0]);
    drawstates(hash);
}
  // setup(data) 
 //drawstates(data);
)
var combine = function(dataA, dataB) {
    var hash = {};
   
    dataA.forEach(function(d,i)
    { var id = (d.properties.NAME)
    console.log(id,d)
    hash[id]= d;
    });
    
    
    
//    console.log(hash);
     dataB.forEach(function(e2)
    {  
         console.log(e2)
         if( hash[e2.State])
        { hash[e2.State].info=e2;}
    })
    console.log(dataA)
    return dataA;
}
    



var drawstates=function(data){
    
   var screen = {width: 1000, height:500}
    
   
    var projection = d3.geoAlbersUsa()
                    .translate([screen.width/2, screen.height/2])
                    .scale([1000])
                   
   var feat =[];
    data.forEach(function(d){
        feat.push(d.features);
    })
   
    var path=d3.geoPath(projection)
               .projection(d3.geoAlbersUsa());
    var svg=d3.select("svg")
    .attr("width", screen.width)
    .attr("height", screen.height);

    svg.selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("d", path )
    .on("mouseover", function(state)
        {console.log("works", state.properties.NAME, state.info.Lowincome1, state.info.Abovelowincome1, state.info.Lowincome2, state.info.Abovelowincome2, state.info.Lowincome3, state.info.Abovelowincome3, state.info.Lowincome4, state.info.Abovelowincome4)
    
    d3.selectAll("#jerry")
.selectAll("p")
    .data(data)
    .enter()
.append("p")
    .text(function(state)
    {
//console.log(state) 
        return console.log(state.properties.NAME)
          })})
    


    
    
    
    
    /*.on("mouseover", function(d)
 {
    console.log("Lowincome1")
     
{
    console.log("Lowincome1")
     d3.selectAll("path")
    svg.append("text")
    .attr("id","tooltip")
     .attr("x", 650)
     .attr("y", 20)
     .attr("font-size", "25px")
     .attr("fill","black")
.text(d.properties.NAME)
    
    svg.append("text")
    .attr("id", "tooltip")
    .attr("x", 650)
    .attr("y", 50)
    .attr("font-size", "11px")
    .text("Crime Per 100,000 People:  " +  d.data.Lowincome1)
    
    svg.append("text")
    .attr("id", "tooltip")
    .attr("x", 650)
    .attr("y", 80)
    .attr("font-size", "11px")
    .text("Median Household Income:  " + "$" + d.data.Lowincome1) 
    

 }



}
.on("mouseout", function() {
    d3.selectAll("#tooltip").remove()
})) 
       */   
       
     



       
























//var projection = d3.geoAlbersUsa()
                    //.translate([width/2, height/2])
                    //.scale([500])


//var screen = {width: 3000, height:3000}




/*var setup = function(children)
{

    
    d3.select("svg")
        .attr("width", screen.width)
        .attr("height", screen.height)
        .append("g")
        .attr("id", "graph")
        .attr("transform", "translate(" + margins.left + ","+margins.top+")")
    
    d3.select("svg")
        .append("svg")
        .attr("usa.json")
        
        .data(json.features)
        .enter()
        .append("path")
        .attr("data" , path);
    
    var width= screen.width - margins.left-margins.right;
    var height = screen.height - margins.top - margins.bottom;
    
    /*var xScale = d3.scaleLinear()
                    .domain([0, 38])
                    .range([0,width])
    
    var yScale = d3.scaleLinear()
                    .domain([0, 10])
                    .range([height, 0]) */

    
  /*  var xAxis = d3.axisBottom(xScale)
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
} */
/*var createGraph = function(children, xScale, yScale, cScale, index)
    {
        
      
    var array = d3.select("#graph")
            .selectAll("circle")
            .data(children[index])
            .transition()
            .attr("fill", function(){
                return cScale(children[index].quizes.grade)
            })
            .attr("cx", function(num,index)
                  {
                return xScale(index);
            })
            .attr("cy",function(num)
                  {
                return yScale(num.grade);
            })
            .attr("r", 3)

    } */







}