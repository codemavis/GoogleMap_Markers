function loadMap() {
    var pointT = {"record":{"items":[{"image":"/core/media/media.nl?id=71325&c=TSTDRV1358076&h=b4ee3d196637c5266451","id":"3051","name":"AMERICAN LEGION","state":"Wyoming","class":"Human Services","url":"https://www.legion.org/","nfp_members":"250","total_raised":"725000.00","reg_emp":true,"currency":"USD","stateid":"WY","address":"AMERICAN LEGION\n1320 HUGUR AVE\nCHEYENNE WY 82001-4917\nUnited States","phone":"4389393","comments":"The American Legion was chartered and incorporated by Congress in 1919 as a patriotic veterans organization devoted to mutual helpfulness.","redirecturl":"https://system.netsuite.com/app/site/hosting/scriptlet.nl?script=1360&deploy=1&compid=TSTDRV1358076","latitude":"41.1429","longitude":"-104.7969"},{"image":"/core/media/media.nl?id=71321&c=TSTDRV1358076&h=adcbb97bb7bfe2b2675f","id":"3044","name":"Animal Rescue Foundation","state":"California","class":"Charity","url":"https://www.arflife.org/mission","nfp_members":"171","total_raised":"551000.00","reg_emp":true,"currency":"USD","stateid":"CA","address":"Animal Rescue Foundation\r\n111 Main St\r\nPleasanton CA 94588\r\nUnited States","phone":"4893929","comments":"Animal Rescue Foundation (ARF) is an award-winning, nationally recognized leader for its unique mission of \"People Rescuing Animals…Animals Rescuing People.®\"","redirecturl":"https://system.netsuite.com/app/site/hosting/scriptlet.nl?script=1360&deploy=1&compid=TSTDRV1358076","latitude":"37.6918","longitude":"-121.898"},{"image":"/core/media/media.nl?id=71324&c=TSTDRV1358076&h=36aa8069fadca00bc89e","id":"3052","name":"BURNS ELEMENTARY PARENT ORGANIZATION","state":"Wyoming","class":"Youth Development","url":"http://www.laramie2.org/3/Content/burnsepo","nfp_members":"75","total_raised":"82000.00","reg_emp":"","currency":"USD","stateid":"WY","address":"BURNS ELEMENTARY PARENT ORGANIZATION\nPO BOX 304\nBURNS WY 82053-0304\nUnited States","phone":"5893958","comments":"The Burns Elementary Parent Organization (BEPO) was established to inspire parental involvement in activities that benefit our students and school. We strive to develop a close relationship between teachers, staff and parents by encouraging and maintaining open lines of communication.","redirecturl":"https://system.netsuite.com/app/site/hosting/scriptlet.nl?script=1360&deploy=1&compid=TSTDRV1358076","latitude":"41.1905","longitude":"-104.4109"},{"image":"/core/media/media.nl?id=71322&c=TSTDRV1358076&h=f3813082cb93b1268cb2","id":"3055","name":"DEVILS TOWER SACRED TO MANY PEOPLE INC","state":"Wyoming","class":"Arts and Culture","url":"https://www.nps.gov/deto/index.htm","nfp_members":"121","total_raised":"95000.00","reg_emp":"","currency":"USD","stateid":"WY","address":"DEVILS TOWER SACRED TO MANY PEOPLE INC\nPO BOX 12\nDEVILS TOWER WY 82714-0012\nUnited States","phone":"8943938","comments":"The Tower is an astounding geologic feature that protrudes out of the prairie surrounding the Black Hills. It is considered sacred by Northern Plains Indians and indigenous people.","redirecturl":"https://system.netsuite.com/app/site/hosting/scriptlet.nl?script=1360&deploy=1&compid=TSTDRV1358076","latitude":"44.5511","longitude":"-104.6805"},{"image":"","id":"3054","name":"SHOSHONE BACK COUNTRY HORSEMEN","state":"Wyoming","class":"Animal Related","url":"http://www.wyobch.org/shoshone_about.htm","nfp_members":"108","total_raised":"91000.00","reg_emp":"","currency":"USD","stateid":"WY","address":"SHOSHONE BACK COUNTRY HORSEMEN\nPO BOX 465\nPOWELL WY 82435-0465\nUnited States","phone":"8439294","comments":"The Shoshone Chapter of the Back Country Horsemen of America of Wyoming includes members from across the Big Horn Basin of northwestern Wyoming.  We also have members from across the country who do not have a local chapter in their home state and enjoy riding in Wyoming.","redirecturl":"https://system.netsuite.com/app/site/hosting/scriptlet.nl?script=1360&deploy=1&compid=TSTDRV1358076","latitude":"27.0522","longitude":" 103.2437"},{"image":"/core/media/media.nl?id=71323&c=TSTDRV1358076&h=941268d0b8a87c0cc408","id":"3053","name":"WILLOW CREEK REFUGE & PRESERVE","state":"Wyoming","class":"Animal Related","url":"https://www.guidestar.org/profile/01-0699262","nfp_members":"150","total_raised":"324000.00","reg_emp":true,"currency":"USD","stateid":"WY","address":"WILLOW CREEK REFUGE & PRESERVE\n76 STONEY POINT RNCH\nDUBOIS WY 82513-0000\nUnited States","phone":"7843934","comments":"Wildlife Preservation/Protection","redirecturl":"https://system.netsuite.com/app/site/hosting/scriptlet.nl?script=1360&deploy=1&compid=TSTDRV1358076","latitude":"43.5367","longitude":"-109.6422"}]}};

    getSourceLocation(pointT);
}

function initMap(point, sourceLocation) {
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: {
                lat: 40.787199,
                lng: -104.194715
            }
        }); //40.787199,-104.194715 Center of the USA

    var marker = new Array;

    for (var i = 0; i < point.record.items.length; i++) {

        var destinationLocation = {};
        destinationLocation.lat = point.record.items[i].latitude;
        destinationLocation.lng = point.record.items[i].longitude;

        var distance = getDistance(sourceLocation, destinationLocation);

        if (distance >= 200) {

            marker[i] = new google.maps.Marker({
                position: {
                    lat: parseInt(destinationLocation.lat, 10),
                    lng: parseInt(destinationLocation.lng, 10)
                },
                map: map,
                id: i
            });

            google.maps.event.addListener(marker[i], 'click', (function (marker, i) {
                return function () {
                    window.open(point.record.items[i].url);
                }
            })(marker[i], i));
        }
    }
}

function getSourceLocation(point) {

    var defualtLocation = {
        lat: 0,
        lng: 0
    };

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (p) {
                defualtLocation.lat = p.coords.latitude;
                defualtLocation.lng = p.coords.longitude;

                initMap(point, defualtLocation);
            },

            function (error) {
                if (error.code == error.PERMISSION_DENIED) {
                    // defualtLocation.lat = 23.634501;   
                    // defualtLocation.lng = -102.552784;  
                    defualtLocation.lat = 41.1905;
                    defualtLocation.lng = -104.4105;  // Near Pawnee National Grassland (it will not display if blocked location permission)

                    initMap(point, defualtLocation);
                }
            });

    } else {
        alert('Geo Location feature is not supported in this browser.');
    }
}

var rad = function (x) {
    return x * Math.PI / 180;
};

function getDistance(p1, p2) {

    var R = 6378137; // Earth’s mean radius in meter

    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(p1.lat)) *
        Math.cos(rad(p2.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return d / 1000; // returns the distance in kilometer
}