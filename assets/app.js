var lat;
var long;

document.getElementById("get").addEventListener('click', getText);

// Method 1 - fetch api, newer 

// function getText(){
// fetch('https://developers.zomato.com/api/v2.1/categories',
// {
// 	method: "GET",
// 	headers: {
// 		"Accept" : "application/json",
// 		"user-key" : "44480ab9410857d4da3e86a03f077a60"
// 	}
// })
//   .then(response => response.json())
//   .then(json => console.log(json))
// };


// Method 2 - XMLHttpRequest, older


function getText(){
	// console.log("testing");
	// var lat = "35.7821196";
	// var lon = "-78.6100862";
	var radius = "4";
	var category = "3";
	var url = 'https://developers.zomato.com/api/v2.1/search?lat=%20'+lat+'&lon='+long+'&radius='+radius+'&category='+category+'&sort=real_distance&order=asc'; 
	var xhr = new XMLHttpRequest();
	console.log();
	
	xhr.open("Get", url, true);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.setRequestHeader("user-key", "44480ab9410857d4da3e86a03f077a60");

	xhr.onload = function(){
		if(this.status == 200){
			var users = JSON.parse(this.responseText);
			console.log(users);
		}
		else{
			console.log(this.status);
		}
	}

	xhr.send();
}

// ---------------------------- Get User GeoLocation ----------------------------


document.getElementById("location").addEventListener('click', getLocation);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    lat = position.coords.latitude; 
    long = position.coords.longitude;
    console.log('latitude: ' + lat + ", longitude: " + long);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

// Next use users location with category pick to send a get request to the "search" api.