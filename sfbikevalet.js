            var valeticon = L.Icon.extend({
            	options: {
                                   iconSize: [32,37],
                                   iconAnchor: [15,18],
                                   popupAnchor: [0, 0]
                                   }
                                   });
            var sfbikeicon = new valeticon({iconUrl :'SFbikeValet-mapicon.png'})
       		var wPicon = new valeticon({iconUrl :'bikeparking.svg' })
       			
       		
                var layers = ["toner"];
                
                var layer = "toner";
                var map = new L.Map(layer, {
                                    center: new L.LatLng(37.75, -122.45),
                                    zoom: 12
                                    });
                map.addLayer(new L.StamenTileLayer(layer));
                
                function onEachFeature(feature, layer) {
                    // does this feature have a property named popupContent?
                   
                    if (feature.properties && feature.properties.Dates[0]) {
                      var popUP = [];
                        for(i=0; i<feature.properties.Dates.length; i++){
                            popUP[i] = feature.properties.Dates[i];
                        }
                           layer.bindPopup("<h4>" + feature.properties.Bike_Valet +"</h4><p>Come Park your bike on: </p>" + String(popUP));
                    }
                }
                
                L.geoJson(valetlocations, {
                        
                          pointToLayer: function (feature, latlng){
                          if(feature.properties.id<100){
                          return L.marker(latlng, {icon: sfbikeicon});}
                          else{
                          	return L.marker(latlng, {icon: wPicon});
                          }
                          },
                           onEachFeature: onEachFeature
                          }).addTo(map)
                //The popup I had the easyn non-dynamic way.
                ///.bindPopup("<p>Come Park your bike on need to figure out how to get right date from json array.</p>");
                function onMapClick(e) {
                    alert("You clicked the map at " + e.latlng);
                }
 
                
                map.on('click', onMapClick);
               
             function centermap(){
               
              map.setView([37.75, -122.45], 12)
              
                }   
                
            function giantsvalet(){
               map.setView([37.77796, -122.38885], 17)
               }
         	function winterfest(){
         	map.setView([ 37.78306, -122.40538 ], 16)
         		}