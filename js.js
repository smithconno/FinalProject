



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
    var hash = [];
   
    dataA.forEach(function(d,i)
    { var id = parseInt(d.properties.STATE)
    hash[i]={
        info: dataB[id],
        features: d
    }
    });
    
    
    
    console.log(hash);
    return hash;
   
    /*dataB.forEach(function(e2)
    {
        hash[d.NAME].data=e2;
    })*/
    


}
    



var drawstates=function(data){
    
   var screen = {width: 3000, height:3000}
    
   
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
    .data(feat)
    .enter()
    .append("path")
    .attr("d", path );
  

}

var incomecolor = d3.scalesequential(d3.interpolateBlues)
.domain([0,d3.max(data,function(d)
                {
                    
                    var value = d.data
                    
                    
                    if(value){
                        return value.Income
                    }

                    else{
                        
                        return 0
                    }
}
                 
                 
                 
                 
                 )])



























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







