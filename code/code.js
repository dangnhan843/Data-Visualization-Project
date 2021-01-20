// Nhan Nguyen
// code for project visualization

// object hold geographical map , histogram and quarter
var vis = {
	map_vis: null,
	bar_vis: null,
	quarter: { "q1":["1","2","3"],
			   "q2":["4","5","6"],
			   "q3":["7","8","9"],
			   "q4":["10","11","12"]
			}		
}

window.addEventListener('load', function () {
    vis.map_vis = createMap('map');
    vis.bar_vis = createBarChart('bar');
    vis.map_vis.update('2018/1');	
});


var histCount= [];
var mapCount = [];

var year18=[], num18=[],count18=[];
var year19=[], num19=[], count19=[];
year18[0]='2018/1',year18[1]='2018/2' ,year18[2]='2018/3',
year18[3]='2018/4',year18[4]='2018/5',year18[5]='2018/6', 
year18[6]='2018/7';year18[7]='2018/8',year18[8]='2018/9', 
year18[9]='2018/10',year18[10]='2018/11',year18[11]='2018/12';

year19[0]='2019/1',year19[1]='2019/2' ,year19[2]='2019/3',
year19[3]='2019/4',year19[4]='2019/5',year19[5]='2019/6',
year19[6]='2019/7',year19[7]='2019/8',year19[8]='2019/9' ,
year19[9]='2019/10',year19[10]='2019/11',year19[11]='2019/12';

var num18=[0,0,0,0,0,0,0,0,0,0,0,0];
var num19=[0,0,0,0,0,0,0,0,0,0,0,0];

// add data to list of map and histogram
for (var i=0; i < q12018.length ; i++){   
    q12018[i].start_time = new Date (q12018[i].start_time);
    switch(q12018[i].start_time.getMonth()){
            case 0: num18[0]+=1;
					count18[0]=1;
					break;
            case 1: num18[1]+=1;
					count18[1]=1;
					break;
            case 2: num18[2]+=1;
					count18[2]=1;
					break;
    }
}
for (var i=0; i < q22018.length ; i++){   
    q22018[i].start_time = new Date (q22018[i].start_time);
    switch(q22018[i].start_time.getMonth()){
            case 3: num18[3]+=1;
					count18[3]=1;
					break;
            case 4: num18[4]+=1;
					count18[4]=1;
					break;
            case 5: num18[5]+=1;
					count18[5]=1;
					break;
     }
}
for (var i=0; i < q32018.length ; i++){   
    q32018[i].start_time = new Date (q32018[i].start_time);
    switch(q32018[i].start_time.getMonth()){
            case 6: num18[6]+=1;
					count18[6]=1;
					break;
            case 7: num18[7]+=1;
					count18[7]=1;
					break;
            case 8: num18[8]+=1;
					count18[8]=1;
					break;               
         }
        
}
for (var i=0; i < q42018.length ; i++){   
    q42018[i].start_time = new Date (q42018[i].start_time);
    switch(q42018[i].start_time.getMonth()){
            case 9: num18[9]+=1;
					count18[9]=1;
					break;
            case 10: num18[10]+=1;
					count18[10]=1;
					break;
            case 11: num18[11]+=1;
					count18[11]=1;
					break;             
			}
        
}

for (var i=0; i < q12019.length ; i++){   
    q12019[i].start_time = new Date (q12019[i].start_time);
    switch(q12019[i].start_time.getMonth()){
            case 0: num19[0]+=1;
					count19[0]=1;
					break;
            case 1: num19[1]+=1;
					count19[1]=1;
					break;
            case 2: num19[2]+=1;
					count19[2]=1;
					break;
    }
}
for (var i=0; i < q22019.length ; i++){   
    q22019[i].start_time = new Date (q22019[i].start_time);
    switch(q22019[i].start_time.getMonth()){
            case 3: num19[3]+=1;
					count19[3]=1;
					break;
            case 4: num19[4]+=1;
					count19[4]=1;
					break;
            case 5: num19[5]+=1;
					count19[5]=1;
					break;
     }
}
for (var i=0; i < q32019.length ; i++){   
    q32019[i].start_time = new Date (q32019[i].start_time);
    switch(q32019[i].start_time.getMonth()){
            case 6: num19[6]+=1;
					count19[6]=1;
					break;
            case 7: num19[7]+=1;
					count19[7]=1;
					break;
            case 8: num19[8]+=1;
					count19[8]=1;
					break;               
         }
        
}
for (var i=0; i < q42019.length ; i++){   
    q42019[i].start_time = new Date (q42019[i].start_time);
    switch(q42019[i].start_time.getMonth()){
            case 9: num19[9]+=1;
					count19[9]=1;
					break;
            case 10: num19[10]+=1;
					count19[10]=1;
					break;
            case 11: num19[11]+=1;
					count19[11]=1;
					break;             
			}
        
}  
    
    for(var i=0; i<year18.length;i++){
        histCount.push({Date:year18[i], sights:num18[i]})
    }

    for(var i=0; i<year19.length;i++){
        histCount.push({Date:year19[i], sights:num19[i]})
    }


