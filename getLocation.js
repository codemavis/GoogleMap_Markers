function geoloc() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            // Your location:
            // Latitude: 6.870749099999999
            // Longitude: 79.87728779999999

            function (p) {

                var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);

                pointMap(LatLng, p);

            },

            function (error) {
                if (error.code == error.PERMISSION_DENIED) {
                    var LatLngDef = new google.maps.LatLng(23.634501, -102.552784);
                    pointMap(LatLngDef, error);
                }
            });

    } else {
        alert('Geo Location feature is not supported in this browser.');
    }
}

function pointMap(LatLng, p) {
    var mapOptions = {
        center: LatLng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
    });

    google.maps.event.addListener(marker, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow();
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });
}

geoloc();