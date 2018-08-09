

function funcX(){

    var pointT = [
        {lat: 41.1429, lng:  -104.7969}, //41.1429 / -104.7969
        {lat: 37.6918, lng:  -121.898}, //37.6918 / -121.898
        {lat: 41.1905, lng:  -104.4109}, //41.1905 / -104.4109
        {lat: 44.5511, lng:  -104.6805}, //44.5511 / -104.6805
        {lat: 27.0522, lng:  103.2437}, //27.0522 /  103.2437    
        {lat: 43.5367, lng:  -109.6422} //43.5367 / -109.6422
        ] ;

        initMap(pointT);
}

function initMap(point) {

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: point[0]});

        var marker = new Array;

        for(var i=0; i<point.length; i++){
            marker[i] = new google.maps.Marker({position: point[i], map: map});
        }

    //    alert(marker[2].position);
    //    alert(marker[4].position);

    // map.addListener('click', function() {
    //     alert(this.position.lat());
    //   });

    // marker[0].addListener('click', function() {
    //     window.open("https://www.google.com?markerPosition="+marker[0].position);
    //   });

    //   marker[1].addListener('click', function() {
    //     window.open("https://www.google.com?markerPosition="+marker[1].position);
    //   });

    //   marker[2].addListener('click', function() {
    //     window.open("https://www.google.com?markerPosition="+marker[2].position);
    //   });

      for (var j=0; j<point.length; j++){
        
        marker[j].addListener('click', function() {
             window.open("https://www.google.com"); //?markerPosition="+marker[j].position
          });
      }
  }

  

  //funcX();