var createMap = function(elm) {
	// Set a starting viewpoint for the map to load. [34.000, -118.000] is LA location, 12 is zoom distance
	var map = L.map(elm).setView([34.000, -118.000], 12);
	// Linking the OpenStreetMap API to gather the underlying map information               
	mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
	L.tileLayer(
	    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; ' + mapLink + ' Contributors',
	    maxZoom: 18,
	    }).addTo(map);				
	// Init SVG layer
	map._initPathRoot()    
	//  SVG pick from map object
	var svg = d3.select("#"+elm).select("svg"),
	g = svg.append("g");
	
	var t = d3.transition().duration(500);

	function _update(mapDate){
	
	dateList = mapDate.split("/");
	month = dateList[1];
	for (var key in vis.quarter) {
		if (vis.quarter[key].includes(month)) {
			mapMonth = key;
		}
	}

	var fileName = 'startCount_' + dateList[0] + '_' + mapMonth;
	var count_list = [];
	var data_list = [];

	fileName = eval(fileName);
	// read map data
	for (var i = 0; i < fileName.length; i++) {
		fileName[i].LatLng = new L.LatLng(fileName[i].coordinate[0], fileName[i].coordinate[1]);
		
		if (fileName[i].date == mapDate) {
			data_list.push(fileName[i]);
			count_list.push(fileName[i].count);
		}
	}

	// create a div for the tooltip
	var div = d3.select("body").append("div")	
	   			.attr("class", "tooltip")				
	   			.style("opacity", 0);

	//  scale for the circle radius 
	var circleRadius = d3.scaleLinear()
						.domain(d3.extent(count_list))
						.range([5,30]);

	var feature = g.selectAll("circle")
					.data(data_list)
	// Draw circle and add the click event
			feature.enter().append("circle")
					.attr("class", "maps")
					.style("stroke", "black")  
					.style("opacity", .4) 
					.style("fill", "blue")
					.attr("r", function(d) {return circleRadius(d["count"])}) // Call to the circleRadius scale
    	    		.attr("transform", 
						function(d) { 
							return "translate("+ 
								map.latLngToLayerPoint(d.LatLng).x +","+ 
								map.latLngToLayerPoint(d.LatLng).y +")";
								}
							)					
					.on("mouseover", function(d) {		                          
	          				d3.select(this).style("fill", "red")             
	          					.style("stroke-width", "3px")
	                		})
    	    		.on("mouseout", function(d) {	
    	    				d3.select(this).style("fill", "blue")
    	        				.style("stroke-width", "1px");
		        				})
    	    		.append("svg:title").text(function(d){ count = "Total Count: "+d.count; return count;});

	map.on("viewreset", update);

	feature.exit()
		.attr("class", "maps")
		.transition(t)
		.attr('r', 0)
		.remove();

	update();


	function update() {
		feature.attr("transform", 
		function(d) { 
			return "translate("+ 
				map.latLngToLayerPoint(d.LatLng).x +","+ 
				map.latLngToLayerPoint(d.LatLng).y +")";
			}
		)
	}
}
	return {
	        update: function(mapDate) {
	            _update(mapDate);
	        }};
}

var createBarChart = function(elem) {
    var svg = d3.select('#'+elem); 
    var barWidth = 51.55;
    var mouseClick = function(d, i){

    	d3.selectAll('rect')
    		.style('fill', 'grey')
    		.style('opacity', 1);
    	d3.select(this)
    		.style('fill', 'blue')
    		.style('opacity', .6);
    	vis.map_vis.update(d.Date);

    }

    
    var sightArray=[];
    for (var i = 0; i < histCount.length; i++){  
		sightArray[i]= histCount[i].sights;
    }

    var dateList = ["2018/1", "2018/2", "2018/3", "2018/4", "2018/5", "2018/6", "2018/7", "2018/8", "2018/9", "2018/10", "2018/11", "2018/12", 
		"2019/1", "2019/2", "2019/3", "2019/4", "2019/5", "2019/6", "2019/7", "2019/8", "2019/9", "2019/10", "2019/11", "2019/12"];

    var _yScale = d3.scaleLinear()
            .domain([d3.max(sightArray), 0])
            .range([20, 150]);

    var _xScale = d3.scaleBand()
			.domain(["Jan 18","Feb 18","Mar 18","Apr 18", "May 18", "Jun 18","Jul 18", "Aug 18","Sep 18","Oct 18", "Nov 18", "Dec 18",
					"Jan 19","Feb 19","Mar 19","Apr 19", "May 19", "Jun 19","Jul 19", "Aug 19","Sep 19","Oct 19", "Nov 19", "Dec 19"])
            .range([50, 9000/7]); 
    
    var _xAxis = d3.axisBottom().scale(_xScale);
    var _yAxis= d3.axisLeft().scale(_yScale);
    svg.append("g")
        .attr("transform", "translate(0, 150)")
        .call(_xAxis);
    svg.append("g")
        .attr("transform", "translate(50, 0)")
        .call(_yAxis);

    var _createBar =svg.selectAll('rect')
            .data(histCount)
            .enter()
            .append('rect')
            .attr('y',d => {return _yScale(d.sights);})
            .attr('height',d => {return 150-_yScale(d.sights);})
            .attr('width', (barWidth-.1))
            .attr('fill','grey')
            .attr("transform", function (d, i) {
                var translate = 50+barWidth*i;
                return "translate("+ translate +")";
            })
            .on('click', mouseClick)
            .append('title')
            .text(function(d,i){
                var setTitle="Date: "+d.Date+", Total Count: "+ d.sights;
                return setTitle;
            });
}

