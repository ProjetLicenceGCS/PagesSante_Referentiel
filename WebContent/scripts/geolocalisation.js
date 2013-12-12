function afficheGeolocalisationSimple(){

	if(document.getElementById("geosimple").checked == true){
		$("#detailsgeolocalisationsimple").show();
		//geolocate();
		$("#geolocalisationauto").hide();
		$("#geolocalisationmanuelle").show();
	}
	else{
		$("#detailsgeolocalisationsimple").hide();
	}
}

function afficheGeolocalisationAvancee(){
	if(document.getElementById("geoavancee").checked == true){
		$("#detailsgeolocalisationavancee").show();
		//geolocate();
	}
	else{
		$("#detailsgeolocalisationavancee").hide();
	}
}

function afficheGeolocalisationManuelle(){

	if(document.getElementById("localisationGPS").checked == true){
		$("#geolocalisationmanuelle").hide();
	}
	else{
		$("#geolocalisationmanuelle").show();
	}
}

function calculDistance(depart, destinations){
	
	$("#results").hide();
			
	var dest = destinations.split(';');
	var len = dest.length;
	len = len - 1;

	distanceGoogleMaps(depart,dest,len,0);
	
}

function distanceGoogleMaps(depart,destinations,max,i){
	
	   var directionsService = new google.maps.DirectionsService();
         
	   var request = {
	       origin: depart, 
	       destination: destinations[i],
	       travelMode: google.maps.DirectionsTravelMode.DRIVING
	   };
	   
	   
	   directionsService.route(request, function(response, status) {
	      if (status == google.maps.DirectionsStatus.OK) {

	         // Display the distance:
	         var distanceKm = response.routes[0].legs[0].distance.value;
	         distanceKm = distanceKm/1000;
	        
	         var id = "distance";
	         
	         if (i > 0){
	        	 id = id + i;
	         }
	         
	         document.getElementById(id).innerHTML = distanceKm + " Km";

	         	         
	         if(i  + 1 < max){	        	         	 
	        	 setTimeout(function(){distanceGoogleMaps(depart,destinations,max,i + 1);},600);
	         }
	         else{
	        	 $("#results").show();
	        	 $("#chargementresultat").hide();
	         }
	         
	      }
	      else{
	    	  if(i  + 1 < max){	        	         	 
	    		  setTimeout(function(){distanceGoogleMaps(depart,destinations,max,i + 1);},600);
		      }
	    	  else{
	    		  $("#results").show();
	    		  $("#chargementresultat").hide();
	    	  }
	      }
	   });
	   
}

function geolocate(){
	if (navigator.geolocation) {
		$("#geolocalisationauto").show();
		$("#geolocalisationmanuelle").hide();
		navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {enableHighAccuracy:false, timeout:5000, maximumAge:600000});
	} else {
		$("#geolocalisationauto").hide();
		$("#geolocalisationmanuelle").show();
	}
}
   
function successCallback(position){
  $("#lat").val(position.coords.latitude); 
  $("#lng").val(position.coords.longitude);
}; 
 
function errorCallback(error){
	var info = "Erreur lors de la géolocalisation : ";
	switch(error.code){
	    case error.PERMISSION_DENIED:
	    	info += "Vous n'avez pas autorisé l'accès à votre position. Veuillez saisir une adresse manuellement.";
	      break;     
	    case error.POSITION_UNAVAILABLE:
	    	info += "Votre emplacement n'a pas pu être déterminé. Veuillez saisir une adresse manuellement.";
	      break;
	    case error.TIMEOUT:
	    	info += "Le service n'a pas répondu à temps. Veuillez saisir une adresse manuellement.";
	      break;
	    case error.UNKNOWN_ERROR:
	    	info += "Erreur inconnue. Veuillez saisir une adresse manuellement.";
	    break;
    }
	alert(info);
	$("#geolocalisationauto").hide();
	$("#geolocalisationmanuelle").show();
};